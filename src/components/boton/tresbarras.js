
import { useState } from "react";
import "./MenuIcon.css";

const TresBarras = ({onClick}) => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
    if(onClick){
        onClick(active);
    }
  };

  return (
    <button
        className={"boton_tres_barras"} 
        onClick={toggleMenu}
    >
    <p>
        {active ?  "☰" : "X"}
    </p>
    </button>
  );
};

export default TresBarras;
