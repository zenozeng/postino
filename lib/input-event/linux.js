import codes from 'input-event-codes';
import EventEmitter from 'events';
import * as fs from 'fs';
import bindings from 'bindings';

const evdev = bindings('evdev.node');

let devs = fs.readdirSync('/dev/input/by-id', {encoding: 'UTF-8'});
let keyboards = devs.filter((dev) => dev.endsWith('-kbd'));
keyboards = keyboards.map((name) => {
    let path = `/dev/input/by-id/${name}`;
    let fd = fs.openSync(path, 'r');
    return {path, fd};
});
keyboards = keyboards.filter((kbd) => {
    let name = evdev.getName(kbd.fd);
    return true;
});
keyboards.forEach((kbd) => {
    evdev.grab(kbd.fd);
    console.log(`Grab ${JSON.stringify(kbd)}`);
});

let count = 0;
function logAllEvents() {
    console.log('loop');
    keyboards.forEach((kbd) => {
        let ev = evdev.nextEvent(kbd.fd);
        console.log({ev});
    });
}

setTimeout(logAllEvents, 100);

const emmiter = new EventEmitter();

/*evdev.stdout.on('data', (data) => {
    try {
        data = JSON.parse(data.toString());
        let eventValue = data.shift(); // keyup, keydown, keyhold: 0, 1, 2
        let {key, modifiers} = parseKeycodes(data);
        let keys = modifiers.concat();
        if (eventValue !== 0) { // keyup
            if (!key) { // ignore holding modifiers, only handle keyup for them
                return;
            }
            keys.push(key);
        }
        if (keys.length > 0) {
            emmiter.emit('key', keys.join('+'));
        }
    } catch (e) {
        // console.log(e);
        process.stdout.write(data);
    }
});*/

const keyRemap = {
    KEY_LEFTCTRL: 'KEY_CTRL',
    KEY_RIGHTCTRL: 'KEY_CTRL',
    KEY_CAPSLOCK: 'KEY_CTRL',
    KEY_LEFTSHIFT: 'KEY_SHIFT',
    KEY_RIGHTSHIFT: 'KEY_SHIFT',
    KEY_LEFTALT: 'KEY_ALT',
    KEY_RIGHTALT: 'KEY_ALT'
}
function getKeyNameByCode(keycode) {
    if (!getKeyNameByCode.cache) {
        let cache = {};
        Object.keys(codes).forEach((name) => {
            if (name.indexOf('KEY_') === 0) {
                cache[codes[name]] = name;
            }
        });
        getKeyNameByCode.cache = cache;
    }
    let name = getKeyNameByCode.cache[keycode];
    return keyRemap[name] ? keyRemap[name] : name;
}

function parseKeycodes(keycodes) {
    let names = keycodes.map((code) => getKeyNameByCode(code));
    let currentKey = names[0];
    let key = null;
    let modifiers = [];
    if (names.indexOf('KEY_CTRL') > -1) {
        modifiers.push('KEY_CTRL');
    }
    if (names.indexOf('KEY_SHIFT') > -1) {
        modifiers.push('KEY_SHIFT');
    }
    if (names.indexOf('KEY_ALT') > -1) {
        modifiers.push('KEY_ALT');
    }
    if (['KEY_CTRL', 'KEY_ALT', 'KEY_SHIFT'].indexOf(currentKey) === -1) {
        key = currentKey;
    }
    return {key, modifiers};
}

export default emmiter;
