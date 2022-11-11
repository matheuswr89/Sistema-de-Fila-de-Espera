import React, { useContext, useState } from "react";
import { AuthContext } from "../context/Auth";
import { ContextInterface, LoginInterface } from "../helpers/interfaces";

const Login = () => {
  const [values, setValues] = useState<LoginInterface>({
    email: "",
    senha: "",
  });
  const { login }: ContextInterface = useContext(AuthContext);

  const handleChange =
    (prop: keyof LoginInterface) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (login) login(values);
  };

  return (
    <div id="login">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">Logar no Sistema</h1>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange("email")}
          />
        </div>
        <div className="field">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            value={values.senha}
            onChange={handleChange("senha")}
          />
        </div>
        <div className="actions">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
