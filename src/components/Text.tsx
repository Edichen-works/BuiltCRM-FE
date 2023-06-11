type TextProps = {
  title: string,
};
const Text = ({ title }: TextProps) => {
  return <div>{title}</div>;
};

export default Text;