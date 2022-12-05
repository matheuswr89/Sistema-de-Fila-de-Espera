import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

import { getLast, save } from "../../database/sistema";
import { CAMPO_VAZIO, categories, countrys } from "../../helpers/const";
import { NoticiasInterface } from "../../helpers/interfaces";
import { alertBlock, openToast } from "../../helpers/util";

import "./style.css";

const News = () => {
  const [values, setValues] = useState<NoticiasInterface>({
    termo: "",
    data: "",
    pais: "-1",
    categoria: "-1",
  });
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  const enviar = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const news: NoticiasInterface = {
      termo: e.target.q.value,
      data: e.target.date.value,
      pais: e.target.country.value,
      categoria: e.target.categoria.value,
    };
    if (news.termo && news.pais && news.data && news.categoria) {
      if (
        news.termo.trim().length > 0 &&
        news.pais !== "-1" &&
        news.data.trim().length > 0 &&
        news.categoria !== "-1"
      ) {
        openToast(save({ news }, "news"));
        setEdit(true);
      } else {
        toast.error(CAMPO_VAZIO);
      }
    }
  };

  useEffect(() => {
    const get = async () => {
      const values = await getLast("news");
      const news: NoticiasInterface = values?.get("news");
      if (news) {
        setValues(news);
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
          <div className="field" onClick={() => alertBlock(edit)}>
            <label htmlFor="q">Termo de pesquisa</label>
            <input
              type="text"
              name="q"
              id="q"
              placeholder="Digite aqui um termo..."
              disabled={edit}
              defaultValue={values.termo}
              required
            />
          </div>
          <div className="field" onClick={() => alertBlock(edit)}>
            <label htmlFor="date">Data de inicio:</label>
            <input
              type="date"
              name="date"
              id="date"
              placeholder="Selecione uma data..."
              disabled={edit}
              required
              defaultValue={values.data}
            />
          </div>
          <div className="field" onClick={() => alertBlock(edit)}>
            <label htmlFor="country">País</label>
            <select
              name="country"
              id="country"
              defaultValue={values.pais}
              disabled={edit}
              required
            >
              <option key={i++} value={-1} disabled>
                Escolha uma opção
              </option>
              {countrys.map((id) => (
                <option key={i++} value={id.value}>
                  {id.name}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="categoria">Categoria</label>
            <select
              name="categoria"
              id="categoria"
              defaultValue={values.categoria}
              disabled={edit}
              required
            >
              <option key={i++} value={-1} disabled>
                Escolha uma opção
              </option>
              {categories.map((id) => (
                <option key={i++} value={id.value}>
                  {id.name}
                </option>
              ))}
            </select>
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
export default News;
