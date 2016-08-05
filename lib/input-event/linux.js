import evdev from '../evdev';
import inputEventCodes from './codes.js';
import EventEmitter from 'events';

const emmiter = new EventEmitter();

evdev.stdout.on('data', (data) => {
    try {
        let keycodes = JSON.parse(data.toString());
        let keyString = keycodesToString(keycodes);
        if (keycodes.length > 0) {
            emmiter.emit('key', keyString);
        }
    } catch (e) {
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

function keycodesToString(keycodes) {
    let names = keycodes.map((code) => getKeyNameByCode(code));
    let currentKey = names[0];
    let keys = [];
    if (names.indexOf('KEY_CTRL') > -1) {
        keys.push('KEY_CTRL');
    }
    if (names.indexOf('KEY_SHIFT') > -1) {
        keys.push('KEY_SHIFT');
    }
    if (names.indexOf('KEY_ALT') > -1) {
        keys.push('KEY_SHIFT');
    }
    if (['KEY_CTRL', 'KEY_ALT', 'KEY_SHIFT'].indexOf(currentKey) === -1) {
        keys.push(currentKey);
    }
    return keys.join('+');
}

export default emmiter;
