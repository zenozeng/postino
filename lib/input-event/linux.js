import evdev from '../evdev';

evdev.stdout.on('data', (data) => {
    try {
        let keycodes = JSON.parse(data.toString());
        console.log({keycodes});
    } catch (e) {
        process.stdout.write(data);
    }
});

export default {
    on: (key, cb) => {

    }
}