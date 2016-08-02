# postino

## Dev

Requires Node.js v6.x.

## Requirements

### Windows

- PowerShell

### Linux

- xprop
- python 3.5+
- python-evdev (pip3 install evdev)

```bash
sudo chgrp input /dev/uinput
sudo chmod 666 /dev/uinput
sudo usermod -g input $USER
```