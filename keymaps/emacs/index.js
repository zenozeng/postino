const BaseModeMap = require('./base');
const GoogleChromeModeMap = require('./google-chrome');

module.exports = function (win) {
    if (win.indexOf('Google Chrome')) {
        return GoogleChromeModeMap;
    }
    if (win.indexOf('CMD')) {
        return null;
    }
    else {
        return BaseModeMap;
    }
}