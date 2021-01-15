import "./App.css";

// Importando arquivo de rotas
import Routes from "./routes";

// Importando página principal da aplicação
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Home />
      </Routes>
    </div>
  );
}

export default App;
