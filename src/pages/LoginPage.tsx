type loginProps = {
  string?: string;
};

const LoginPage = ({ string, ...props }: loginProps) => {
  return <div>LoginPage</div>;
};

export default LoginPage;
