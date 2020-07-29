#ifndef YI_TEXT_INPUT_ACTIVATE_MODULE
#define YI_TEXT_INPUT_ACTIVATE_MODULE
#include <view/YiTextEditView.h>
#include <youireact/NativeModule.h>

using namespace yi::react;

class YI_RN_MODULE(TextInputActivateModule)
{
public:
    YI_RN_EXPORT_NAME(TextInputActivateModule);
    TextInputActivateModule();
    YI_RN_EXPORT_METHOD(activate)(uint64_t tag);
    YI_RN_EXPORT_METHOD(deactivate)(uint64_t tag);
private:
    CYITextEditView *GetTextInput(uint64_t tag);
};

#endif // YI_TEXT_INPUT_ACTIVATE_MODULE