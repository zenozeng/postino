/**
 * Send keys for Windows
 */

import * as ffi from 'ffi';

const User32 = ffi.Library('user32', {
    // Retrieves the window handle to the active window attached to the calling thread's message queue.
    // https://msdn.microsoft.com/en-us/library/windows/desktop/ms646292(v=vs.85).aspx
    'GetActiveWindow': ['int32', []],
});

export default function(keystrokes) {
    // activeWindowHWND = User32.GetActiveWindow();
    console.log({activeWindowHWND});
}

export {User32};