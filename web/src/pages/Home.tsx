import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import { saveMessage } from "../database/sistema";
import { CAMPO_VAZIO, FALHA, SUCESSO } from "../helpers/const";
import { AlertInterface, MessageInterface } from "../helpers/interfaces";

const Home = () => {
  const [values, setValues] = useState<MessageInterface>({
    message: "",
  });

  const [alert, setAlert] = useState<AlertInterface>({
    message: "",
    error: false,
    show: false,
  });

  const handleChange =
    (prop: keyof MessageInterface) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        var btn = document.querySelector("button");
        btn?.click();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const enviar = () => {
    if (values.message.length > 0) {
      saveMessage(values)
        .then((res) => {
          addAlert(SUCESSO, false, true);
        })
        .catch((error) => {
          addAlert(FALHA + error, true, true);
        });
      setValues({ message: "" });
    } else {
      addAlert(CAMPO_VAZIO, true, true);
    }
  };

  const addAlert = (message: string, error: boolean, show?: boolean) => {
    setAlert({
      message,
      error,
      show,
    });
    setTimeout(() => addAlert("", false, false), 5000);
  };

  return (
    <header>
      <h2>Digite abaixo uma mensagem:</h2>
      <div>
        <input
          placeholder="Digite aqui"
          value={values.message}
          onChange={handleChange("message")}
          id="message-input"
          required
          type="message"
        />
        <button onClick={() => enviar()}>Enviar</button>
      </div>
      <Alert message={alert.message} error={alert.error} show={alert.show} />
    </header>
  );
};

export default Home;
