type TextProps = {
  title: string,
};
const Text = ({ title }: TextProps) => {
  return <div className=" font-semibold text-[16px] text-black">{title}</div>;
};

export default Text;