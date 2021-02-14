import InputInfo from "../../info/info";
import InputField from "../../input/input";
import inputvariantStyle from "../variant";

const ErrorInputComponents = () => {
  return (
    <div className="grid md:gap-x-32 gap-y-8 md:gap-y-12 md:grid-cols-3">
      <div className="space-y-4">
        <InputInfo info="<Input error />" />
        <InputField
          labelTextColor="text-red-500"
          inputVariant={inputvariantStyle.Error}
        />
      </div>
      <div className="space-y-4">
        <InputInfo info="&:hover" />
        <InputField
          labelTextColor="text-red-500"
          inputVariant={inputvariantStyle.ErrorHoverState}
        />
      </div>
      <div className="space-y-4">
        <InputInfo info="&:focus" />
        <InputField
          labelTextColor="text-red-500"
          inputVariant={inputvariantStyle.ErrorFocusState}
        />
      </div>
    </div>
  );
};

export default ErrorInputComponents;
