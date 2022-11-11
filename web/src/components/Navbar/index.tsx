import { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { ContextInterface } from "../../helpers/interfaces";
import "./style.css";

const Navbar = () => {
  const { logout }: ContextInterface = useContext(AuthContext);

  const handleLogout = () => {
    if (logout) logout();
  };

  return (
    <nav>
      <div className="wrapper">
        <a className="logo" href="#home">
          Sistema de Fila de Espera
        </a>
        <a className="button" onClick={handleLogout}>
          Sair
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
