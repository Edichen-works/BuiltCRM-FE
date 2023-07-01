import LOGO from "../images/Built_CRM.png";
import useViewportWidth from "../hooks/useViewPortWidth";
import LoginBox from "./LoginBox";
import SignUpBox from "./SignupBox";
import Text from "./Text";

type ContainerProps = {
  type: "login" | "signup";
};

const LoginSignupContainer = ({ type }: ContainerProps) => {
  const isDesktopView = useViewportWidth("elg");

  return (
    <div
      className={`flex ${isDesktopView ? "flex-row" : "flex-col"} items-center`}
    >
      <img src={LOGO} alt="logo" />
      <div className=" border border-black rounded-2xl h-1/2">
        <div className="p-8">
          <Text title={type === 'login' ? 'Log in' : 'Sign up'}/>
          {type === 'login' ? <LoginBox /> : <SignUpBox />}
        </div>
      </div>
    </div>
  );
};

export default LoginSignupContainer;
