import Keymap from '../base';

class EmacsKeymap extends Keymap {

    "Ctrl-a"() {
        this.send("Home");
    }

    "Ctrl-x Ctrl-s"() {
        this.send("Ctrl-s");
    }

    "Ctrl-x k"() {
        this.send("Ctrl-w");
    }

    "Ctrl-x Ctrl-c"() {
        this.send("Alt-F4");
    }

    "Ctrl-k"() {
        this.send("Shift-End Ctrl-x");
    }

}

function test({currentWindow}) {
    return true;
}

Keymap.register("Emacs Default", EmacsKeymap, test);

export default EmacsKeymap;