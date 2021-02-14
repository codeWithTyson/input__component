import InputInfo from "../../info/info";
import InputField from "../../input/input";
import inputvariantStyle from "../../input/variant";

const InterestingTextInputComponents = () => {
  return (
    <div className="grid md:gap-x-32 gap-y-8 md:gap-y-12 md:grid-cols-3">
      <div className="space-y-4">
        <InputInfo info="<Input&nbsp;helperText=”Some&nbsp;interesting&nbsp;text”&nbsp;/>" />
        <InputField
          inputVariant={inputvariantStyle.Default}
          bottomText={true}
        />
      </div>
      <div className="space-y-4">
        <InputInfo info="<Input helperText=”Some interesting text” error />" />
        <InputField
          labelTextColor="text-red-500"
          inputVariant={inputvariantStyle.Error}
          bottomText={true}
        />
      </div>
    </div>
  );
};

export default InterestingTextInputComponents;
