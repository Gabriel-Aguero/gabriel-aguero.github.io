import pc from "./pc.svg";
import wave from "./wave.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-Title">
          <h1>Sitio Web en Construcción</h1>
          <span>
            Hola mi nombre es Gabriel Agüero soy programador Front-end. En estos
            momentos estoy trabajando en una mejora del sitio web para brindarme
            una mejor experiencia durante tu estadio en el sitio !!!
          </span>
        </div>
        <img src={pc} className="App-logo" alt="logo" />
      </header>
      <div className="App-footer">
        <img src={wave} className="wave" alt="wave" />
      </div>
    </div>
  );
}

export default App;
