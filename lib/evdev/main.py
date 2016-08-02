import asyncio, evdev, json
from evdev import UInput, ecodes

def is_keyboard_device(device):
    if device.name == 'postino-uinput-device':
        return False
    capabilities = device.capabilities()
    if 1 in capabilities: # EV_KEY
        if ecodes.KEY_SPACE in capabilities[1]:
            return True
    return False

# Get accessible event devices
devices = [evdev.InputDevice(fn) for fn in evdev.list_devices()]
keyboardDevices = list(filter(is_keyboard_device, devices))
for kbd in keyboardDevices:
    print('[evdev]', kbd)

# Init uinput device
uinput = UInput(name='postino-uinput-device')

# Init json encoder
json_encoder = json.JSONEncoder()

# Reading events from all keyboard devices
async def print_events(device):
    async for event in device.async_read_loop():
        # A synchronization event.
        # Synchronization events are used as markers to separate event.
        if event.type == ecodes.EV_SYN:
            active_keys = list()
            for dev in keyboardDevices:
                active_keys = active_keys + dev.active_keys()
            print(sorted(active_keys))

for device in keyboardDevices:
    asyncio.ensure_future(print_events(device))

loop = asyncio.get_event_loop()
loop.run_forever()

