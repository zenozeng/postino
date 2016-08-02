/*
 * Input event codes from linux/input-event-codes.h
 *
 * Copyright (c) 1999-2002 Vojtech Pavlik
 * Copyright (c) 2015 Hans de Goede <hdegoede@redhat.com>
 * Copyright (c) 2016 Zeno Zeng <zenoofzeng@gmail.com>
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 as published by
 * the Free Software Foundation.
 */

const inputEventCodes = {}

/*
 * Device properties and quirks
 */

inputEventCodes.INPUT_PROP_POINTER = 0x00	/* needs a pointer */
inputEventCodes.INPUT_PROP_DIRECT = 0x01	/* direct input devices */
inputEventCodes.INPUT_PROP_BUTTONPAD = 0x02	/* has button(s) under pad */
inputEventCodes.INPUT_PROP_SEMI_MT = 0x03	/* touch rectangle only */
inputEventCodes.INPUT_PROP_TOPBUTTONPAD = 0x04	/* softbuttons at top of pad */
inputEventCodes.INPUT_PROP_POINTING_STICK = 0x05	/* is a pointing stick */
inputEventCodes.INPUT_PROP_ACCELEROMETER = 0x06	/* has accelerometer */

inputEventCodes.INPUT_PROP_MAX = 0x1f
inputEventCodes.INPUT_PROP_CNT = (inputEventCodes.INPUT_PROP_MAX + 1)

/*
 * Event types
 */

inputEventCodes.EV_SYN = 0x00
inputEventCodes.EV_KEY = 0x01
inputEventCodes.EV_REL = 0x02
inputEventCodes.EV_ABS = 0x03
inputEventCodes.EV_MSC = 0x04
inputEventCodes.EV_SW = 0x05
inputEventCodes.EV_LED = 0x11
inputEventCodes.EV_SND = 0x12
inputEventCodes.EV_REP = 0x14
inputEventCodes.EV_FF = 0x15
inputEventCodes.EV_PWR = 0x16
inputEventCodes.EV_FF_STATUS = 0x17
inputEventCodes.EV_MAX = 0x1f
inputEventCodes.EV_CNT = (inputEventCodes.EV_MAX+1)

/*
 * Synchronization events.
 */

inputEventCodes.SYN_REPORT = 0
inputEventCodes.SYN_CONFIG = 1
inputEventCodes.SYN_MT_REPORT = 2
inputEventCodes.SYN_DROPPED = 3
inputEventCodes.SYN_MAX = 0xf
inputEventCodes.SYN_CNT = (inputEventCodes.SYN_MAX+1)

/*
 * Keys and buttons
 *
 * Most of the keys/buttons are modeled after USB HUT 1.12
 * (see http://www.usb.org/developers/hidpage).
 * Abbreviations in the comments:
 * AC - Application Control
 * AL - Application Launch Button
 * SC - System Control
 */

inputEventCodes.KEY_RESERVED = 0
inputEventCodes.KEY_ESC = 1
inputEventCodes.KEY_1 = 2
inputEventCodes.KEY_2 = 3
inputEventCodes.KEY_3 = 4
inputEventCodes.KEY_4 = 5
inputEventCodes.KEY_5 = 6
inputEventCodes.KEY_6 = 7
inputEventCodes.KEY_7 = 8
inputEventCodes.KEY_8 = 9
inputEventCodes.KEY_9 = 10
inputEventCodes.KEY_0 = 11
inputEventCodes.KEY_MINUS = 12
inputEventCodes.KEY_EQUAL = 13
inputEventCodes.KEY_BACKSPACE = 14
inputEventCodes.KEY_TAB = 15
inputEventCodes.KEY_Q = 16
inputEventCodes.KEY_W = 17
inputEventCodes.KEY_E = 18
inputEventCodes.KEY_R = 19
inputEventCodes.KEY_T = 20
inputEventCodes.KEY_Y = 21
inputEventCodes.KEY_U = 22
inputEventCodes.KEY_I = 23
inputEventCodes.KEY_O = 24
inputEventCodes.KEY_P = 25
inputEventCodes.KEY_LEFTBRACE = 26
inputEventCodes.KEY_RIGHTBRACE = 27
inputEventCodes.KEY_ENTER = 28
inputEventCodes.KEY_LEFTCTRL = 29
inputEventCodes.KEY_A = 30
inputEventCodes.KEY_S = 31
inputEventCodes.KEY_D = 32
inputEventCodes.KEY_F = 33
inputEventCodes.KEY_G = 34
inputEventCodes.KEY_H = 35
inputEventCodes.KEY_J = 36
inputEventCodes.KEY_K = 37
inputEventCodes.KEY_L = 38
inputEventCodes.KEY_SEMICOLON = 39
inputEventCodes.KEY_APOSTROPHE = 40
inputEventCodes.KEY_GRAVE = 41
inputEventCodes.KEY_LEFTSHIFT = 42
inputEventCodes.KEY_BACKSLASH = 43
inputEventCodes.KEY_Z = 44
inputEventCodes.KEY_X = 45
inputEventCodes.KEY_C = 46
inputEventCodes.KEY_V = 47
inputEventCodes.KEY_B = 48
inputEventCodes.KEY_N = 49
inputEventCodes.KEY_M = 50
inputEventCodes.KEY_COMMA = 51
inputEventCodes.KEY_DOT = 52
inputEventCodes.KEY_SLASH = 53
inputEventCodes.KEY_RIGHTSHIFT = 54
inputEventCodes.KEY_KPASTERISK = 55
inputEventCodes.KEY_LEFTALT = 56
inputEventCodes.KEY_SPACE = 57
inputEventCodes.KEY_CAPSLOCK = 58
inputEventCodes.KEY_F1 = 59
inputEventCodes.KEY_F2 = 60
inputEventCodes.KEY_F3 = 61
inputEventCodes.KEY_F4 = 62
inputEventCodes.KEY_F5 = 63
inputEventCodes.KEY_F6 = 64
inputEventCodes.KEY_F7 = 65
inputEventCodes.KEY_F8 = 66
inputEventCodes.KEY_F9 = 67
inputEventCodes.KEY_F10 = 68
inputEventCodes.KEY_NUMLOCK = 69
inputEventCodes.KEY_SCROLLLOCK = 70
inputEventCodes.KEY_KP7 = 71
inputEventCodes.KEY_KP8 = 72
inputEventCodes.KEY_KP9 = 73
inputEventCodes.KEY_KPMINUS = 74
inputEventCodes.KEY_KP4 = 75
inputEventCodes.KEY_KP5 = 76
inputEventCodes.KEY_KP6 = 77
inputEventCodes.KEY_KPPLUS = 78
inputEventCodes.KEY_KP1 = 79
inputEventCodes.KEY_KP2 = 80
inputEventCodes.KEY_KP3 = 81
inputEventCodes.KEY_KP0 = 82
inputEventCodes.KEY_KPDOT = 83

