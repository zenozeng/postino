import * as cp from 'child_process';
import * as path from 'path';
import inputEventCodes from '../../input-event/codes';

const uinput = cp.exec(`python3 ${path.join(__dirname, 'uinput.py')}`);
uinput.stdout.on('data', (d) => process.stdout.write(d));
uinput.stderr.on('data', (d) => process.stderr.write(d));
process.on('exit', () => uinput.kill());

const keyRemap = {
    'KEY_CTRL': 'KEY_LEFTCTRL',
    'KEY_ALT': 'KEY_LEFTALT'
}

export default function(keystrokes) {
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