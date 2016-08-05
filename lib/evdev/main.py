import asyncio, evdev, sys
from evdev import ecodes

def is_keyboard_device(device):
    if device.name == 'postino-uinput-device':
        return False
    capabilities = device.capabilities()
    if 1 in capabilities: # EV_KEY
        if ecodes.KEY_SPACE in capabilities[1]:
            return True
    return False

# Grab accessible event devices
devices = [evdev.InputDevice(fn) for fn in evdev.list_devices()]
keyboardDevices = list(filter(is_keyboard_device, devices))
for kbd in keyboardDevices:
    kbd.grab();
    print('[evdev.py] grab', kbd)
sys.stdout.flush()

# Reading events from all keyboard devices
async def print_events(device):
    async for event in device.async_read_loop():
        # A synchronization event.
        # Synchronization events are used as markers to separate event.
        if (event.type == ecodes.EV_KEY and (event.value == 1 or event.value == 2)): # key down or key hold
            active_keys = list()
            current_key = event.code;
            for dev in keyboardDevices:
                active_keys = [current_key] + active_keys + dev.active_keys()
            print(active_keys)
            sys.stdout.flush()

for device in keyboardDevices:
    asyncio.ensure_future(print_events(device))

loop = asyncio.get_event_loop()
loop.run_forever()

