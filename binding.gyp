{
    "targets": [
        {
            "target_name": "evdev",
            "sources": [
                "src/evdev/evdev.cc"
            ],
            "include_dirs" : [
                "<!(node -e \"require('nan')\")"
            ],
            "libraries": [
                "/usr/lib/x86_64-linux-gnu/libevdev.so.2"
            ]
        }
    ]
}