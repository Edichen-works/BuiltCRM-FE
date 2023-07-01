import useViewportWidth from "../hooks/useViewPortWidth";
import Button from "./Button";

const Header = () => {
  const isDesktopView = useViewportWidth("esm");
  const HEADER = "Built CRM";
  return (
    <div className="flex items-center justify-between pt-4">
      {isDesktopView ? HEADER : HEADER + " mobile"}
      <div className="flex gap-2">
        <Button title="Login" variant="Login" />
        <Button title="Sign up" variant="Signup" />
      </div>
    </div>
  );
};

export default Header;
