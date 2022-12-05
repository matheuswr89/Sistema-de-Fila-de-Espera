import { useEffect, useState } from "react";
import Select, { MultiValue } from "react-select";
import makeAnimated from "react-select/animated";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

import { getLast, save } from "../../database/sistema";
import { moedas, SELECT_VAZIO } from "../../helpers/const";
import { CotacaoInterface } from "../../helpers/interfaces";
import { alertBlock } from "../../helpers/util";

import "./style.css";

const animatedComponents = makeAnimated();

const Monetary = () => {
  const [selected, setSelected] = useState<MultiValue<CotacaoInterface>>([]);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleChange = (options: any) => {
    setSelected(options);
  };

  const enviar = () => {
    if (selected.length > 0) {
      save({ selected }, "monetary");
      setEdit(true);
    } else {
      toast.error(SELECT_VAZIO);
    }
  };

  useEffect(() => {
    const get = async () => {
      const values = await getLast("monetary");
      const monetary: CotacaoInterface[] = values?.get("selected");
      if (monetary) {
        setSelected(monetary);
        setEdit(true);
      }
      setLoading(false);
    };
    get();
  }, []);

  return (
    (!loading && (
      <section>
        <div className="field" onClick={() => alertBlock(edit)}>
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
            isDisabled={edit}
          />
        </div>
        {!edit && (
          <button onClick={() => enviar()} type="submit">
            Salvar
          </button>
        )}
        {edit && (
          <button className="editar" onClick={() => setEdit(false)}>
            Editar
          </button>
        )}
      </section>
    )) || <Loading />
  );
};

export default Monetary;
