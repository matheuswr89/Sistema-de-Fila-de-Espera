import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { loader } from "../..";
import Loading from "../../components/Loading";
import { getLast, save } from "../../database/sistema";
import { CAMPO_VAZIO } from "../../helpers/const";
import { openToast } from "../../helpers/util";

import "./style.css";

declare global {
  interface Window {
    initMap: () => void;
  }
}
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Weather = () => {
  const autoCompleteRef = useRef<any>();
  const inputRef = useRef<any>();
  const map = useRef<any>();
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [place, setPlace]: any = useState();

  useEffect(() => {
    const loadGoogle = async () => {
      const google = await loader.load();
      const values = await getLast("weather");
      setLoading(false);
      await sleep(5);
      autoCompleteRef.current = new google.maps.places.Autocomplete(
        inputRef.current
      );
      map.current = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: { lat: 0, lng: 0 },
          zoom: 1,
          draggable: false,
          zoomControl: false,
          scrollwheel: false,
          disableDoubleClickZoom: true,
        }
      );
      const marker = new google.maps.Marker({
        map: map.current,
        anchorPoint: new google.maps.Point(0, -29),
      });
      autoCompleteRef.current.addListener("place_changed", async function () {
        const result = await autoCompleteRef.current.getPlace();

        if (!result.geometry || !result.geometry.location) {
          toast.error(
            `Não foi possivel achar os detalhes do endereço: "${result.name}"`
          );
          return;
        }

        if (result.geometry.location) {
          map.current.setCenter(result.geometry.location);
          map.current.setZoom(17);
          setPlace({
            name: result.formatted_address,
            location: JSON.stringify(result.geometry.location),
          });
        }

        marker.setPosition(result.geometry.location);
        marker.setVisible(true);
      });
      const placeActual: any = values?.get("place");
      if (placeActual) {
        inputRef.current.value = placeActual.name;
        const location = JSON.parse(placeActual.location);
        map.current.setCenter(location);
        map.current.setZoom(17);
        marker.setPosition(location);
        marker.setVisible(true);
        setPlace(placeActual);
        setEdit(true);
      }
    };
    loadGoogle();
  }, []);

  const enviar = () => {
    if (inputRef.current.value.trim().length > 0) {
      openToast(save({ place }, "weather"));
      setEdit(true);
    } else {
      toast.error(CAMPO_VAZIO);
    }
  };
  return (
    (!loading && (
      <section>
        <div className="field">
          <label>Pesquise por um endereço:</label>
          <input
            ref={inputRef}
            placeholder="Pesquise por um local..."
            required
            disabled={edit}
          />
        </div>
        <div ref={map} id="map"></div>

        {!edit && <button onClick={() => enviar()}>Salvar</button>}
        {edit && (
          <button className="editar" onClick={() => setEdit(false)}>
            Editar
          </button>
        )}
      </section>
    )) || <Loading />
  );
};

export default Weather;
