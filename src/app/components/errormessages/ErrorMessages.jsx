import { Caption } from "../typography";

const ErrorMessages = ({ message, error }) => {
  return (
    <section className={`h-full w-full border-accent border p-20 justify-center  self-center text-center ${error}`}>
      <Caption text={message} />
    </section>
  );
};

export default ErrorMessages;
