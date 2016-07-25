import * as robot from 'robotjs';

class Keymap {

    constructor(options) {
        this.options = options;
        this.map = {};
    }

    on(accelerator, callback) {
        this.map[accelerator] = callback;
    }

    send(keystroke) {
        let queue = keystroke.split(' ');
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
            console.log({keyTap: {key, modifier}});
            robot.keyTap(key, modifier);
        }
        console.log({send: {keystroke}});
    }

}

export default Keymap;