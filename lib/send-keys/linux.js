const cp = require('child_process');

export default function(keystrokes) {
    keystrokes = keystrokes.toLowerCase();
    ['home', 'end', 'up', 'down', 'right', 'left'].forEach((k) => {
        keystrokes = keystrokes.replace(k, k.charAt(0).toUpperCase() + k.slice(1));
    });
    // let cmd = `${__dirname}/xdotool.sh ${keystrokes}`;
    let cmd = `sleep 2 && xdotool getactivewindow key --clearmodifiers ${keystrokes}`;
    console.log(cmd);
    cp.execSync(cmd, {stdio: [0, 1, 2], shell: '/bin/bash'});
}