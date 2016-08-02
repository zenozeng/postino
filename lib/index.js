import * as _ from 'lodash';
import inputEvent from './input-event';

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
                k.sort();
                k = k.join(',');
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

    flat.forEach((k) => {
        inputEvent.on(k, () => {
            console.log({KeyPressed: k});
            currentNode = currentNode[k];
            if (!currentNode) {
                currentNode = keystrokeTree; // keystroke not found, reset
            }
            if (currentNode.callback) {
                currentNode.callback();
                currentNode = keystrokeTree;
            }
        });
    })
}

activateKeymaps([
    '../keymaps/emacs/default'
]);