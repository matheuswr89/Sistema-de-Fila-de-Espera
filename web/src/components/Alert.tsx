import { AlertInterface } from "../helpers/interfaces";

const Alert = ({ message, error, show }: AlertInterface) => {
  return (
    (show && (
      <div className={`alert ${error ? "failure" : "success"}`}>
        <h3>{message}</h3>
      </div>
    )) || <span />
  );
};
export default Alert;
