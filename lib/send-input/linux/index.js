import * as uinput from 'uinput';
import * as Bluebird from 'bluebird';
import codes from '../../input-event/codes';
import * as path from 'path';
import {Buffer} from 'buffer';

const setupUinput = Bluebird.promisify(uinput.setup, {context: uinput});
const createUinputDevice = Bluebird.promisify(uinput.create, {context: uinput});

const setup = (async function() {
    const stream = await setupUinput({
        EV_KEY: [uinput.KEY_H]
    });
    await createUinputDevice(stream, {
        name: 'postino-uinput-device',
        id : {
            bustype : uinput.BUS_VIRTUAL,
            vendor : 0x1,
            product : 0x1,
            version : 1
        }
    });
    return stream;
})();

function sendEvents(stream, events) {
    let totalLength = 0;
    const bufs = events.map(([type, code, value]) => {
        let buf = uinput.input_event(type, code, value);
        totalLength += buf.length;
        return buf;
    });
    let buf = Buffer.concat(bufs, totalLength);
    console.log({bufs, totalLength, buf});
    return new Promise((resolve, reject) => {
        stream.write(buf, (err) => err ? reject(err) : resolve());
    });
}


/**
 * keystrokes for Ctrl-x Ctrl-s: [['KEY_CTRL', 'KEY_X'], ['KEY_CTRL', 'KEY_S']]
 */
export default async function sendInput(keystrokes) {
    const stream = await setup;
    while (keystrokes.length > 0) {
        let keys = keystrokes.shift();
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

        console.log({modifiers, keycode});


        let events = [];

        /**
         * Key down
         */
        if (modifiers.ctrl) {
            events.push([codes.EV_KEY, codes.KEY_LEFTCTRL, 1]);
            events.push([codes.EV_SYN, codes.SYN_REPORT, 0]);
        }
        if (modifiers.alt) {
            events.push([codes.EV_KEY, codes.KEY_LEFTALT, 1]);
            events.push([codes.EV_SYN, codes.SYN_REPORT, 0]);
        }
        if (modifiers.shift) {
            events.push([codes.EV_KEY, codes.KEY_LEFTSHIFT, 1]);
            events.push([codes.EV_SYN, codes.SYN_REPORT, 0]);
        }
        events.push([codes.EV_KEY, keycode, 1]);
        events.push([codes.EV_SYN, codes.SYN_REPORT, 0]);


        /**
         * Key up
         */
        events.push([codes.EV_KEY, keycode, 0]);
        events.push([codes.EV_SYN, codes.SYN_REPORT, 0]);
        if (modifiers.ctrl) {
            events.push([codes.EV_KEY, codes.KEY_LEFTCTRL, 0]);
            events.push([codes.EV_SYN, codes.SYN_REPORT, 0]);
        }
        if (modifiers.alt) {
            events.push([codes.EV_KEY, codes.KEY_LEFTALT, 0]);
            events.push([codes.EV_SYN, codes.SYN_REPORT, 0]);
        }
        if (modifiers.shift) {
            events.push([codes.EV_KEY, codes.KEY_LEFTSHIFT, 0]);
            events.push([codes.EV_SYN, codes.SYN_REPORT, 0]);
        }

        console.log({events});

        await sendEvents(stream, events);
    }
}
