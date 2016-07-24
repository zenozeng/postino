const Keymap = require('../base');
const EmacsKeymap = require('./default');

class GoogleChromeEmacsKeymap extends EmacsKeymap {

    "Ctrl-s": () {
        this.send("F3");
    }

    "Ctrl-r": () {
        this.send("Shift+F3");
    }

}

function test({currentWindow}) {

}

Keymap.register("Emacs - Google Chrome", GoogleChromeEmacsKeymap, test);