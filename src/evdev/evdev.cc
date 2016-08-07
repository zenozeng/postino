#include "libevdev.h"
#include <nan.h>
#include <vector>

using v8::FunctionTemplate;
using v8::Handle;
using v8::Object;
using v8::String;
using Nan::GetFunction;
using Nan::New;
using Nan::Set;

vector<libdevdev*> devs;

NAN_METHOD(new_from_fd) {
    struct libevdev *dev;
    int fd = info[0]->Uint32Value();
    libevdev_new_from_fd(fd, &dev);
    devs.push_back(dev);
    return devs.size() - 1;
}

NAN_MODULE_INIT(InitAll) {
    Set(target, New<String>("newFromFd").ToLocalChecked(),
        GetFunction(New<FunctionTemplate>(new_from_fd)).ToLocalChecked());
}

NODE_MODULE(addon, InitAll)