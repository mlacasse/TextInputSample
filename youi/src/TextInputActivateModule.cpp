#include "TextInputActivateModule.h"
#include <youireact/NativeModuleRegistry.h>
#include <youireact/ReactBridge.h>
#include <youireact/ShadowTree.h>
#include <youireact/nodes/ShadowTextInputRef.h>
#include "youireact/nodes/ReactComponent.h"
#include <logging/YiLoggerHelper.h>

#define LOG_TAG "TextInputActivateModule"

YI_RN_INSTANTIATE_MODULE(TextInputActivateModule);

YI_RN_REGISTER_MODULE(TextInputActivateModule);

TextInputActivateModule::TextInputActivateModule()
{
}

YI_RN_DEFINE_EXPORT_METHOD(TextInputActivateModule, activate)(uint64_t tag)
{
    auto textView = GetTextInput(tag);
    if (textView)
    {
       textView->Activate();
    }
}

YI_RN_DEFINE_EXPORT_METHOD(TextInputActivateModule, deactivate)(uint64_t tag)
{
    auto textView = GetTextInput(tag);
    if (textView)
    {
       textView->Deactivate();
    }
}

CYITextEditView *TextInputActivateModule::GetTextInput(uint64_t tag)
{
	using ::abort;
    auto pComponent = GetBridge().GetShadowTree().GetShadowRegistry().Get(tag);
  	YI_ASSERT(pComponent && pComponent->GetCounterpart(), LOG_TAG, "CYITextEditView with tag %" PRIu64 " not found in ShadowRegistry", tag);
  	auto pTextInput = dynamic_cast<CYITextEditView *>(pComponent->GetCounterpart());
  	return pTextInput;
}
