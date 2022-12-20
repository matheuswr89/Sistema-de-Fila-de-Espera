import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

import { get, set } from "../../database/sistema";
import {
  categories,
  countrys,
  PAIS_NAO_SELECIONADO,
} from "../../helpers/const";
import { NoticiasInterface } from "../../helpers/interfaces";
import { openToast } from "../../helpers/util";

import "./style.css";

const News = (url: any) => {
  const [values, setValues] = useState<NoticiasInterface>({
    termo: "",
    pais: "-1",
    categoria: "-1",
  });
  const [loading, setLoading] = useState(true);

  const atualizaURL = async (newsData: NoticiasInterface) => {
    const response = await get("urls");
    const data: any = response.data();
    let url = "";
    if (newsData.categoria !== "-1") {
      url += `&category=${newsData.categoria}`;
    }
    if (newsData.termo) {
      url += `&q=${newsData.termo}`;
    }
    if (newsData.pais) {
      url += `&country=${newsData.pais}`;
    }
    data[
      "news"
    ] = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}${url}`;
    set("urls", data);
  };

  const enviar = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const news: NoticiasInterface = {
      termo: e.target.q.value,
      pais: e.target.country.value,
      categoria: e.target.categoria.value,
    };
    if (news.pais !== "-1") {
      openToast(set("news", news));
      atualizaURL(news);
    } else {
      toast.error(PAIS_NAO_SELECIONADO);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const values = await get("news");
      const news = values.data() as NoticiasInterface;
      if (news) {
        setValues(news);
      }
      setLoading(false);
    };
    getData();
  }, []);

  let i = 0;
  return (
    (!loading && (
      <section>
        <form onSubmit={enviar}>
          <div className="field">
            <label htmlFor="q">Termo de pesquisa</label>
            <input
              type="text"
              name="q"
              id="q"
              placeholder="Digite aqui um termo..."
              defaultValue={values.termo}
            />
          </div>
          <div className="field">
            <label htmlFor="country">País</label>
            <select name="country" id="country" defaultValue={values.pais}>
              <option key={i++} value={-1}>
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
            >
              <option key={i++} value={-1}>
                Escolha uma opção
              </option>
              {categories.map((id) => (
                <option key={i++} value={id.value}>
                  {id.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </section>
    )) || <Loading />
  );
};
export default News;
