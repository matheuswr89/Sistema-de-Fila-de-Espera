import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { useState } from "react";
import { getLastQueue, save, updateSenha } from "../../database/sistema";
import { SenhaInterface } from "../../helpers/interfaces";

const ChamarSenha = () => {
  const [senha, setSenha] = useState<SenhaInterface>();
  const [atual, setAtual] = useState<QueryDocumentSnapshot<DocumentData>>();
  const pegarSenha = async () => {
    const lastQueue = await getLastQueue("desc", 1);
    const lastSenha = lastQueue?.get("senha");
    const actualSenha = lastSenha ? parseInt(lastSenha + 1) : 1;
    const objectSenha: SenhaInterface = {
      date: Math.floor(Date.now() / 1000),
      sendoAtendido: false,
      senha: actualSenha,
    };
    await save(objectSenha, "senhas");
    setSenha(objectSenha);
  };

  const proximoFila = async () => {
    const lastDoc = await getLastQueue("asc", 0);
    setAtual(lastDoc);
    if (lastDoc) updateSenha(lastDoc);
  };

  return (
    <section>
      <div className="senhas">
        <button onClick={pegarSenha}>Pegar senha</button>
        <span>{senha && <h1>Sua senha: {senha.senha}</h1>}</span>
      </div>
      <div className="senhas">
        <button onClick={proximoFila}>Chamar o próximo da fila</button>
        {atual && <h1>Senha atual: {atual.get("senha")}</h1>}
      </div>
      {!atual && <h1>Nenhuma senha chamada ou disponivel!</h1>}
    </section>
  );
};

export default ChamarSenha;
