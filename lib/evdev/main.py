import asyncio, evdev
from evdev import UInput, ecodes as e

uinput = UInput()

# List accessible event devices
devices = [evdev.InputDevice(fn) for fn in evdev.list_devices()]
for device in devices:
    print(device.fn, device.name, device.phys, device.capabilities(verbose=True))