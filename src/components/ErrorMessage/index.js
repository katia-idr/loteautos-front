import AlertIcon from "../alertIcon/AlertIcon";

const ErrorMessage = ({ msg }) => {
  return (
    <section className="errorContainer">
      <AlertIcon />
      <p className="error-message">{msg}</p>
    </section>
  );
};

export default ErrorMessage;
