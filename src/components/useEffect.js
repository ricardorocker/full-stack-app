import { useEffect, useState } from "react";

function UseEffect() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([
    "Pagar a conta de luz",
    "Estudar React JS",
  ]);

  // LIFE CICLE HOOK - ngOnInit
  useEffect(() => {
    const tarefasStorage = localStorage.getItem("@task");

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  // LIFE CICLE HOOK - ngOnChange(tarefas)
  useEffect(() => {
    localStorage.setItem("@task", JSON.stringify(tarefas));
  }, [tarefas]);

  function handleRegisterTask(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput("");
  }

  return (
    <div>
      <h1>USE EFFECT - LIFE CYCLE HOOK</h1>

      <form onSubmit={handleRegisterTask}>
        <label>Nome da tarefa:</label>
        <input
          placeholder="Digite sua tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />

        <button type="submit">Registrar</button>
      </form>

      <br />

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffect;
