import my from "./programer.png";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto px-2 lg:w-1/2 padre">
      <div className="grid grid-cols-1 gap-4">
        <div className="mt-20 flex flex-col gap-5 text-center">
          <h1 className="text-3xl font-bold">Sitio Web en Construcción 👷‍♂️</h1>
          <span className="text-xl font-mono">
            🖐 Hola mi nombre es Gabriel Agüero soy programador Front-end 👨‍💻. En
            estos momentos estoy trabajando en mejorar el sitio web para
            brindarte una mejor experiencia de navegación en el sitio !!! Pronto
            va a a estar disponible !!!
          </span>
        </div>

        <div className="flex justify-center rounded-2xl border-1 py-5 border-slate-600 shadow-2xl shadow-slate-600 mt-10">
          <img src={my} className="App-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
