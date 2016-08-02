// import * as robot from 'robotjs';

import * as activeWindow from 'active-window';
import sendKeys from '../lib/send-keys';

let currentActiveWindow = {};
activeWindow.getActiveWindow(({app, title}) => {
    currentActiveWindow = {app, title};
}, -1, 0.2); // infinity repeat, 100ms

class Keymap {

    constructor(options) {
        this.options = options;
        this.map = {};
    }

    on(accelerator, callback) {
        this.map[accelerator] = callback;
    }

    send(keystrokes) {
        keystrokes = keystrokes.map((ks) => ks.split('+').map((k) => `KEY_${k.toUpperCase()}`).join(',')).join(' ');
        sendKeys(keystrokes);
    }

    getActiveWindow() {
        return currentActiveWindow;
    }

}

export default Keymap;