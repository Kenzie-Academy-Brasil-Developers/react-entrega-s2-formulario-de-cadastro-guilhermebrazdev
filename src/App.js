import Routes from "./routes";
import "./assets/img/laptop_background.jpg";
import "./assets/img/feminino_laptop.jpg";
import "./assets/img/background_laptop_mobile.jpeg";
import react_pic from "./assets/img/react_draw.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="rotas">
          <Routes />
        </div>
        <div id="react">
          <img src={react_pic} alt="react img" />
        </div>
      </header>
    </div>
  );
}

export default App;