inputEventCodes.KEY_ZENKAKUHANKAKU = 85
inputEventCodes.KEY_102ND = 86
inputEventCodes.KEY_F11 = 87
inputEventCodes.KEY_F12 = 88
inputEventCodes.KEY_RO = 89
inputEventCodes.KEY_KATAKANA = 90
inputEventCodes.KEY_HIRAGANA = 91
inputEventCodes.KEY_HENKAN = 92
inputEventCodes.KEY_KATAKANAHIRAGANA = 93
inputEventCodes.KEY_MUHENKAN = 94
inputEventCodes.KEY_KPJPCOMMA = 95
inputEventCodes.KEY_KPENTER = 96
inputEventCodes.KEY_RIGHTCTRL = 97
inputEventCodes.KEY_KPSLASH = 98
inputEventCodes.KEY_SYSRQ = 99
inputEventCodes.KEY_RIGHTALT = 100
inputEventCodes.KEY_LINEFEED = 101
inputEventCodes.KEY_HOME = 102
inputEventCodes.KEY_UP = 103
inputEventCodes.KEY_PAGEUP = 104
inputEventCodes.KEY_LEFT = 105
inputEventCodes.KEY_RIGHT = 106
inputEventCodes.KEY_END = 107
inputEventCodes.KEY_DOWN = 108
inputEventCodes.KEY_PAGEDOWN = 109
inputEventCodes.KEY_INSERT = 110
inputEventCodes.KEY_DELETE = 111
inputEventCodes.KEY_MACRO = 112
inputEventCodes.KEY_MUTE = 113
inputEventCodes.KEY_VOLUMEDOWN = 114
inputEventCodes.KEY_VOLUMEUP = 115
inputEventCodes.KEY_POWER = 116	/* SC System Power Down */
inputEventCodes.KEY_KPEQUAL = 117
inputEventCodes.KEY_KPPLUSMINUS = 118
inputEventCodes.KEY_PAUSE = 119
inputEventCodes.KEY_SCALE = 120	/* AL Compiz Scale (Expose) */

inputEventCodes.KEY_KPCOMMA = 121
inputEventCodes.KEY_HANGEUL = 122
inputEventCodes.KEY_HANGUEL = inputEventCodes.KEY_HANGEUL
inputEventCodes.KEY_HANJA = 123
inputEventCodes.KEY_YEN = 124
inputEventCodes.KEY_LEFTMETA = 125
inputEventCodes.KEY_RIGHTMETA = 126
inputEventCodes.KEY_COMPOSE = 127

inputEventCodes.KEY_STOP = 128	/* AC Stop */
inputEventCodes.KEY_AGAIN = 129
inputEventCodes.KEY_PROPS = 130	/* AC Properties */
inputEventCodes.KEY_UNDO = 131	/* AC Undo */
inputEventCodes.KEY_FRONT = 132
inputEventCodes.KEY_COPY = 133	/* AC Copy */
inputEventCodes.KEY_OPEN = 134	/* AC Open */
inputEventCodes.KEY_PASTE = 135	/* AC Paste */
inputEventCodes.KEY_FIND = 136	/* AC Search */
inputEventCodes.KEY_CUT = 137	/* AC Cut */
inputEventCodes.KEY_HELP = 138	/* AL Integrated Help Center */
inputEventCodes.KEY_MENU = 139	/* Menu (show menu) */
inputEventCodes.KEY_CALC = 140	/* AL Calculator */
inputEventCodes.KEY_SETUP = 141
inputEventCodes.KEY_SLEEP = 142	/* SC System Sleep */
inputEventCodes.KEY_WAKEUP = 143	/* System Wake Up */
inputEventCodes.KEY_FILE = 144	/* AL Local Machine Browser */
inputEventCodes.KEY_SENDFILE = 145
inputEventCodes.KEY_DELETEFILE = 146
inputEventCodes.KEY_XFER = 147
inputEventCodes.KEY_PROG1 = 148
inputEventCodes.KEY_PROG2 = 149
inputEventCodes.KEY_WWW = 150	/* AL Internet Browser */
inputEventCodes.KEY_MSDOS = 151
inputEventCodes.KEY_COFFEE = 152	/* AL Terminal Lock/Screensaver */
inputEventCodes.KEY_SCREENLOCK = inputEventCodes.KEY_COFFEE
inputEventCodes.KEY_ROTATE_DISPLAY = 153	/* Display orientation for e.g. tablets */
inputEventCodes.KEY_DIRECTION = inputEventCodes.KEY_ROTATE_DISPLAY
inputEventCodes.KEY_CYCLEWINDOWS = 154
inputEventCodes.KEY_MAIL = 155
inputEventCodes.KEY_BOOKMARKS = 156	/* AC Bookmarks */
inputEventCodes.KEY_COMPUTER = 157
inputEventCodes.KEY_BACK = 158	/* AC Back */
inputEventCodes.KEY_FORWARD = 159	/* AC Forward */
inputEventCodes.KEY_CLOSECD = 160
inputEventCodes.KEY_EJECTCD = 161
inputEventCodes.KEY_EJECTCLOSECD = 162
inputEventCodes.KEY_NEXTSONG = 163
inputEventCodes.KEY_PLAYPAUSE = 164
inputEventCodes.KEY_PREVIOUSSONG = 165
inputEventCodes.KEY_STOPCD = 166
inputEventCodes.KEY_RECORD = 167
inputEventCodes.KEY_REWIND = 168
inputEventCodes.KEY_PHONE = 169	/* Media Select Telephone */
inputEventCodes.KEY_ISO = 170
inputEventCodes.KEY_CONFIG = 171	/* AL Consumer Control Configuration */
inputEventCodes.KEY_HOMEPAGE = 172	/* AC Home */
inputEventCodes.KEY_REFRESH = 173	/* AC Refresh */
inputEventCodes.KEY_EXIT = 174	/* AC Exit */
inputEventCodes.KEY_MOVE = 175
inputEventCodes.KEY_EDIT = 176
inputEventCodes.KEY_SCROLLUP = 177
inputEventCodes.KEY_SCROLLDOWN = 178
inputEventCodes.KEY_KPLEFTPAREN = 179
inputEventCodes.KEY_KPRIGHTPAREN = 180
inputEventCodes.KEY_NEW = 181	/* AC New */
inputEventCodes.KEY_REDO = 182	/* AC Redo/Repeat */

