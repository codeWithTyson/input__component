interface InputFieldProps {
  row?: number;
  inputVariant?: string;
}

const MultiLineInputField = (props: InputFieldProps) => {
  return (
    <div className="space-y-2 font-noto-sans">
      <span className="text-xs text-gray-250">Label</span>
      <textarea
        rows={props.row}
        className={props.inputVariant}
        placeholder="Placeholder"
      ></textarea>
    </div>
  );
};

export default MultiLineInputField;
