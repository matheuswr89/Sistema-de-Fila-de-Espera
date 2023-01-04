import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getLastQueue, updateSenha } from "../../database/sistema";
import { GUICHE_INVALIDO } from "../../helpers/const";
import { LastQueue } from "../../helpers/interfaces";

const ChamarSenha = () => {
  const [guiche, setGuiche] = useState<number>(0);
  const [atual, setAtual] = useState<QueryDocumentSnapshot<DocumentData>>();
  const [senhasChamadas, setSenhasChamadas] = useState<any[]>([]);
  const proximoFila = async (type: string) => {
    const array: any[] = senhasChamadas;
    const options: LastQueue = {
      order: "asc",
      tipo: 0,
      type,
    };
    const lastDoc = await getLastQueue(options);
    setAtual(lastDoc);
    if (lastDoc && guiche) {
      updateSenha(lastDoc, guiche);
      const s = `${lastDoc.get("type")}${lastDoc.get("senha")}`;
      array.push(s);
      setSenhasChamadas(array);
      localStorage.setItem("senhas", array.join(","));
    }
  };
  const salvarGuiche = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const g = e.target.guiche.value;
    if (g > 0) {
      setGuiche(g);
      localStorage.setItem("guiche", g);
      localStorage.setItem("data", new Date().toString());
      return;
    }
    toast.error(GUICHE_INVALIDO);
  };
  useEffect(() => {
    const date = localStorage.getItem("data");
    if (date !== null) {
      if (new Date(date).getDate() < new Date().getDate()) {
        localStorage.removeItem("guiche");
        localStorage.removeItem("data");
        localStorage.removeItem("senhas");
        return;
      }
      setGuiche(Number(localStorage.getItem("guiche")));
      const s = localStorage.getItem("senhas");
      if (s) setSenhasChamadas(s.split(","));
    }
  }, []);
  return (
    <section>
      <div className="senhas">
        {guiche == 0 && (
          <form onSubmit={salvarGuiche}>
            <div className="field">
              <label htmlFor="guiche">Forneça o número do guichê:</label>
              <input
                type="number"
                name="guiche"
                id="guiche"
                placeholder="Forneça um número..."
                required
                defaultValue={guiche}
              />
              <button>Salvar</button>
            </div>
          </form>
        )}
        {guiche > 0 && (
          <div>
            <button onClick={() => proximoFila("N")}>
              Chamar senha normal
            </button>
            <button onClick={() => proximoFila("P")}>
              Chamar senha preferencial
            </button>
            {atual && (
              <h1>
                Senha atual: {atual.get("type")}
                {atual.get("senha")}
              </h1>
            )}
            {!atual && <h1>Nenhuma senha chamada!</h1>}
          </div>
        )}
      </div>
      <div className="lista-senhas">
        <h1>Total de senhas chamadas: {senhasChamadas.length}</h1>
        <ul>
          {senhasChamadas.map((s: any) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ChamarSenha;
