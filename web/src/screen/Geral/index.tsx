import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import { getLast, save } from "../../database/sistema";
import { TEMPO_INVALIDO } from "../../helpers/const";
import { ConfiguracaoInterface } from "../../helpers/interfaces";
import { alertBlock, openToast } from "../../helpers/util";

const Geral = () => {
  const [values, setValues] = useState<ConfiguracaoInterface>({
    tempoApi: 0,
  });
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  const enviar = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const geral: ConfiguracaoInterface = {
      tempoApi: e.target.api.value,
    };
    if (geral.tempoApi) {
      if (geral.tempoApi > 30) {
        openToast(save({ geral }, "geral"));
        setEdit(true);
      } else {
        toast.error(TEMPO_INVALIDO);
      }
    }
  };

  useEffect(() => {
    const get = async () => {
      const values = await getLast("geral");
      const geral: ConfiguracaoInterface = values?.get("geral");
      if (geral) {
        setValues(geral);
        setEdit(true);
      }
      setLoading(false);
    };
    get();
  }, []);

  return (
    (!loading && (
      <section>
        <form onSubmit={enviar}>
          <div className="field" onClick={() => alertBlock(edit)}>
            <label htmlFor="api">
              Intervalo de tempo de atualização do conteúdo (segundos)
            </label>
            <input
              type="number"
              name="api"
              id="api"
              placeholder="Forneça um número..."
              disabled={edit}
              required
              defaultValue={values.tempoApi}
            />
          </div>
          {!edit && <button type="submit">Salvar</button>}
          {edit && (
            <button className="editar" onClick={() => setEdit(false)}>
              Editar
            </button>
          )}
        </form>
      </section>
    )) || <Loading />
  );
};

export default Geral;