inputEventCodes.KEY_F13 = 183
inputEventCodes.KEY_F14 = 184
inputEventCodes.KEY_F15 = 185
inputEventCodes.KEY_F16 = 186
inputEventCodes.KEY_F17 = 187
inputEventCodes.KEY_F18 = 188
inputEventCodes.KEY_F19 = 189
inputEventCodes.KEY_F20 = 190
inputEventCodes.KEY_F21 = 191
inputEventCodes.KEY_F22 = 192
inputEventCodes.KEY_F23 = 193
inputEventCodes.KEY_F24 = 194

inputEventCodes.KEY_PLAYCD = 200
inputEventCodes.KEY_PAUSECD = 201
inputEventCodes.KEY_PROG3 = 202
inputEventCodes.KEY_PROG4 = 203
inputEventCodes.KEY_DASHBOARD = 204	/* AL Dashboard */
inputEventCodes.KEY_SUSPEND = 205
inputEventCodes.KEY_CLOSE = 206	/* AC Close */
inputEventCodes.KEY_PLAY = 207
inputEventCodes.KEY_FASTFORWARD = 208
inputEventCodes.KEY_BASSBOOST = 209
inputEventCodes.KEY_PRINT = 210	/* AC Print */
inputEventCodes.KEY_HP = 211
inputEventCodes.KEY_CAMERA = 212
inputEventCodes.KEY_SOUND = 213
inputEventCodes.KEY_QUESTION = 214
inputEventCodes.KEY_EMAIL = 215
inputEventCodes.KEY_CHAT = 216
inputEventCodes.KEY_SEARCH = 217
inputEventCodes.KEY_CONNECT = 218
inputEventCodes.KEY_FINANCE = 219	/* AL Checkbook/Finance */
inputEventCodes.KEY_SPORT = 220
inputEventCodes.KEY_SHOP = 221
inputEventCodes.KEY_ALTERASE = 222
inputEventCodes.KEY_CANCEL = 223	/* AC Cancel */
inputEventCodes.KEY_BRIGHTNESSDOWN = 224
inputEventCodes.KEY_BRIGHTNESSUP = 225
inputEventCodes.KEY_MEDIA = 226

inputEventCodes.KEY_SWITCHVIDEOMODE = 227	/* Cycle between available video
 =    outputs (Monitor/LCD/TV-out/etc) */
inputEventCodes.KEY_KBDILLUMTOGGLE = 228
inputEventCodes.KEY_KBDILLUMDOWN = 229
inputEventCodes.KEY_KBDILLUMUP = 230

inputEventCodes.KEY_SEND = 231	/* AC Send */
inputEventCodes.KEY_REPLY = 232	/* AC Reply */
inputEventCodes.KEY_FORWARDMAIL = 233	/* AC Forward Msg */
inputEventCodes.KEY_SAVE = 234	/* AC Save */
inputEventCodes.KEY_DOCUMENTS = 235

inputEventCodes.KEY_BATTERY = 236

inputEventCodes.KEY_BLUETOOTH = 237
inputEventCodes.KEY_WLAN = 238
inputEventCodes.KEY_UWB = 239

inputEventCodes.KEY_UNKNOWN = 240

inputEventCodes.KEY_VIDEO_NEXT = 241	/* drive next video source */
inputEventCodes.KEY_VIDEO_PREV = 242	/* drive previous video source */
inputEventCodes.KEY_BRIGHTNESS_CYCLE = 243	/* brightness up, after max is min */
inputEventCodes.KEY_BRIGHTNESS_AUTO = 244	/* Set Auto Brightness: manual
 =   brightness control is off,
 =   rely on ambient */
inputEventCodes.KEY_BRIGHTNESS_ZERO = inputEventCodes.KEY_BRIGHTNESS_AUTO
inputEventCodes.KEY_DISPLAY_OFF = 245	/* display device to off state */

inputEventCodes.KEY_WWAN = 246	/* Wireless WAN (LTE, UMTS, GSM, etc.) */
inputEventCodes.KEY_WIMAX = inputEventCodes.KEY_WWAN
inputEventCodes.KEY_RFKILL = 247	/* Key that controls all radios */

inputEventCodes.KEY_MICMUTE = 248	/* Mute / unmute the microphone */

/* Code 255 is reserved for special needs of AT keyboard driver */

inputEventCodes.BTN_MISC = 0x100
inputEventCodes.BTN_0 = 0x100
inputEventCodes.BTN_1 = 0x101
inputEventCodes.BTN_2 = 0x102
inputEventCodes.BTN_3 = 0x103
inputEventCodes.BTN_4 = 0x104
inputEventCodes.BTN_5 = 0x105
inputEventCodes.BTN_6 = 0x106
inputEventCodes.BTN_7 = 0x107
inputEventCodes.BTN_8 = 0x108
inputEventCodes.BTN_9 = 0x109

