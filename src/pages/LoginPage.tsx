import Header from "../components/Header";
import LoginSignupContainer from "../components/LoginSignupContainer";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <LoginSignupContainer type="login" />
    </div>
  );
};

export default LoginPage;
