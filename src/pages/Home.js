import { useNavigate } from "react-router-dom";
import { SectionOne, SectionTwos } from "../components/Setions";
import './styles.css';
import { serviciotecnicosmartphone, solucioneswebs } from "../components/Rutes";

const Home = () => {
  const navigate = useNavigate();

  const goToSW = () => {
    navigate(solucioneswebs);
  }
  const goToSTS = () => {
    navigate(serviciotecnicosmartphone);
  }

  return (
    <>
      <SectionOne 
        text1={"Bienvenidos a"}
        text2={"Enlaces"}
        textp={"Desarrollo y soluciones para tu casa o negocio"}
      />
      <SectionTwos
        titulo={"SW - Soluciones Webs"}
        text={"Crea tu Carta Interactiva web"}
        
        titleListOne={"Benficios para el cliente"}
        listOne={["Acceso rápido y fácil",
                "Interfaz amigable",
                "Información detallada",
                "Traducción automática",
                "Facilidad para ordenar",
                "Mayor satisfacción"
              ]}  
        
        titleListTwo={"Beneficios para el negocio"}
        listTwo={["Actualización en tiempo real",
                "Reducción de costos",
                "Adaptación a nuevas normas sanitarias",
                "Mayor alcance",
                "Diferenciación de la competencia",
              ]}
        button={goToSW}
      />
      <SectionTwos
        titulo={"STS - Servicio tecnico de smartphones"}
        text={"En el momento solo estamos trabajando a android"}

        titleListOne={"Servicios Harward - fisicos"}
        listOne={["Cambio de Display y tactil",
                "Cambio de pin de Carga",
                "Cambio de la bateria",
                "Cambio de carcasas",
              ]} 

        titleListTwo={"Servicios Software"}
        listTwo={[
          "Desbloqueo de teléfonos",
          "Eliminación de virus y malware",
          "Optimización de rendimiento del sistema",
          "Liberación de móviles (desbloqueo de red)",
          "Solución de problemas de conectividad (Wi-Fi, Bluetooth, etc.)",
          "Restauración de software de fábrica",
          "Configuración y personalización de dispositivos",
        ]}
        button={goToSTS}
      />
    </>
  )
}

export default Home;