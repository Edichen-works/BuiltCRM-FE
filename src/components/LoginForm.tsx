import { useFormik } from "formik";
import LOGO from "../images/Built_CRM.png";
import useViewportWidth from "../hooks/useViewPortWidth";
import Button from "./Button";
import Text from "./Text";

const LoginForm = () => {
  const isDesktopView = useViewportWidth("elg");
  const loginFormik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div className={`flex ${isDesktopView ? "flex-row" : "flex-col"} items-center`}>
      <img src={LOGO} alt="logo" />
      <div className=" border border-black rounded-2xl h-1/2">
        <div className="p-8">
          <form onSubmit={loginFormik.handleSubmit}>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex flex-row gap-4 items-center">
                <Text title="Username: " />
                <input
                  className="border rounded-lg border-black active:border-blue-200 p-2"
                  id="username"
                  name="username"
                  type="username"
                  onChange={loginFormik.handleChange}
                  value={loginFormik.values.username}
                />
              </div>
              <div className="flex flex-row gap-4 items-center">
                <Text title="Password: " />
                <input
                  className="border rounded-lg border-black active:border-blue-200 p-2"
                  id="password"
                  name="password"
                  type="password"
                  onChange={loginFormik.handleChange}
                  value={loginFormik.values.password}
                />
              </div>
              <div className="flex gap-4">
                <Button title="Back" variant="Home" />
                <Button title="submit" type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;