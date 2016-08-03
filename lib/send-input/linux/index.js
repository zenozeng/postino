import * as uinput from 'uinput';
import * as Promise from 'bluebird';
import codes from '../../input-event/codes';

const setupUinput = Promise.promisify(uinput.setup, {context: uinput});
const createUinputDevice = Promise.promisify(uinput.create, {context: uinput});

const setup = setupUinput()
          .then((stream) => {
              createUinputDevice({name: 'postino-uinput-device'}).then(() => stream);
          });

const keyRemap = {
    'KEY_CTRL': 'KEY_LEFTCTRL',
    'KEY_ALT': 'KEY_LEFTALT'
};

export default function(keystrokes) {
    setup.then((stream) => {
    });
    keystrokes.split(' ').forEach((ks) => {
        let keys = ks.split(',');
        let keycodes = keys.map((k) => {
            if (keyRemap[k]) {
                k = keyRemap[k];
            }
            let keycode = inputEventCodes[k];
            if (!keycode) {
                throw new Error('Invalid key: ' + k);
            }
            return keycode;
        });
        uinput.stdin.write(keycodes.join(',') + '\n');
    });
}