inputEventCodes.BTN_MOUSE = 0x110
inputEventCodes.BTN_LEFT = 0x110
inputEventCodes.BTN_RIGHT = 0x111
inputEventCodes.BTN_MIDDLE = 0x112
inputEventCodes.BTN_SIDE = 0x113
inputEventCodes.BTN_EXTRA = 0x114
inputEventCodes.BTN_FORWARD = 0x115
inputEventCodes.BTN_BACK = 0x116
inputEventCodes.BTN_TASK = 0x117

inputEventCodes.BTN_JOYSTICK = 0x120
inputEventCodes.BTN_TRIGGER = 0x120
inputEventCodes.BTN_THUMB = 0x121
inputEventCodes.BTN_THUMB2 = 0x122
inputEventCodes.BTN_TOP = 0x123
inputEventCodes.BTN_TOP2 = 0x124
inputEventCodes.BTN_PINKIE = 0x125
inputEventCodes.BTN_BASE = 0x126
inputEventCodes.BTN_BASE2 = 0x127
inputEventCodes.BTN_BASE3 = 0x128
inputEventCodes.BTN_BASE4 = 0x129
inputEventCodes.BTN_BASE5 = 0x12a
inputEventCodes.BTN_BASE6 = 0x12b
inputEventCodes.BTN_DEAD = 0x12f

inputEventCodes.BTN_GAMEPAD = 0x130
inputEventCodes.BTN_SOUTH = 0x130
inputEventCodes.BTN_A = inputEventCodes.BTN_SOUTH
inputEventCodes.BTN_EAST = 0x131
inputEventCodes.BTN_B = inputEventCodes.BTN_EAST
inputEventCodes.BTN_C = 0x132
inputEventCodes.BTN_NORTH = 0x133
inputEventCodes.BTN_X = inputEventCodes.BTN_NORTH
inputEventCodes.BTN_WEST = 0x134
inputEventCodes.BTN_Y = inputEventCodes.BTN_WEST
inputEventCodes.BTN_Z = 0x135
inputEventCodes.BTN_TL = 0x136
inputEventCodes.BTN_TR = 0x137
inputEventCodes.BTN_TL2 = 0x138
inputEventCodes.BTN_TR2 = 0x139
inputEventCodes.BTN_SELECT = 0x13a
inputEventCodes.BTN_START = 0x13b
inputEventCodes.BTN_MODE = 0x13c
inputEventCodes.BTN_THUMBL = 0x13d
inputEventCodes.BTN_THUMBR = 0x13e

inputEventCodes.BTN_DIGI = 0x140
inputEventCodes.BTN_TOOL_PEN = 0x140
inputEventCodes.BTN_TOOL_RUBBER = 0x141
inputEventCodes.BTN_TOOL_BRUSH = 0x142
inputEventCodes.BTN_TOOL_PENCIL = 0x143
inputEventCodes.BTN_TOOL_AIRBRUSH = 0x144
inputEventCodes.BTN_TOOL_FINGER = 0x145
inputEventCodes.BTN_TOOL_MOUSE = 0x146
inputEventCodes.BTN_TOOL_LENS = 0x147
inputEventCodes.BTN_TOOL_QUINTTAP = 0x148	/* Five fingers on trackpad */
inputEventCodes.BTN_TOUCH = 0x14a
inputEventCodes.BTN_STYLUS = 0x14b
inputEventCodes.BTN_STYLUS2 = 0x14c
inputEventCodes.BTN_TOOL_DOUBLETAP = 0x14d
inputEventCodes.BTN_TOOL_TRIPLETAP = 0x14e
inputEventCodes.BTN_TOOL_QUADTAP = 0x14f	/* Four fingers on trackpad */

inputEventCodes.BTN_WHEEL = 0x150
inputEventCodes.BTN_GEAR_DOWN = 0x150
inputEventCodes.BTN_GEAR_UP = 0x151

