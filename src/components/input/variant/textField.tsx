import InputInfo from "../../info/info";
import InputField from "../../input/input";
import inputvariantStyle from "../../input/variant";

const TextFieldInputComponents = () => {
  return (
    <div className="grid md:grid-cols-3 gap-x-32">
      <div className="space-y-4">
        <InputInfo info="<Input value=”text” />" />
        <InputField
          inputValue="Text"
          inputVariant={inputvariantStyle.Default}
        />
      </div>
    </div>
  );
};

export default TextFieldInputComponents;
