import asyncio, evdev
from evdev import UInput, ecodes

# List accessible event devices
devices = [evdev.InputDevice(fn) for fn in evdev.list_devices()]
for device in devices:
    capabilities = device.capabilities()
    if 1 in capabilities: # EV_KEY
        if ecodes.KEY_SPACE in capabilities[1]:
            print("Keyboard device found:", device.name, device.phys)

# Init uinput device
uinput = UInput(name='postino-uinput-device')