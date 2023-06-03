import useViewportWidth from "../hooks/useViewPortWidth";
type HeaderProps = {
  header?: string;
};

const Header = ({ header }: HeaderProps) => {
  const isDesktopView = useViewportWidth("esm");
  return <div>{isDesktopView ? header : header + "mobile"}</div>;
};

export default Header;
