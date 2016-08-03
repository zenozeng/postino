import * as uinput from 'uinput';
import * as Promise from 'bluebird';
import codes from '../../input-event/codes';

const setupUinput = Promise.promisify(uinput.setup, {context: uinput});
const createUinputDevice = Promise.promisify(uinput.create, {context: uinput});
const sendEvent = Promise.promisify(uinput.send_event, {context: uinput});

const setup = (async function() {
    const stream = await setupUinput();
    await createUinputDevice({
        name: 'postino-uinput-device'
    });
    return stream;
})();

/**
 * keystrokes for Ctrl-x Ctrl-s: [['KEY_CTRL', 'KEY_X'], ['KEY_CTRL', 'KEY_S']]
 */
export default async function sendInput(keystrokes) {
    const stream = await setup;
    while (keystrokes.length > 0) {
        let keystroke = keystrokes.shift();
        let keys = keystroke.split('+');
        let modifiers = {};
        let keycode = null;
        let map = {
            KEY_CTRL: 'ctrl',
            KEY_LEFTCTRL: 'ctrl',
            KEY_RIGHTCTRL: 'ctrl',
            KEY_ALT: 'alt',
            KEY_LEFTALT: 'alt',
            KEY_RIGHTALT: 'alt',
            KEY_SHIFT: 'shift',
            KEY_LEFTSHIFT: 'shift',
            KEY_RIGHTSHIFT: 'shift'
        };

        keys.forEach((k) => {
            if (map[k]) {
                modifiers[map[k]] = true;
                return;
            }
            if (codes[k]) {
                keycode = codes[k];
            } else {
                throw new Error(`Invalid key ${k}`);
            }
        });

        /**
         * Key down
         */
        if (modifiers.ctrl) {
            // stream, type, code, value
            await sendEvent(stream, codes.EV_KEY, codes.KEY_LEFTCTRL, 1);
        }
        if (modifiers.alt) {
            await sendEvent(stream, codes.EV_KEY, codes.KEY_LEFTALT, 1);
        }
        if (modifiers.shift) {
            await sendEvent(stream, codes.EV_KEY, codes.KEY_LEFTSHIFT, 1);
        }
        await sendEvent(stream, codes.EV_KEY, keycode, 1);
        // Synchronization events are used as markers to separate event.
        await sendEvent(stream, codes.EV_SYN);

        /**
         * Key up
         */
        await sendEvent(stream, codes.EV_KEY, keycode, 0);
        if (modifiers.shift) {
            await sendEvent(stream, codes.EV_KEY, codes.KEY_LEFTSHIFT, 0);
        }
        if (modifiers.alt) {
            await sendEvent(stream, codes.EV_KEY, codes.KEY_LEFTALT, 0);
        }
        if (modifiers.ctrl) {
            await sendEvent(stream, codes.EV_KEY, codes.KEY_LEFTCTRL, 0);
        }
        await sendEvent(stream, codes.EV_SYN);
    }
}
