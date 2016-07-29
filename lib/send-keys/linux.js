const cp = require('child_process');

export default function(keystrokes) {
    keystrokes = keystrokes.toLowerCase();
    keystrokes = keystrokes.replace(/home/g, 'Home');
    keystrokes = keystrokes.replace(/end/g, 'End');
    let cmd = `xdotool key ${keystrokes}`;
    console.log(cmd);
    cp.execSync(cmd, {stdio: [0, 1, 2]});
}