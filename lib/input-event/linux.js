import evdev from '../evdev';

evdev.stdout.on('data', (data) => {
    console.log(data);
    try {
        let keycodes = JSON.parse(data);
        console.log(keycodes);
    } catch (e) {
        process.stdout.write(data);
    }
});

export default {
    on: (key, cb) => {

    }
}