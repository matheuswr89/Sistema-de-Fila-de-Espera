import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import { getLast, save } from "../../database/sistema";
import { TEMPO_INVALIDO } from "../../helpers/const";
import { ConfiguracaoInterface } from "../../helpers/interfaces";
import { openToast } from "../../helpers/util";

const Geral = () => {
  const [values, setValues] = useState<ConfiguracaoInterface>({
    tempoTela: 0,
    tempoApi: 0,
  });
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  const enviar = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const geral: ConfiguracaoInterface = {
      tempoTela: e.target.noti.value,
      tempoApi: e.target.api.value,
    };
    if (geral.tempoTela && geral.tempoApi) {
      if (geral.tempoTela >= 10 && geral.tempoApi > 10) {
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

  let i = 0;
  return (
    (!loading && (
      <section>
        <form onSubmit={enviar}>
          <div className="field">
            <label htmlFor="noti">Tempo de tela das noticias</label>
            <input
              type="number"
              name="noti"
              id="noti"
              placeholder="Forneça um numero..."
              disabled={edit}
              defaultValue={values.tempoTela}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="api">
              Especifique de quanto em quanto tempo o conteudo será atualizado
            </label>
            <input
              type="number"
              name="api"
              id="api"
              placeholder="Forneça um numero..."
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
