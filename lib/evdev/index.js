import * as cp from 'child_process';
import * as path from 'path';

const cmd = ['python3', [path.join(__dirname, 'main.py')]];
console.log(cmd);
const evdev = cp.spawn.apply(cp, cmd);
evdev.stderr.on('data', (data) => process.stderr.write(data));
evdev.stdout.on('data', (d) => console.log(d));

export default evdev;