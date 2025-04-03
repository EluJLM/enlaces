

import './App.css';
import MyRoutes from "./routes/routes";
import Nav from "./components/nav/nav";
import { Footer } from "./components/footer";
import FloatingButtons from "./components/floatingbutton/floatingbuttons";

function App() {

  return( 
  <div>
    <Nav />
    <FloatingButtons whatsapp={"573022547603"} phone={"3022547603"}/>
    
    <MyRoutes/>

    <Footer />
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
