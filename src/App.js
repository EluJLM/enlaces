
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
import { serviciotecnicosmartphone, solucioneswebs } from "./components/Rutes";
import Solucioneswebs from "./pages/Solucioneswebs";
import Serviciotecnicodesmartphone from "./pages/Serviciotecnicodesmartphone";


function App() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  return( 
  <div>
    <nav>
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
          <Link to="/profile">Perfil</Link>
        </li>
      </ul>
    </nav>
    
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path={solucioneswebs} element={<Solucioneswebs />}></Route>
        <Route path={serviciotecnicosmartphone} element={<Serviciotecnicodesmartphone />}></Route>
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
