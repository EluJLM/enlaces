import { SectionOne } from "../../components/Setions";
import Services from "../../components/tarjetas/services";
import { technicalServices } from "./services";

const Serviciotecnicodesmartphone = () => {
    return(
        <>
            <SectionOne 
                text1={"Servicio tecnico"}
                text2={"Freidoras Arroceras Celulares Televisores y mas!"}
                textp={"Confiblidad, respeto y compromiso nos caracterizan."}
            />
            <Services title={"Ofrecemos"} services={technicalServices} />
        </>
    )
}

export default Serviciotecnicodesmartphone;