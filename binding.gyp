{
    "targets": [
        {
            "target_name": "evdev",
            "include_dirs" : [
                "<!(node -e \"require('nan')\")"
            ],
            "sources": [ "src/evdev/evdev.cc" ]
        }
    ]
}