import { useState } from "react";
import { getLastQueue, save } from "../database/sistema";
import { LastQueue, SenhaInterface } from "../helpers/interfaces";

const Senhas = () => {
  const [senha, setSenha] = useState<SenhaInterface>();

  const pegarSenha = async (type: string) => {
    const options: LastQueue = {
      order: "desc",
      tipo: 1,
      type,
    };
    const lastQueue = await getLastQueue(options);
    const lastSenha = lastQueue?.get("senha");
    const actualSenha = lastSenha ? parseInt(lastSenha + 1) : 1;
    const objectSenha: SenhaInterface = {
      date: Math.floor(Date.now() / 1000),
      sendoAtendido: false,
      senha: actualSenha,
      type,
    };
    await save(objectSenha, "senhas");
    setSenha(objectSenha);
  };
  return (
    <div className="center">
      <div className="senhas">
        <button onClick={() => pegarSenha("N")}>Pegar senha normal</button>
        <button onClick={() => pegarSenha("P")}>
          Pegar senha preferencial
        </button>
        <span>
          {senha && (
            <h1>
              Sua senha: {senha.type}
              {senha.senha}
            </h1>
          )}
        </span>
      </div>
    </div>
  );
};

export default Senhas;
