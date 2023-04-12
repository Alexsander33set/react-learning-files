import { useState } from "react";
import "./App.css";
// import { useState } from "react";
import Navbar from "./components/layout/navbar/navbar";

function App() {
  var [aluno, setAluno] = useState("Sujeito Zé");
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
        <div className="loading"></div>
      </main>
    </div>
  );
}

export default App;
