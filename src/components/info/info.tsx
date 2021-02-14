interface InfoProps {
  info: string;
}

const InputInfo = (props: InfoProps) => {
  return (
    <div className="text-xs md:whitespace-nowrap lg:text-sm font-ubuntu-mono text-gray-250">
      {props.info}
    </div>
  );
};

export default InputInfo;
