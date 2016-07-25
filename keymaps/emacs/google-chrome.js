import Keymap from '../base';
import EmacsKeymap from './default';

class GoogleChromeEmacsKeymap extends EmacsKeymap {

    "Ctrl-s"() {
        this.send("F3");
    }

    "Ctrl-r"() {
        this.send("Shift+F3");
    }

}

function test({currentWindow}) {

}

Keymap.register("Emacs - Google Chrome", GoogleChromeEmacsKeymap, test);

export default GoogleChromeEmacsKeymap;