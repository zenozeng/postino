import * as _ from 'lodash';
import inputEvent from './input-event';
import sendInput from './send-input';
import codes from 'input-event-codes';

function sortKeys(k1, k2) {
    let map = {
        'KEY_CTRL': -3,
        'KEY_SHIFT': -2,
        'KEY_ALT': -1
    }
    return (map[k1] || codes[k1]) - (map[k2] || codes[k2]);
}

function activateKeymaps(keymaps) {
    keymaps = keymaps.map((v) => new (require(v).default)());
    let keystrokeTree = {};
    let flat = [];
    keymaps.forEach((keymap) => {
        Object.keys(keymap.map).forEach((keystroke) => {
            let ks = keystroke.split(' ');
            flat = flat.concat(ks);
            let node = keystrokeTree;
            while (ks.length > 0) {
                let k = ks.shift();
                k = k.split('+').map((v) => `KEY_${v.toUpperCase()}`);
                k.sort(sortKeys);
                k = k.join('+');
                if (!node[k]) {
                    node[k] = {};
                }
                node = node[k];
            }
            node.callback = keymap.map[keystroke];
        });
    });
    flat = _.uniq(flat);
    console.log(keystrokeTree);

    let currentNode = keystrokeTree;

    inputEvent.on('key', (k) => {
        console.log('key event', {k});
        if (currentNode[k]) {
            currentNode = currentNode[k];
            if (currentNode.callback) {
                console.log({callback: currentNode.callback});
                currentNode.callback();
                currentNode = keystrokeTree;
            }
        } else {
            currentNode = keystrokeTree;
            sendInput(k);
        }
    });
}

activateKeymaps([
    '../keymaps/emacs/default'
]);
