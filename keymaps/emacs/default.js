import Keymap from '../base';

class EmacsKeymap extends Keymap {

    constructor() {
        super();
        let map = {
            'Ctrl+a': 'Home',
            'Ctrl+x Ctrl+s': "Ctrl+s",
            'Ctrl+x k': 'Ctrl+w',
            'Ctrl+x Ctrl+c': 'Alt+F4',
            'Ctrl+k': 'Shift+End Ctrl+x'
        }

        Object.keys(map).forEach((k) => {
            this.on(k, () => this.send(map[k]));
        });
    }

    test({currentWindow}) {
        return true;
    }

}

export default EmacsKeymap;