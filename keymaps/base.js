// import * as robot from 'robotjs';

import * as activeWindow from 'active-window';
import sendKeys from '../lib/send-keys';

let currentActiveWindow = {};
activeWindow.getActiveWindow(({app, title}) => {
    currentActiveWindow = {app, title};
    console.log(currentActiveWindow);
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
        sendKeys(keystrokes);
    }

    getActiveWindow() {
        return currentActiveWindow;
    }

}

export default Keymap;