type LandingProps = {
  string?: string;
};

const Landing = ({ string, ...props }: LandingProps) => {
  return <>{string}</>;
};

export default Landing;
