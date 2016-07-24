class Keymap {

    constructor(options) {
        this.options = options;
    }

}

Keymap.keymaps = [];

Keymap.register = function (keymap, test) {
    Keymap.keymaps.push({keymap, test});
};

module.exports = Keymap;