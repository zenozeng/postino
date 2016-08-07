#include "libevdev-int.h"
#include <nan.h>
#include <vector>
#include <map>

using v8::FunctionTemplate;
using v8::Handle;
using v8::Object;
using v8::String;
using Nan::GetFunction;
using Nan::New;
using Nan::Set;

std::map<int, struct libevdev*> devs;

struct libevdev* get_dev_by_fd(int fd) {
    struct libevdev *dev;
    std::map<int, struct libevdev*>::iterator it;
    it = devs.find(fd);
    if (it == devs.end()) {
        libevdev_new_from_fd(fd, &dev);
        devs.insert(std::pair<int, struct libevdev*>(fd, dev));
    } else {
        dev = devs.at(fd);
    }
    return dev;
}

NAN_METHOD(grab) {
    int fd = info[0]->Uint32Value();
    int libevdev_grab_mode = info[1]->Uint32Value();
    libevdev_grab(get_dev_by_fd(fd), libevdev_grab_mode);
}

NAN_MODULE_INIT(InitAll) {
    Set(target, New<String>("grab").ToLocalChecked(),
        GetFunction(New<FunctionTemplate>(grab)).ToLocalChecked());
}

NODE_MODULE(addon, InitAll)