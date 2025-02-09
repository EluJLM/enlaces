import { SectionOne } from "../../components/Setions";
import Services from "./../../components/tarjetas/services";

import {services} from "./servicios"


const Cerrajeria = () => {
    return(
        <>
            <SectionOne 
                text1={"Cerrajeria"}
                text2={"Tu tranquilidad, es nuestra llave."}
                textp={"Llegamos cuando más nos necesitas."}
            />
            <Services title={"Servicios de cerrajeria"} services={services}/>
        </>
    )
}

export default Cerrajeria;