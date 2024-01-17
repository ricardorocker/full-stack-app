import { useState } from "react";

function UseState() {
  const [aluno, setAluno] = useState("Rocker Tech");

  function handleChangeName(nome) {
    setAluno(nome);
  }
  return (
    <div>
      <h1>USE STATE</h1>
      <h2>Olá: {aluno}</h2>
      <button onClick={() => handleChangeName("Ricardo Rocker")}>
        Mudar Nome
      </button>
    </div>
  );
}

export default UseState;
