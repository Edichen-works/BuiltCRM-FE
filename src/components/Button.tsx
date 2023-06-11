import { useNavigate } from "react-router-dom";

type ButtonProps = {
  title: string;
  variant?: "Home"| 'Login';
  type?: 'button' | 'reset' | 'submit';
};

const Button = ({ title, variant, type }: ButtonProps) => {
  const navigate = useNavigate();
  const clickHandle = () => {
    if (variant === "Home") {
      navigate("/");
    }
    if (variant === 'Login'){
      navigate('/login')
    }
  };
  return (
    <>
      <button
        onClick={clickHandle}
        className="bg-slate-200 hover:bg-blue-200 transition-colors rounded-[100px]"
        type={type}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
