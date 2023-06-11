import { useNavigate } from "react-router-dom";

type ButtonProps = {
  title: string;
  variant?: "home";
};

const Button = ({ title, variant }: ButtonProps) => {
  const navigate = useNavigate();
  const clickHandle = () => {
    if (variant === "home") {
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <button
        onClick={clickHandle}
        className=" bg-slate-200 hover:bg-blue-200 transition-colors rounded-[100px]"
      >
        {title}
      </button>
    </>
  );
};

export default Button;
