

import { Routes, Route, Link } from "react-router-dom"


import { cerrajeria, satisfaccion, serviciotecnicosmartphone, solucioneswebs, urlgenerador } from "./Routes_text";

import Home from "./../pages/Home"
import NotFound from "./../pages/NotFound";
import Solucioneswebs from "../pages/webs/Solucioneswebs";
import Serviciotecnicodesmartphone from "../pages/serviciotecnico/serviciotecnico";
import Satisfaccion from "./../pages/Satisfaccion/Satisfaccion";
import UrlGenerator from "./../pages/UrlGenerador/UrlGenerador";
import Cerrajeria from "../pages/cerrejeria/cerrajeria";
import ScrollToTop from "../components/scrolltop";

const MyRoutes = () => {
    
    return(
        <>
     <ScrollToTop /> 
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path={solucioneswebs} element={<Solucioneswebs />}></Route>
        <Route path={serviciotecnicosmartphone} element={<Serviciotecnicodesmartphone />}></Route>
        <Route path={cerrajeria} element={<Cerrajeria />} ></Route>
        
        <Route path="*" element={<NotFound />}></Route>
        <Route path={satisfaccion} element={<Satisfaccion />} ></Route>
        <Route path={urlgenerador} element={<UrlGenerator />} ></Route>
    </Routes>
        </>
    )
};

export default MyRoutes;