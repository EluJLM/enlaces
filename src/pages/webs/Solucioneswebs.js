import { SectionOne } from "../../components/Setions";
import { FaClipboardList, FaHourglassHalf } from "react-icons/fa";
import Services from "../../components/tarjetas/services";
import { webServices } from "./services";

const Solucioneswebs = () => {
  return (
    <>
      <SectionOne 
        text1={"Webs 🌐"}
        text2={"Soluciones a tu alcance"}
        textp={"Genera confianza y credibilidad en tus clientes"}
      />
      
      <Services title={"Ofrecemos"} services={webServices} />
      <div className="services-container">
        <h2 className="services-title">Soluciones</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaClipboardList size={40} className="icon" />
            <h3 className="service-title">
              Encuesta de Satisfacción
            </h3>
            <h3 className="service-title">
              <a 
                href="https://github.com/EluJLM/Encuesta_Satisfaccion" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Conoce más en GitHub
              </a>
            </h3>
            
            <p className="open-service-description">
            Haz que más clientes confíen en tu trabajo con una encuesta de satisfacción personalizada. Si eres manicurista, plomero, pintor o prestas cualquier servicio a domicilio, saber lo que piensan tus clientes te ayudará a mejorar y atraer más personas. Recibe opiniones, demuestra tu profesionalismo y gana más clientes por recomendación. Si deseas saber más, escríbenos a WhatsApp.
            </p>

            <h3 className="service-title">
              <a 
                href="https://en-de-satisfaccion.web.app/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Aplicación de prueba - Ir
              </a>
            </h3>

            <h3 className="service-title">
              <a 
                href="https://docs.google.com/spreadsheets/d/1xpqeRVU4XHIfs7f92kGHcOAMl2PDoUVF2HvlSP3i7aU/edit?gid=971993185#gid=971993185" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Hoja de Excel de pruebas - Ir
              </a>
            </h3>

            <p className="open-service-description">
              Para usarlo, debes ir a la aplicación de prueba y llenar los campos.  
              Luego, crea un token de 6 caracteres, cópialo en la hoja de excel - "tokens" al lado de un campo disponible,  
              regresa a la aplicación de prueba, copia la URL y envíasela a tu cliente.
            </p>
          </div>
          <div className="service-card">
            <FaHourglassHalf size={40} className="icon" />
            <h3 className="service-title">
                Próximamente más servicios
            </h3>
            
            <p className="open-service-description">
              Te ayudamos a conocer la opinión de tus clientes con una encuesta personalizada.  
              Si deseas saber más, toca el título de la tarjeta o escríbenos a WhatsApp.
            </p>

           
          </div>
        </div>
      </div>
    </>
  );
};

export default Solucioneswebs;
