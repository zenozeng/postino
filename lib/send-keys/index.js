import * as cp from 'child_process';
import * as path from 'path';
import sendKeysWindows from './windows';
import sendKyesLinux from './linux';

// let script = path.join(__dirname, 'send-keys.ps1');
// let shell = cp.exec(`powershell -executionpolicy bypass -File ${script}`);
// shell.stdin.setEncoding('utf-8');

export default function (keystrokes) {
    sendKyesLinux(keystrokes);
    return;
    sendKeysWindows(keystrokes);

    return;
    let queue = keystrokes.split(' ');
    while (queue.length > 0) {
        let keys = queue.shift().toLowerCase().split('+');
        let key = null;
        let modifier = {};
        keys.forEach((k) => {
            if (k == 'ctrl') {
                modifier.ctrl = true;
            }
            else if (k == 'shift') {
                modifier.shift = true;
            }
            else {
                key = k;
            }
        });
        let windowsKeystrokes = '';
        if (modifier.ctrl) {
            windowsKeystrokes += '^';
        }
        if (modifier.shift) {
            windowsKeystrokes += '+';
        }
        if (modifier.alt) {
            windowsKeystrokes += '%';
        }
        windowsKeystrokes += key.length > 0 ? `{${key}}` : key; // Handle {Home}
        console.log(windowsKeystrokes);
        shell.stdin.write(windowsKeystrokes);
        shell.stdin.write('\n');
        // robot.keyTap(key, modifier);
    }
}