inputEventCodes.KEY_OK = 0x160
inputEventCodes.KEY_SELECT = 0x161
inputEventCodes.KEY_GOTO = 0x162
inputEventCodes.KEY_CLEAR = 0x163
inputEventCodes.KEY_POWER2 = 0x164
inputEventCodes.KEY_OPTION = 0x165
inputEventCodes.KEY_INFO = 0x166	/* AL OEM Features/Tips/Tutorial */
inputEventCodes.KEY_TIME = 0x167
inputEventCodes.KEY_VENDOR = 0x168
inputEventCodes.KEY_ARCHIVE = 0x169
inputEventCodes.KEY_PROGRAM = 0x16a	/* Media Select Program Guide */
inputEventCodes.KEY_CHANNEL = 0x16b
inputEventCodes.KEY_FAVORITES = 0x16c
inputEventCodes.KEY_EPG = 0x16d
inputEventCodes.KEY_PVR = 0x16e	/* Media Select Home */
inputEventCodes.KEY_MHP = 0x16f
inputEventCodes.KEY_LANGUAGE = 0x170
inputEventCodes.KEY_TITLE = 0x171
inputEventCodes.KEY_SUBTITLE = 0x172
inputEventCodes.KEY_ANGLE = 0x173
inputEventCodes.KEY_ZOOM = 0x174
inputEventCodes.KEY_MODE = 0x175
inputEventCodes.KEY_KEYBOARD = 0x176
inputEventCodes.KEY_SCREEN = 0x177
inputEventCodes.KEY_PC = 0x178	/* Media Select Computer */
inputEventCodes.KEY_TV = 0x179	/* Media Select TV */
inputEventCodes.KEY_TV2 = 0x17a	/* Media Select Cable */
inputEventCodes.KEY_VCR = 0x17b	/* Media Select VCR */
inputEventCodes.KEY_VCR2 = 0x17c	/* VCR Plus */
inputEventCodes.KEY_SAT = 0x17d	/* Media Select Satellite */
inputEventCodes.KEY_SAT2 = 0x17e
inputEventCodes.KEY_CD = 0x17f	/* Media Select CD */
inputEventCodes.KEY_TAPE = 0x180	/* Media Select Tape */
inputEventCodes.KEY_RADIO = 0x181
inputEventCodes.KEY_TUNER = 0x182	/* Media Select Tuner */
inputEventCodes.KEY_PLAYER = 0x183
inputEventCodes.KEY_TEXT = 0x184
inputEventCodes.KEY_DVD = 0x185	/* Media Select DVD */
inputEventCodes.KEY_AUX = 0x186
inputEventCodes.KEY_MP3 = 0x187
inputEventCodes.KEY_AUDIO = 0x188	/* AL Audio Browser */
inputEventCodes.KEY_VIDEO = 0x189	/* AL Movie Browser */
inputEventCodes.KEY_DIRECTORY = 0x18a
inputEventCodes.KEY_LIST = 0x18b
inputEventCodes.KEY_MEMO = 0x18c	/* Media Select Messages */
inputEventCodes.KEY_CALENDAR = 0x18d
inputEventCodes.KEY_RED = 0x18e
inputEventCodes.KEY_GREEN = 0x18f
inputEventCodes.KEY_YELLOW = 0x190
inputEventCodes.KEY_BLUE = 0x191
inputEventCodes.KEY_CHANNELUP = 0x192	/* Channel Increment */
inputEventCodes.KEY_CHANNELDOWN = 0x193	/* Channel Decrement */
inputEventCodes.KEY_FIRST = 0x194
inputEventCodes.KEY_LAST = 0x195	/* Recall Last */
inputEventCodes.KEY_AB = 0x196
inputEventCodes.KEY_NEXT = 0x197
inputEventCodes.KEY_RESTART = 0x198
inputEventCodes.KEY_SLOW = 0x199
inputEventCodes.KEY_SHUFFLE = 0x19a
inputEventCodes.KEY_BREAK = 0x19b
inputEventCodes.KEY_PREVIOUS = 0x19c
inputEventCodes.KEY_DIGITS = 0x19d
inputEventCodes.KEY_TEEN = 0x19e
inputEventCodes.KEY_TWEN = 0x19f
inputEventCodes.KEY_VIDEOPHONE = 0x1a0	/* Media Select Video Phone */
inputEventCodes.KEY_GAMES = 0x1a1	/* Media Select Games */
inputEventCodes.KEY_ZOOMIN = 0x1a2	/* AC Zoom In */
inputEventCodes.KEY_ZOOMOUT = 0x1a3	/* AC Zoom Out */
inputEventCodes.KEY_ZOOMRESET = 0x1a4	/* AC Zoom */
inputEventCodes.KEY_WORDPROCESSOR = 0x1a5	/* AL Word Processor */
inputEventCodes.KEY_EDITOR = 0x1a6	/* AL Text Editor */
inputEventCodes.KEY_SPREADSHEET = 0x1a7	/* AL Spreadsheet */
inputEventCodes.KEY_GRAPHICSEDITOR = 0x1a8	/* AL Graphics Editor */
inputEventCodes.KEY_PRESENTATION = 0x1a9	/* AL Presentation App */
inputEventCodes.KEY_DATABASE = 0x1aa	/* AL Database App */
inputEventCodes.KEY_NEWS = 0x1ab	/* AL Newsreader */
inputEventCodes.KEY_VOICEMAIL = 0x1ac	/* AL Voicemail */
inputEventCodes.KEY_ADDRESSBOOK = 0x1ad	/* AL Contacts/Address Book */
inputEventCodes.KEY_MESSENGER = 0x1ae	/* AL Instant Messaging */
inputEventCodes.KEY_DISPLAYTOGGLE = 0x1af	/* Turn display (LCD) on and off */
inputEventCodes.KEY_BRIGHTNESS_TOGGLE = inputEventCodes.KEY_DISPLAYTOGGLE
inputEventCodes.KEY_SPELLCHECK = 0x1b0   /* AL Spell Check */
inputEventCodes.KEY_LOGOFF = 0x1b1   /* AL Logoff */

inputEventCodes.KEY_DOLLAR = 0x1b2
inputEventCodes.KEY_EURO = 0x1b3

inputEventCodes.KEY_FRAMEBACK = 0x1b4	/* Consumer - transport controls */
inputEventCodes.KEY_FRAMEFORWARD = 0x1b5
inputEventCodes.KEY_CONTEXT_MENU = 0x1b6	/* GenDesc - system context menu */
inputEventCodes.KEY_MEDIA_REPEAT = 0x1b7	/* Consumer - transport control */
inputEventCodes.KEY_10CHANNELSUP = 0x1b8	/* 10 channels up (10+) */
inputEventCodes.KEY_10CHANNELSDOWN = 0x1b9	/* 10 channels down (10-) */
inputEventCodes.KEY_IMAGES = 0x1ba	/* AL Image Browser */

inputEventCodes.KEY_DEL_EOL = 0x1c0
inputEventCodes.KEY_DEL_EOS = 0x1c1
inputEventCodes.KEY_INS_LINE = 0x1c2
inputEventCodes.KEY_DEL_LINE = 0x1c3

inputEventCodes.KEY_FN = 0x1d0
inputEventCodes.KEY_FN_ESC = 0x1d1
inputEventCodes.KEY_FN_F1 = 0x1d2
inputEventCodes.KEY_FN_F2 = 0x1d3
inputEventCodes.KEY_FN_F3 = 0x1d4
inputEventCodes.KEY_FN_F4 = 0x1d5
inputEventCodes.KEY_FN_F5 = 0x1d6
inputEventCodes.KEY_FN_F6 = 0x1d7
inputEventCodes.KEY_FN_F7 = 0x1d8
inputEventCodes.KEY_FN_F8 = 0x1d9
inputEventCodes.KEY_FN_F9 = 0x1da
inputEventCodes.KEY_FN_F10 = 0x1db
inputEventCodes.KEY_FN_F11 = 0x1dc
inputEventCodes.KEY_FN_F12 = 0x1dd
inputEventCodes.KEY_FN_1 = 0x1de
inputEventCodes.KEY_FN_2 = 0x1df
inputEventCodes.KEY_FN_D = 0x1e0
inputEventCodes.KEY_FN_E = 0x1e1
inputEventCodes.KEY_FN_F = 0x1e2
inputEventCodes.KEY_FN_S = 0x1e3
inputEventCodes.KEY_FN_B = 0x1e4

