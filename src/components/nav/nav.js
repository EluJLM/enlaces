import { Link } from "react-router-dom";
import { cerrajeria, serviciotecnicosmartphone, solucioneswebs } from "../../routes/Routes_text";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./nav.css";

const Nav = () => {
  const [activo, setActivo] = useState(false);

  // Función para cerrar el menú al hacer clic en un enlace
  const cerrarMenu = () => {
    if (window.innerWidth <= 700) {
      setActivo(false);
    }
  };

  return (
    <nav>
      <h1 className="ENLACES">
        <Link to="/">Enlaces</Link>
      </h1>

      {/* Checkbox oculto para controlar el menú con CSS */}
      <input 
        type="checkbox" 
        id="menu-toggle" 
        className="menu-toggle" 
        checked={activo} 
        onChange={() => setActivo(!activo)} 
      />
      <label htmlFor="menu-toggle" className="menu-btn">
        {activo ? <FaTimes size={24} /> : <FaBars size={24} />}
      </label>

      <ul className={`nav-list ${activo ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={cerrarMenu}>Inicio</Link>
        </li>
        <li>
          <Link to={solucioneswebs} onClick={cerrarMenu}>Webs</Link>
        </li>
        <li>
          <Link to={serviciotecnicosmartphone} onClick={cerrarMenu}>Servicio tecnico</Link>
        </li>
        <li>
          <Link to={cerrajeria} onClick={cerrarMenu}>Cerrajeria</Link>
        </li>
        <li>
          {/*<Link to={serviciotecnicosmartphone} onClick={cerrarMenu}>Contacto</Link>*/}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
