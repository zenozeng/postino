import * as cp from 'child_process';
import * as path from 'path';

const cmd = 'python3 ' + path.join(__dirname, 'main.py');
console.log(cmd);
const evdev = cp.exec(cmd);
evdev.stderr.on('data', (data) => process.stderr.write(data));

export default evdev;