import InputInfo from "../../info/info";
import MultiLineInputField from "../../input/textArea";
import inputvariantStyle from "../../input/variant";

const MultiLineInputComponents = () => {
  return (
    <div className="grid md:gap-x-32 gap-y-8 md:gap-y-12 md:grid-cols-2">
      <div className="space-y-4">
        <InputInfo info="<Input multiline row=”4” />" />
        <MultiLineInputField row={4} inputVariant={inputvariantStyle.Default} />
      </div>
    </div>
  );
};

export default MultiLineInputComponents;
