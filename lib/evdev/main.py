import asyncio, evdev
from evdev import UInput, ecodes

# List accessible event devices
devices = [evdev.InputDevice(fn) for fn in evdev.list_devices()]
for device in devices:
    ecodes.KEY_A
    capabilities = device.capabilities()
    if 1 in capabilities: # EV_KEY
        capabilitiesEvkey = capabilities[1]
        print(capabilitiesEvkey)
# Init uinput device
uinput = UInput(name='postino-uinput-device')