import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { useState } from "react";
import { getLastQueue, updateSenha } from "../../database/sistema";
import { LastQueue } from "../../helpers/interfaces";

const ChamarSenha = () => {
  const [atual, setAtual] = useState<QueryDocumentSnapshot<DocumentData>>();
  const [senhasChamadas, setSenhasChamadas] = useState<any[]>([]);
  const proximoFila = async (type: string) => {
    const options: LastQueue = {
      order: "asc",
      tipo: 0,
      type,
    };
    const lastDoc = await getLastQueue(options);
    setAtual(lastDoc);
    if (lastDoc) {
      updateSenha(lastDoc);
      setSenhasChamadas((prevNames) => [...prevNames, lastDoc]);
    }
  };

  return (
    <section>
      <div className="senhas">
        <button onClick={() => proximoFila("N")}>Chamar senha normal</button>
        <button onClick={() => proximoFila("P")}>
          Chamar senha preferencial
        </button>
        {atual && (
          <h1>
            Senha atual: {atual.get("type")}
            {atual.get("senha")}
          </h1>
        )}
      </div>
      {!atual && <h1>Nenhuma senha chamada!</h1>}

      <ul>
        {senhasChamadas.map((s: any) => (
          <li key={s.get("senha")}>
            {s.get("type")}
            {s.get("senha")}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ChamarSenha;
