import InputInfo from "../../info/info";
import InputField from "../../input/input";
import inputvariantStyle from "../../input/variant";

const DisabledInputComponents = () => {
  return (
    <div className="grid md:grid-cols-3 gap-x-32">
      <div className="space-y-4">
        <InputInfo info="<Input&nbsp;disabled&nbsp;/>" />
        <InputField
          isDisabled={true}
          inputVariant={inputvariantStyle.DisabledInput}
        />
      </div>
    </div>
  );
};

export default DisabledInputComponents;
