import asyncio, evdev, json, sys
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

async def print_events(device):
    async for event in device.async_read_loop():
        print(device.fn, evdev.categorize(event), sep=': ')

for device in keyboardDevices:
    asyncio.ensure_future(print_events(device))

loop = asyncio.get_event_loop()
loop.run_forever()