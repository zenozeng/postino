import * as cp from 'child_process';
import * as path from 'path';

const cmd = ['python3', [path.join(__dirname, 'main.py')]];
console.log(cmd);
const evdev = cp.spawn.apply(cp, cmd);
evdev.on('close', (code) => 'lib/evdev/main.py exit with code ' + code);

process.on('exit', () => evdev.kill());

export default evdev;