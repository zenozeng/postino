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

## Usage

### Gnome

Make sure you Key theme is **Default** and do **not** swap your control key and capslock key using gnome (Tweaks - Typing - Ctrl key postion).