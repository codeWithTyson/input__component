import InputInfo from "../../info/info";
import InputField from "../../input/input";
import inputvariantStyle from "../../input/variant";

const FullWidthInputComponents = () => {
  return (
    <div className="space-y-4">
      <InputInfo info="<Input fullWidth />" />
      <InputField inputValue="Text" inputVariant={inputvariantStyle.Default} />
    </div>
  );
};

export default FullWidthInputComponents;
