const cp = require('child_process');

export default function(keystrokes) {
    cp.exec(`xdotool key --clearmodifiers ${keystrokes}`);
}