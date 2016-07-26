// powershell  -executionpolicy bypass -File send-keys.ps1

export default function (keystrokes) {
    let queue = keystrokes.split(' ');
    while (queue.length > 0) {
        let keys = queue.shift().toLowerCase().split('+');
        let key = null;
        let modifier = [];
        keys.forEach((k) => {
            if (k == 'ctrl') {
                modifier.push('control');
            }
            else if (k == 'shift') {
                modifier.push('shift');
            }
            else {
                key = k;
            }
        });
        let windowsKeystrokes =
        windowsKeystrokes = key;
        console.log({keyTap: {key, modifier}});
        // robot.keyTap(key, modifier);
    }
    console.log({send: {keystroke}});
}