import { useNavigate } from "react-router-dom";
import useViewportWidth from "../hooks/useViewPortWidth";
import Button from "../components/Button";

const Landing = () => {
  const navigate = useNavigate();
  const isDesktopView = useViewportWidth('elg');

  return <div>
    <div>
    Welcome Back
    </div>
    <Button title="Login" variant="Login"/>
    </div>;
};

export default Landing;
