import Button from "../components/Button";

const ErrorPage = () => {
  return (
    <div
      id="error-page"
      className=" flex flex-col gap-2 items-center justify-center min-h-screen"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Button title="Return to main page" variant="Home" />
    </div>
  );
};

export default ErrorPage;
