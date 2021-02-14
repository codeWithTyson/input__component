import InputInfo from "../../info/info";
import InputField from "../../input/input";
import inputvariantStyle from "../variant";

const DefaultInputComponents = () => {
  return (
    <div className="grid md:gap-x-32 gap-y-8 md:gap-y-12 md:grid-cols-3">
      <div className="space-y-4">
        <InputInfo info="<Input />" />
        <InputField inputVariant={inputvariantStyle.Default} />
      </div>
      <div className="space-y-4">
        <InputInfo info="&:hover" />
        <InputField inputVariant={inputvariantStyle.DefaultHoverState} />
      </div>
      <div className="space-y-4">
        <InputInfo info="&:focus" />
        <InputField inputVariant={inputvariantStyle.DefaultFocusState} />
      </div>
    </div>
  );
};

export default DefaultInputComponents;
