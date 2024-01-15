import { useState } from "react";

// import Nome from "./components/Nome";

function App() {
  const [aluno, setAluno] = useState("Rocker Tech");

  function handleChangeName(nome) {
    setAluno(nome);
  }

  return (
    <div>
      <h1>React app</h1>
      <h2>Olá: {aluno}</h2>
      <button onClick={() => handleChangeName("Ricardo Rocker")}>
        Mudar nome
      </button>
      {/* <Nome aluno="Ricardo" idade={28} />
      <br />
      <Nome aluno="Petrucia" idade={26} /> */}
    </div>
  );
}

export default App;
