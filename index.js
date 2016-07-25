require("babel-register");

const {app, BrowserWindow, globalShortcut} = require('electron');
const _ = require('lodash');

let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({width: 400, height: 600});
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    // mainWindow.webContents.openDevTools()
    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);
app.on('ready', activateKeymaps);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
       app.quit()
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});

app.on('will-quit', () => globalShortcut.unregisterAll());

function activateKeymaps() {
    let keymaps = [
        './keymaps/emacs/default'
    ];
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
                if (!node[k]) {
                    node[k] = {};
                }
                node = node[k];
            }
            node.callback = keymap.map[keystroke];
        });
    });
    flat = _.uniq(flat);
    console.log(flat);
    console.log(keystrokeTree);

    let currentNode = keystrokeTree;

    flat.forEach((k) => {
        console.log({k});
        globalShortcut.register(k, () => {
            console.log(k);
            currentNode = currentNode[k];
            if (!currentNode) {
                currentNode = keystrokeTree; // keystroke not found, reset
            }
            if (currentNode.callback) {
                currentNode = keystrokeTree;
                currentNode.callback();
            }
        });
    })
}