inputEventCodes.KEY_BRL_DOT1 = 0x1f1
inputEventCodes.KEY_BRL_DOT2 = 0x1f2
inputEventCodes.KEY_BRL_DOT3 = 0x1f3
inputEventCodes.KEY_BRL_DOT4 = 0x1f4
inputEventCodes.KEY_BRL_DOT5 = 0x1f5
inputEventCodes.KEY_BRL_DOT6 = 0x1f6
inputEventCodes.KEY_BRL_DOT7 = 0x1f7
inputEventCodes.KEY_BRL_DOT8 = 0x1f8
inputEventCodes.KEY_BRL_DOT9 = 0x1f9
inputEventCodes.KEY_BRL_DOT10 = 0x1fa

inputEventCodes.KEY_NUMERIC_0 = 0x200	/* used by phones, remote controls, */
inputEventCodes.KEY_NUMERIC_1 = 0x201	/* and other keypads */
inputEventCodes.KEY_NUMERIC_2 = 0x202
inputEventCodes.KEY_NUMERIC_3 = 0x203
inputEventCodes.KEY_NUMERIC_4 = 0x204
inputEventCodes.KEY_NUMERIC_5 = 0x205
inputEventCodes.KEY_NUMERIC_6 = 0x206
inputEventCodes.KEY_NUMERIC_7 = 0x207
inputEventCodes.KEY_NUMERIC_8 = 0x208
inputEventCodes.KEY_NUMERIC_9 = 0x209
inputEventCodes.KEY_NUMERIC_STAR = 0x20a
inputEventCodes.KEY_NUMERIC_POUND = 0x20b
inputEventCodes.KEY_NUMERIC_A = 0x20c	/* Phone key A - HUT Telephony 0xb9 */
inputEventCodes.KEY_NUMERIC_B = 0x20d
inputEventCodes.KEY_NUMERIC_C = 0x20e
inputEventCodes.KEY_NUMERIC_D = 0x20f

inputEventCodes.KEY_CAMERA_FOCUS = 0x210
inputEventCodes.KEY_WPS_BUTTON = 0x211	/* WiFi Protected Setup key */

inputEventCodes.KEY_TOUCHPAD_TOGGLE = 0x212	/* Request switch touchpad on or off */
inputEventCodes.KEY_TOUCHPAD_ON = 0x213
inputEventCodes.KEY_TOUCHPAD_OFF = 0x214

inputEventCodes.KEY_CAMERA_ZOOMIN = 0x215
inputEventCodes.KEY_CAMERA_ZOOMOUT = 0x216
inputEventCodes.KEY_CAMERA_UP = 0x217
inputEventCodes.KEY_CAMERA_DOWN = 0x218
inputEventCodes.KEY_CAMERA_LEFT = 0x219
inputEventCodes.KEY_CAMERA_RIGHT = 0x21a

inputEventCodes.KEY_ATTENDANT_ON = 0x21b
inputEventCodes.KEY_ATTENDANT_OFF = 0x21c
inputEventCodes.KEY_ATTENDANT_TOGGLE = 0x21d	/* Attendant call on or off */
inputEventCodes.KEY_LIGHTS_TOGGLE = 0x21e	/* Reading light on or off */

inputEventCodes.BTN_DPAD_UP = 0x220
inputEventCodes.BTN_DPAD_DOWN = 0x221
inputEventCodes.BTN_DPAD_LEFT = 0x222
inputEventCodes.BTN_DPAD_RIGHT = 0x223

inputEventCodes.KEY_ALS_TOGGLE = 0x230	/* Ambient light sensor */

inputEventCodes.KEY_BUTTONCONFIG = 0x240	/* AL Button Configuration */
inputEventCodes.KEY_TASKMANAGER = 0x241	/* AL Task/Project Manager */
inputEventCodes.KEY_JOURNAL = 0x242	/* AL Log/Journal/Timecard */
inputEventCodes.KEY_CONTROLPANEL = 0x243	/* AL Control Panel */
inputEventCodes.KEY_APPSELECT = 0x244	/* AL Select Task/Application */
inputEventCodes.KEY_SCREENSAVER = 0x245	/* AL Screen Saver */
inputEventCodes.KEY_VOICECOMMAND = 0x246	/* Listening Voice Command */

inputEventCodes.KEY_BRIGHTNESS_MIN = 0x250	/* Set Brightness to Minimum */
inputEventCodes.KEY_BRIGHTNESS_MAX = 0x251	/* Set Brightness to Maximum */

inputEventCodes.KEY_KBDINPUTASSIST_PREV = 0x260
inputEventCodes.KEY_KBDINPUTASSIST_NEXT = 0x261
inputEventCodes.KEY_KBDINPUTASSIST_PREVGROUP = 0x262
inputEventCodes.KEY_KBDINPUTASSIST_NEXTGROUP = 0x263
inputEventCodes.KEY_KBDINPUTASSIST_ACCEPT = 0x264
inputEventCodes.KEY_KBDINPUTASSIST_CANCEL = 0x265

/* Diagonal movement keys */
inputEventCodes.KEY_RIGHT_UP = 0x266
inputEventCodes.KEY_RIGHT_DOWN = 0x267
inputEventCodes.KEY_LEFT_UP = 0x268
inputEventCodes.KEY_LEFT_DOWN = 0x269

inputEventCodes.KEY_ROOT_MENU = 0x26a /* Show Device's Root Menu */
/* Show Top Menu of the Media (e.g. DVD) */
inputEventCodes.KEY_MEDIA_TOP_MENU = 0x26b
inputEventCodes.KEY_NUMERIC_11 = 0x26c
inputEventCodes.KEY_NUMERIC_12 = 0x26d
/*
 * Toggle Audio Description: refers to an audio service that helps blind and
 * visually impaired consumers understand the action in a program. Note: in
 * some countries this is referred to as "Video Description".
 */
