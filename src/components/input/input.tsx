import { useState } from "react";
import PhoneLogo from "./logo/phone.svg";
import LockLogo from "./logo/lock.svg";

interface InputFieldProps {
  labelTextColor?: string;
  iconStart?: boolean;
  iconEnd?: boolean;
  inputBoxSize?: string;
  inputVariant?: string;
  inputType?: string;
  inputName?: string;
  inputValue?: string;
  isDisabled?: boolean;
  bottomText?: boolean;
}

const InputField = (props: InputFieldProps) => {
  const [value, setInputValue] = useState(props.inputValue ?? "");
  return (
    <div className="space-y-2 font-noto-sans">
      <span className={`text-xs ${props.labelTextColor ?? "text-gray-250"}`}>
        Label
      </span>
      <div className="relative flex items-center gap-4">
        {props.iconStart ? (
          <img
            className="absolute w-4 h-4 left-2"
            src={PhoneLogo}
            alt="phone_logo"
          />
        ) : null}
        <input
          className={props.inputVariant}
          type={props.inputType}
          name={props.inputName}
          placeholder="Placeholder"
          value={value}
          onChange={(event) => setInputValue(event.target.value)}
          disabled={props.isDisabled}
        />
        {props.iconEnd ? (
          <img
            className="absolute w-4 h-4 right-2"
            src={LockLogo}
            alt="lock_logo"
          />
        ) : null}
      </div>
      {props.bottomText ? (
        <span className={`text-xs ${props.labelTextColor ?? "text-gray-250"}`}>
          Some interesting text
        </span>
      ) : null}
    </div>
  );
};

export default InputField;
