require("babel-register");

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

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

function activateKeymaps() {
    const Keymap = require('./keymaps/base').default;
    const keymaps = [
        './keymaps/emacs/default'
    ];
    keymaps.forEach((v) => require(v));
    console.log(Keymap.keymaps);
}