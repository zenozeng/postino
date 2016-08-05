// import * as robot from 'robotjs';

import * as activeWindow from 'active-window';
import sendInput from '../lib/send-input';

let currentActiveWindow = {};
activeWindow.getActiveWindow(({app, title}) => {
    currentActiveWindow = {app, title};
}, -1, 0.2); // infinity repeat, 100ms

class Keymap {

    constructor(options) {
        this.options = options;
        this.map = {};
    }

    on(keystrokes, callback) {
        this.map[keystrokes] = callback;
    }

    send(keystrokes) {
        keystrokes = keystrokes.map((ks) => ks.split('+').map((k) => `KEY_${k.toUpperCase()}`).join('+')).join(' ');
        console.log('BaseKeymap: send: ', {keystrokes});
        sendInput(keystrokes);
    }

    getActiveWindow() {
        return currentActiveWindow;
    }

}

export default Keymap;
