
import { Suspense, useState } from "react";
import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Overview from "./pages/Overview"
import Settings from "./pages/Settings"
import ProtectedRoute from "./pages/ProtectedRoute";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import './App.css';
import { satisfaccion, serviciotecnicosmartphone, solucioneswebs, urlgenerador } from "./components/Rutes";
import Solucioneswebs from "./pages/Solucioneswebs";
import Serviciotecnicodesmartphone from "./pages/Serviciotecnicodesmartphone";
import Satisfaccion from "./pages/Satisfaccion/Satisfaccion";
import UrlGenerator from "./pages/UrlGenerador/UrlGenerador";


function App() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  return( 
  <div>
    <nav>
      <h1 className="ENLACES"> <Link to="/">ENLACES</Link></h1>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to={solucioneswebs}>{screenWidth > 700 ? "Soluciones Webs": "SW"}</Link>
        </li>
        <li>
          <Link to={serviciotecnicosmartphone}>{screenWidth > 700 ? "SerTec SmartPhones": "STS"}</Link>
        </li>
        <li>
        </li>
      </ul>
    </nav>
   

    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path={solucioneswebs} element={<Solucioneswebs />}></Route>
        <Route path={serviciotecnicosmartphone} element={<Serviciotecnicodesmartphone />}></Route>
        <Route path={satisfaccion} element={<Satisfaccion />} ></Route>
        <Route path={urlgenerador} element={<UrlGenerator />} ></Route>
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="overview" element={<Overview />}></Route>
          <Route path="settings" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Settings />
            </Suspense>
          }>
          </Route>
        </Route>
        <Route path="/profile" element={
          <ProtectedRoute isAuthenticated={true}>
            <Profile />
          </ProtectedRoute>
        }>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <footer class="footer">
      <div class="footer-content">
        <p class="footer-text">
          Creado por <strong>Enlaces - Elu Lozano</strong> &copy; 2025. Todos los derechos reservados.
        </p>
        <p class="footer-message">
          Queremos ayudar a la comunidad a mejorar y estamos para servir.
        </p>
        <div class="footer-links">
          <a href="https://wa.me/573022547603" target="_blank" class="footer-link">WhatsApp 3022547603</a>
          <a href="https://wa.me/573169525151" target="_blank" class="footer-link">WhatsApp 3169525151</a>
        </div>
        <div class="footer-buttons">
          <a href="tel:+573022547603" class="footer-button">Llamar 3022547603</a>
          <a href="tel:+573169525151" class="footer-button">Llamar 3169525151</a>
        </div>
      </div>
    </footer>
    </div>
    );
}

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
