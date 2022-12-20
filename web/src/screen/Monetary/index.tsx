import { useEffect, useState } from "react";
import Select, { MultiValue } from "react-select";
import makeAnimated from "react-select/animated";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

import { get, set } from "../../database/sistema";
import { moedas, SELECT_VAZIO } from "../../helpers/const";
import { CotacaoInterface } from "../../helpers/interfaces";
import { openToast } from "../../helpers/util";

import "./style.css";

const animatedComponents = makeAnimated();

const Monetary = () => {
  const [selected, setSelected] = useState<MultiValue<CotacaoInterface>>([]);
  const [loading, setLoading] = useState(true);
  const handleChange = (options: any) => {
    setSelected(options);
  };

  const atualizaURL = async (array: any) => {
    const response = await get("urls");
    const data: any = response.data();
    let moedas = [];
    for (let i of array) {
      moedas.push(i["value"]);
    }
    data[
      "monetary"
    ] = `https://economia.awesomeapi.com.br/json/last/${moedas.join(",")}`;
    set("urls", data);
  };

  const enviar = () => {
    if (selected.length > 0) {
      openToast(set("monetary", selected));
      atualizaURL(selected);
    } else {
      toast.error(SELECT_VAZIO);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const values = await get("monetary");
      const monetary: any = values.data();

      if (monetary) {
        let array = [];
        for (let k in monetary) array.push(monetary[k]);
        setSelected(array);
      }
      setLoading(false);
    };
    getData();
  }, []);

  return (
    (!loading && (
      <section>
        <div className="field">
          <label>Selecione as moedas a serem monitoradas: </label>
          <Select
            options={moedas}
            defaultValue={selected}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            onChange={handleChange}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Selecione..."
            name="monetary"
            id="monetary"
          />
        </div>

        <button onClick={() => enviar()} type="submit">
          Salvar
        </button>
      </section>
    )) || <Loading />
  );
};

export default Monetary;
