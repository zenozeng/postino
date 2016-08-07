#include "libevdev-int.h"
#include <nan.h>
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
    enum libevdev_grab_mode grab = info[1]->Uint32Value() == 0 ? LIBEVDEV_UNGRAB : LIBEVDEV_GRAB;
    libevdev_grab(get_dev_by_fd(fd), grab);
}

NAN_METHOD(has_event_code) {
    int fd = info[0]->Uint32Value();
    unsigned int type = info[1]->Uint32Value();
    unsigned int code = info[2]->Uint32Value();
    struct libevdev* dev = get_dev_by_fd(fd);
    int ret = libevdev_has_event_code(dev, type, code);
    info.GetReturnValue().Set(ret);
}

NAN_METHOD(get_name) {
    int fd = info[0]->Uint32Value();
    const char* name = libevdev_get_name(get_dev_by_fd(fd));
    Nan::MaybeLocal<v8::String> ret = Nan::New<v8::String>(name);
    info.GetReturnValue().Set(ret.ToLocalChecked());
}

NAN_METHOD(next_event) {
    int fd = info[0]->Uint32Value();
    struct libevdev* dev = get_dev_by_fd(fd);
    struct input_event* ev;
    libevdev_next_event(dev, LIBEVDEV_READ_FLAG_NORMAL, ev);
}

NAN_MODULE_INIT(InitAll) {
    Set(target, New<String>("grab").ToLocalChecked(),
        GetFunction(New<FunctionTemplate>(grab)).ToLocalChecked());
    Set(target, New<String>("hasEventCode").ToLocalChecked(),
        GetFunction(New<FunctionTemplate>(has_event_code)).ToLocalChecked());
    Set(target, New<String>("getName").ToLocalChecked(),
        GetFunction(New<FunctionTemplate>(get_name)).ToLocalChecked());
}

NODE_MODULE(addon, InitAll)