import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import { get, set } from "../../database/sistema";
import { TEMPO_INVALIDO } from "../../helpers/const";
import { ConfiguracaoInterface } from "../../helpers/interfaces";
import { openToast } from "../../helpers/util";

const Geral = () => {
  const [values, setValues] = useState<ConfiguracaoInterface>({
    tempoApi: 0,
  });
  const [loading, setLoading] = useState(true);

  const enviar = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const geral: ConfiguracaoInterface = {
      tempoApi: e.target.api.value,
    };
    if (geral.tempoApi) {
      if (geral.tempoApi > 30) {
        openToast(set("config", geral));
      } else {
        toast.error(TEMPO_INVALIDO);
      }
    }
  };

  useEffect(() => {
    const getData = async () => {
      const values = await get("config");
      const geral = values.data() as ConfiguracaoInterface;
      if (geral) {
        setValues(geral);
      }
      setLoading(false);
    };
    getData();
  }, []);

  return (
    (!loading && (
      <section>
        <form onSubmit={enviar}>
          <div className="field">
            <label htmlFor="api">
              Intervalo de tempo de atualização do conteúdo (segundos)
            </label>
            <input
              type="number"
              name="api"
              id="api"
              placeholder="Forneça um número..."
              required
              defaultValue={values.tempoApi}
            />
          </div>
          <button type="submit">Salvar</button>
        </form>
      </section>
    )) || <Loading />
  );
};

export default Geral;
