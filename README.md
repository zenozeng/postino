# postino

## Requirements

### Windows

- Node.js v6.x
- PowerShell

### Linux

- Node.js v6.x
- xprop
- libevdev2
- libevdev-dev

```bash
sudo chgrp input /dev/uinput
sudo chmod 666 /dev/uinput
sudo usermod -g input $USER
```

## Usage

### Gnome

Make sure you Key theme is **Default**.