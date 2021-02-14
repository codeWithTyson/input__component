import DefaultInputComponents from "./input/variant/default";
import ErrorInputComponents from "./input/variant/error";
import DisabledInputComponents from "./input/variant/disabled";
import InterestingTextInputComponents from "./input/variant/bottomText";
import LogoInputComponents from "./input/variant/logoInput";
import TextFieldInputComponents from "./input/variant/textField";
import InputSizeComponents from "./input/variant/inputSize";
import FullWidthInputComponents from "./input/variant/fullWidth";
import MultiLineInputComponents from "./input/variant/multiLine";

const InputComponents = () => {
  return (
    <div className="space-y-8 md:space-y-12">
      <DefaultInputComponents />
      <ErrorInputComponents />
      <DisabledInputComponents />
      <InterestingTextInputComponents />
      <LogoInputComponents />
      <TextFieldInputComponents />
      <InputSizeComponents />
      <FullWidthInputComponents />
      <MultiLineInputComponents />
    </div>
  );
};

export default InputComponents;
