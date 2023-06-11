import useViewportWidth from "../hooks/useViewPortWidth";

const Header = () => {
  const isDesktopView = useViewportWidth("esm");
  const HEADER = "Built CRM";
  return (
    <div className=" h-1/5 w-full text-center">
      {isDesktopView ? HEADER : HEADER + " mobile"}
    </div>
  );
};

export default Header;