inputEventCodes.KEY_AUDIO_DESC = 0x26e
inputEventCodes.KEY_3D_MODE = 0x26f
inputEventCodes.KEY_NEXT_FAVORITE = 0x270
inputEventCodes.KEY_STOP_RECORD = 0x271
inputEventCodes.KEY_PAUSE_RECORD = 0x272
inputEventCodes.KEY_VOD = 0x273 /* Video on Demand */
inputEventCodes.KEY_UNMUTE = 0x274
inputEventCodes.KEY_FASTREVERSE = 0x275
inputEventCodes.KEY_SLOWREVERSE = 0x276
/*
 * Control a data application associated with the currently viewed channel,
 * e.g. teletext or data broadcast application (MHEG, MHP, HbbTV, etc.)
 */
inputEventCodes.KEY_DATA = 0x275

inputEventCodes.BTN_TRIGGER_HAPPY = 0x2c0
inputEventCodes.BTN_TRIGGER_HAPPY1 = 0x2c0
inputEventCodes.BTN_TRIGGER_HAPPY2 = 0x2c1
inputEventCodes.BTN_TRIGGER_HAPPY3 = 0x2c2
inputEventCodes.BTN_TRIGGER_HAPPY4 = 0x2c3
inputEventCodes.BTN_TRIGGER_HAPPY5 = 0x2c4
inputEventCodes.BTN_TRIGGER_HAPPY6 = 0x2c5
inputEventCodes.BTN_TRIGGER_HAPPY7 = 0x2c6
inputEventCodes.BTN_TRIGGER_HAPPY8 = 0x2c7
inputEventCodes.BTN_TRIGGER_HAPPY9 = 0x2c8
inputEventCodes.BTN_TRIGGER_HAPPY10 = 0x2c9
inputEventCodes.BTN_TRIGGER_HAPPY11 = 0x2ca
inputEventCodes.BTN_TRIGGER_HAPPY12 = 0x2cb
inputEventCodes.BTN_TRIGGER_HAPPY13 = 0x2cc
inputEventCodes.BTN_TRIGGER_HAPPY14 = 0x2cd
inputEventCodes.BTN_TRIGGER_HAPPY15 = 0x2ce
inputEventCodes.BTN_TRIGGER_HAPPY16 = 0x2cf
inputEventCodes.BTN_TRIGGER_HAPPY17 = 0x2d0
inputEventCodes.BTN_TRIGGER_HAPPY18 = 0x2d1
inputEventCodes.BTN_TRIGGER_HAPPY19 = 0x2d2
inputEventCodes.BTN_TRIGGER_HAPPY20 = 0x2d3
inputEventCodes.BTN_TRIGGER_HAPPY21 = 0x2d4
inputEventCodes.BTN_TRIGGER_HAPPY22 = 0x2d5
inputEventCodes.BTN_TRIGGER_HAPPY23 = 0x2d6
inputEventCodes.BTN_TRIGGER_HAPPY24 = 0x2d7
inputEventCodes.BTN_TRIGGER_HAPPY25 = 0x2d8
inputEventCodes.BTN_TRIGGER_HAPPY26 = 0x2d9
inputEventCodes.BTN_TRIGGER_HAPPY27 = 0x2da
inputEventCodes.BTN_TRIGGER_HAPPY28 = 0x2db
inputEventCodes.BTN_TRIGGER_HAPPY29 = 0x2dc
inputEventCodes.BTN_TRIGGER_HAPPY30 = 0x2dd
inputEventCodes.BTN_TRIGGER_HAPPY31 = 0x2de
inputEventCodes.BTN_TRIGGER_HAPPY32 = 0x2df
inputEventCodes.BTN_TRIGGER_HAPPY33 = 0x2e0
inputEventCodes.BTN_TRIGGER_HAPPY34 = 0x2e1
inputEventCodes.BTN_TRIGGER_HAPPY35 = 0x2e2
inputEventCodes.BTN_TRIGGER_HAPPY36 = 0x2e3
inputEventCodes.BTN_TRIGGER_HAPPY37 = 0x2e4
inputEventCodes.BTN_TRIGGER_HAPPY38 = 0x2e5
inputEventCodes.BTN_TRIGGER_HAPPY39 = 0x2e6
inputEventCodes.BTN_TRIGGER_HAPPY40 = 0x2e7

/* We avoid low common keys in module aliases so they don't get huge. */
inputEventCodes.KEY_MIN_INTERESTING = inputEventCodes.KEY_MUTE
inputEventCodes.KEY_MAX = 0x2ff
inputEventCodes.KEY_CNT = (inputEventCodes.KEY_MAX+1)

/*
 * Relative axes
 */

inputEventCodes.REL_X = 0x00
inputEventCodes.REL_Y = 0x01
inputEventCodes.REL_Z = 0x02
inputEventCodes.REL_RX = 0x03
inputEventCodes.REL_RY = 0x04
inputEventCodes.REL_RZ = 0x05
inputEventCodes.REL_HWHEEL = 0x06
inputEventCodes.REL_DIAL = 0x07
inputEventCodes.REL_WHEEL = 0x08
inputEventCodes.REL_MISC = 0x09
inputEventCodes.REL_MAX = 0x0f
inputEventCodes.REL_CNT = (inputEventCodes.REL_MAX+1)

/*
 * Absolute axes
 */

inputEventCodes.ABS_X = 0x00
inputEventCodes.ABS_Y = 0x01
inputEventCodes.ABS_Z = 0x02
inputEventCodes.ABS_RX = 0x03
inputEventCodes.ABS_RY = 0x04
inputEventCodes.ABS_RZ = 0x05
inputEventCodes.ABS_THROTTLE = 0x06
inputEventCodes.ABS_RUDDER = 0x07
inputEventCodes.ABS_WHEEL = 0x08
inputEventCodes.ABS_GAS = 0x09
inputEventCodes.ABS_BRAKE = 0x0a
inputEventCodes.ABS_HAT0X = 0x10
inputEventCodes.ABS_HAT0Y = 0x11
inputEventCodes.ABS_HAT1X = 0x12
inputEventCodes.ABS_HAT1Y = 0x13
inputEventCodes.ABS_HAT2X = 0x14
inputEventCodes.ABS_HAT2Y = 0x15
inputEventCodes.ABS_HAT3X = 0x16
inputEventCodes.ABS_HAT3Y = 0x17
inputEventCodes.ABS_PRESSURE = 0x18
inputEventCodes.ABS_DISTANCE = 0x19
inputEventCodes.ABS_TILT_X = 0x1a
inputEventCodes.ABS_TILT_Y = 0x1b
inputEventCodes.ABS_TOOL_WIDTH = 0x1c

