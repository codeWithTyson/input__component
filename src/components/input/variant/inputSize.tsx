import InputInfo from "../../info/info";
import InputField from "../../input/input";
import inputvariantStyle from "../../input/variant";

const InputSizeComponents = () => {
  return (
    <div className="grid md:gap-x-32 gap-y-8 md:gap-y-12 md:grid-cols-3">
      <div className="space-y-4">
        <InputInfo info="<Input size=”sm” />" />
        <InputField inputVariant={inputvariantStyle.SmallInput} />
      </div>
      <div className="space-y-4">
        <InputInfo info="<Input size=”md” />" />
        <InputField inputVariant={inputvariantStyle.LargeInput} />
      </div>
    </div>
  );
};

export default InputSizeComponents;
