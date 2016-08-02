import sys
from evdev import UInput, ecodes

# Init uinput device
uinput = UInput(name='postino-uinput-device')

for line in sys.stdin:
    print('[uinput.py]', line)
    for keycode in line.split(','):
        uinput.write(ecodes.EV_KEY, int(keycode), 1) # keydown
    uinput.syn()
    for keycode in line.split(','):
        uinput.write(ecodes.EV_KEY, int(keycode), 0) # keyup
    uinput.syn()
    sys.stdout.flush()

