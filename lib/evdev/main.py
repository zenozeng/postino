import asyncio, evdev
from evdev import UInput, ecodes

def is_keyboard_device(device):
    capabilities = device.capabilities()
    if 1 in capabilities: # EV_KEY
        if ecodes.KEY_SPACE in capabilities[1]:
            return True
    return False

# Get accessible event devices
devices = [evdev.InputDevice(fn) for fn in evdev.list_devices()]
keyboardDevices = list(filter(is_keyboard_device, devices))

# Init uinput device
uinput = UInput(name='postino-uinput-device')

# Reading events from all keyboard devices
async def print_events(device):
    async for event in device.async_read_loop():
        print(device.fn, evdev.categorize(event), sep=': ')

for device in keyboardDevices:
    asyncio.ensure_future(print_events(device))

loop = asyncio.get_event_loop()
loop.run_forever()