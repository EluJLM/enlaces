import { useNavigate } from "react-router-dom";
import { FaLaptopCode, FaWrench, FaKey } from "react-icons/fa";
import "./styles.css";
import { serviciotecnicosmartphone, solucioneswebs, cerrajeria } from "../routes/Routes_text";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="section-one">
        <header style={{"padding-top": "180px"}}>
          <h3>Bienvenidos a</h3>
          <h1>Enlaces</h1>
          <p>
            <span>D</span>esarrollo y <span>S</span>oluciones para tu casa o negocio
          </p>
        </header>

        <div className="navigation-buttons">
          <button onClick={() => navigate(solucioneswebs)} className="nav-button web-button">
            <FaLaptopCode size={20} /> Soluciones Webs
          </button>
          <button onClick={() => navigate(serviciotecnicosmartphone)} className="nav-button tech-button">
            <FaWrench size={20} /> Servicio Técnico
          </button>
          <button onClick={() => navigate(cerrajeria)} className="nav-button locksmith-button">
            <FaKey size={20} /> Cerrajería
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
