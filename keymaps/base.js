class Keymap {

    constructor(options) {
        this.options = options;
        this.map = {};
    }

    set(accelerator, callback) {
        accelerator = this._parseKeystroke(accelerator);
        this.map[accelerator] = callback;
    }

    _parseKeystroke() {

    }

}

export default Keymap;