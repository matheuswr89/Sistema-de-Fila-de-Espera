import { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

import { BsCurrencyExchange } from "react-icons/bs";
import { FiSettings, FiUserPlus } from "react-icons/fi";
import { GiPlayerNext } from "react-icons/gi";
import { ImNewspaper } from "react-icons/im";
import { TiWeatherPartlySunny } from "react-icons/ti";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/Auth";
import { ButtonGroup, Tab } from "../helpers/const";
import { ContextInterface, TabInterface } from "../helpers/interfaces";
import Cadastro from "../screen/Cadastro";
import ChamarSenha from "../screen/ChamarSenha";
import Geral from "../screen/Geral";
import Monetary from "../screen/Monetary";
import News from "../screen/News";
import Weather from "../screen/Weather";

const tabsElements: TabInterface[] = [
  {
    component: <Geral />,
    value: "tab6",
    name: "Configuração geral",
    icon: <FiSettings size={30} />,
  },
  {
    component: <News />,
    value: "tab5",
    name: "Configuração de notícias",
    icon: <ImNewspaper size={30} />,
  },
  {
    component: <Monetary />,
    value: "tab3",
    name: "Configuração de mercado",
    icon: <BsCurrencyExchange size={30} />,
  },
  {
    component: <Weather />,
    value: "tab4",
    name: "Configuração climática",
    icon: <TiWeatherPartlySunny size={30} />,
  },
  {
    component: <Cadastro />,
    value: "tab2",
    name: "Cadastro de atendentes",
    icon: <FiUserPlus size={30} />,
  },
  {
    component: <ChamarSenha />,
    value: "tab1",
    name: "Chamar o próximo da fila",
    icon: <GiPlayerNext size={30} />,
  },
];

const Home = () => {
  const { user }: ContextInterface = useContext(AuthContext);
  const [tab, setTab] = useState<number>(user.type === "admin" ? 0 : 5);
  const [showElement, setShowElement] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const showOrHide = () => setShowElement(!showElement);

  const verificaTela = () => {
    if (window.innerWidth <= 660) {
      setShowButton(true);
      setShowElement(false);
    } else {
      setShowButton(false);
      setShowElement(true);
    }
  };

  window.onresize = function () {
    verificaTela();
  };

  useEffect(() => {
    verificaTela();
  }, []);

  return (
    <>
      <Navbar />
      {user.type === "admin" && (
        <aside>
          {showButton && (
            <button className="bar-mobile" onClick={() => showOrHide()}>
              <FaBars />
            </button>
          )}
          {showElement && (
            <ButtonGroup className="tab-button-group">
              {tabsElements.map((type: TabInterface, index) => (
                <Tab
                  key={type.value}
                  active={tab !== -1 && tabsElements[tab].value === type.value}
                  onClick={() => {
                    setTab(index);
                    verificaTela();
                  }}
                >
                  {type.icon}
                  <p>{type.name}</p>
                </Tab>
              ))}
            </ButtonGroup>
          )}
        </aside>
      )}
      {showButton && <h2>{tabsElements[tab].name}</h2>}
      {tabsElements[tab].component}
    </>
  );
};

export default Home;
