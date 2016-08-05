import evdev from '../evdev';
import inputEventCodes from './codes.js';
import EventEmitter from 'events';

const emmiter = new EventEmitter();

evdev.stdout.on('data', (data) => {
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
});

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
        Object.keys(inputEventCodes).forEach((name) => {
            if (name.indexOf('KEY_') === 0) {
                cache[inputEventCodes[name]] = name;
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
        modifiers.push('KEY_SHIFT');
    }
    if (['KEY_CTRL', 'KEY_ALT', 'KEY_SHIFT'].indexOf(currentKey) === -1) {
        key = currentKey;
    }
    return {key, modifiers};
}

export default emmiter;
