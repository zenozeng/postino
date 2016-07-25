class Keymap {

    constructor(options) {
        this.options = options;
        this.map = {};
    }

    on(accelerator, callback) {
        this.map[accelerator] = callback;
    }

    send(keystroke) {
        console.log({send: {keystroke}});
    }

}

export default Keymap;