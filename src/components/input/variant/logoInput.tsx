import InputInfo from "../../info/info";
import InputField from "../../input/input";
import inputvariantStyle from "../../input/variant";

const LogoInputComponents = () => {
  return (
    <div className="grid md:gap-x-32 gap-y-8 md:gap-y-12 md:grid-cols-3">
      <div className="space-y-4">
        <InputInfo info="<Input startIcon />" />
        <InputField
          iconStart={true}
          inputVariant={inputvariantStyle.LogoInputStart}
        />
      </div>
      <div className="space-y-4">
        <InputInfo info="<Input endIcon />" />
        <InputField
          iconEnd={true}
          inputVariant={inputvariantStyle.LogoInputEnd}
        />
      </div>
    </div>
  );
};

export default LogoInputComponents;
