import { useState } from "react";
import "./App.css";
// import { useState } from "react";
import Navbar from "./components/layout/navbar/navbar";

function App() {
  const [aluno, setAluno] = useState("Sujeito Corno");
  function changeName(){
    setAluno("Papa")
  };

  return (
    <div className="App">
      <Navbar />
      <main className="App-header">
        <form action="POST">
          <input type="text" placeholder="Seu nome: " />
          <button type="submit" onClick={() => changeName()}>Mudar Nome</button>
        </form>
        <span>{`Seu nome é: ${aluno}`}</span>
      </main>
    </div>
  );
}

export default App;
