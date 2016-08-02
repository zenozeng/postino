import evdev from '../evdev';
import inputEventCodes from './codes.js';

evdev.stdout.on('data', (data) => {
    try {
        let keycodes = JSON.parse(data.toString());
        console.log({keycodes});
        console.log(keycodesToString(keycodes));
    } catch (e) {
        process.stdout.write(data);
    }
});

const keyRemap = {
    KEY_LEFTCTRL: 'KEY_CTRL',
    KEY_RIGHTCTRL: 'KEY_CTRL',
    KEY_CAPSLOCK: 'KEY_CTRL'
}
function getKeyNameByCode(keycode) {
    if (!getKeyNameByCode.cache) {
        let cache = {};
        Object.keys(inputEventCodes).forEach((name) => {
            if (name.indexOf('KEY_') === 0) {
                cache[inputEventCodes[name]] = name
            }
        });
        getKeyNameByCode.cache = cache;
    }
    let name = getKeyNameByCode.cache[keycode];
    return keyRemap[name] ? keyRemap[name] : name;
}

function keycodesToString(keycodes) {
    return keycodes.map((code) => getKeyNameByCode(code));
}

export default {
    on: (key, cb) => {

    }
}