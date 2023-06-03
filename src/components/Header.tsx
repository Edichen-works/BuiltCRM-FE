type HeaderProps = {
  header?: string;
};

const Header = ({ header }: HeaderProps) => {
  return <div>{header}</div>;
};

export default Header;