inputEventCodes.ABS_VOLUME = 0x20

inputEventCodes.ABS_MISC = 0x28

inputEventCodes.ABS_MT_SLOT = 0x2f	/* MT slot being modified */
inputEventCodes.ABS_MT_TOUCH_MAJOR = 0x30	/* Major axis of touching ellipse */
inputEventCodes.ABS_MT_TOUCH_MINOR = 0x31	/* Minor axis (omit if circular) */
inputEventCodes.ABS_MT_WIDTH_MAJOR = 0x32	/* Major axis of approaching ellipse */
inputEventCodes.ABS_MT_WIDTH_MINOR = 0x33	/* Minor axis (omit if circular) */
inputEventCodes.ABS_MT_ORIENTATION = 0x34	/* Ellipse orientation */
inputEventCodes.ABS_MT_POSITION_X = 0x35	/* Center X touch position */
inputEventCodes.ABS_MT_POSITION_Y = 0x36	/* Center Y touch position */
inputEventCodes.ABS_MT_TOOL_TYPE = 0x37	/* Type of touching device */
inputEventCodes.ABS_MT_BLOB_ID = 0x38	/* Group a set of packets as a blob */
inputEventCodes.ABS_MT_TRACKING_ID = 0x39	/* Unique ID of initiated contact */
inputEventCodes.ABS_MT_PRESSURE = 0x3a	/* Pressure on contact area */
inputEventCodes.ABS_MT_DISTANCE = 0x3b	/* Contact hover distance */
inputEventCodes.ABS_MT_TOOL_X = 0x3c	/* Center X tool position */
inputEventCodes.ABS_MT_TOOL_Y = 0x3d	/* Center Y tool position */


inputEventCodes.ABS_MAX = 0x3f
inputEventCodes.ABS_CNT = (inputEventCodes.ABS_MAX+1)

/*
 * Switch events
 */

inputEventCodes.SW_LID = 0x00  /* set = lid shut */
inputEventCodes.SW_TABLET_MODE = 0x01  /* set = tablet mode */
inputEventCodes.SW_HEADPHONE_INSERT = 0x02  /* set = inserted */
inputEventCodes.SW_RFKILL_ALL = 0x03  /* rfkill master switch, type "any"
 =  set = radio enabled */
inputEventCodes.SW_RADIO = inputEventCodes.SW_RFKILL_ALL	/* deprecated */
inputEventCodes.SW_MICROPHONE_INSERT = 0x04  /* set = inserted */
inputEventCodes.SW_DOCK = 0x05  /* set = plugged into dock */
inputEventCodes.SW_LINEOUT_INSERT = 0x06  /* set = inserted */
inputEventCodes.SW_JACK_PHYSICAL_INSERT = 0x07  /* set = mechanical switch set */
inputEventCodes.SW_VIDEOOUT_INSERT = 0x08  /* set = inserted */
inputEventCodes.SW_CAMERA_LENS_COVER = 0x09  /* set = lens covered */
inputEventCodes.SW_KEYPAD_SLIDE = 0x0a  /* set = keypad slide out */
inputEventCodes.SW_FRONT_PROXIMITY = 0x0b  /* set = front proximity sensor active */
inputEventCodes.SW_ROTATE_LOCK = 0x0c  /* set = rotate locked/disabled */
inputEventCodes.SW_LINEIN_INSERT = 0x0d  /* set = inserted */
inputEventCodes.SW_MUTE_DEVICE = 0x0e  /* set = device disabled */
inputEventCodes.SW_PEN_INSERTED = 0x0f  /* set = pen inserted */
inputEventCodes.SW_MAX = 0x0f
inputEventCodes.SW_CNT = (inputEventCodes.SW_MAX+1)

/*
 * Misc events
 */

inputEventCodes.MSC_SERIAL = 0x00
inputEventCodes.MSC_PULSELED = 0x01
inputEventCodes.MSC_GESTURE = 0x02
inputEventCodes.MSC_RAW = 0x03
inputEventCodes.MSC_SCAN = 0x04
inputEventCodes.MSC_TIMESTAMP = 0x05
inputEventCodes.MSC_MAX = 0x07
inputEventCodes.MSC_CNT = (inputEventCodes.MSC_MAX+1)

/*
 * LEDs
 */

inputEventCodes.LED_NUML = 0x00
inputEventCodes.LED_CAPSL = 0x01
inputEventCodes.LED_SCROLLL = 0x02
inputEventCodes.LED_COMPOSE = 0x03
inputEventCodes.LED_KANA = 0x04
inputEventCodes.LED_SLEEP = 0x05
inputEventCodes.LED_SUSPEND = 0x06
inputEventCodes.LED_MUTE = 0x07
inputEventCodes.LED_MISC = 0x08
inputEventCodes.LED_MAIL = 0x09
inputEventCodes.LED_CHARGING = 0x0a
inputEventCodes.LED_MAX = 0x0f
inputEventCodes.LED_CNT = (inputEventCodes.LED_MAX+1)

/*
 * Autorepeat values
 */

inputEventCodes.REP_DELAY = 0x00
inputEventCodes.REP_PERIOD = 0x01
inputEventCodes.REP_MAX = 0x01
inputEventCodes.REP_CNT = (inputEventCodes.REP_MAX+1)

/*
 * Sounds
 */

inputEventCodes.SND_CLICK = 0x00
inputEventCodes.SND_BELL = 0x01
inputEventCodes.SND_TONE = 0x02
inputEventCodes.SND_MAX = 0x07
inputEventCodes.SND_CNT = (inputEventCodes.SND_MAX+1)

export default inputEventCodes;