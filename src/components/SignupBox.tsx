import { useFormik } from "formik";
import Button from "./Button";
import Text from "./Text";

const SignUpBox = () => {
  const signupFormik = useFormik({
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
    <form onSubmit={signupFormik.handleSubmit}>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-row gap-4 items-center">
          <Text title="Username: " />
          <input
            className="border rounded-lg border-black active:border-blue-200 p-2"
            id="username"
            name="username"
            type="username"
            onChange={signupFormik.handleChange}
            value={signupFormik.values.username}
          />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Text title="Password: " />
          <input
            className="border rounded-lg border-black active:border-blue-200 p-2"
            id="password"
            name="password"
            type="password"
            onChange={signupFormik.handleChange}
            value={signupFormik.values.password}
          />
        </div>
        <div className="flex gap-4">
          <Button title="Back" variant="Home" />
          <Button title="submit" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default SignUpBox;
