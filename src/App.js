import { useEffect, useState } from "react";

// import Nome from "./components/Nome";

function App() {
  //  ARRAY
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([
    "Pagar a conta de luz",
    "Estudar React JS",
  ]);

  // LIFE CICLE HOOK - ngOnInit
  useEffect(() => {
    const tarefasStorage = localStorage.getItem("@tarefa");

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  // LIFE CICLE HOOK - ngOnChange(tarefas)
  useEffect(() => {
    localStorage.setItem("@tarefa", JSON.stringify(tarefas));
  }, [tarefas]);

  function handleRegisterTask(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput("");
  }

  // FORM
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState(0);

  const [user, setUser] = useState({});

  function handleRegister(e) {
    e.preventDefault();

    alert("Usuario registrado com sucesso!");
    setUser({
      nome: nome,
      idade: idade,
      email: email,
    });
  }

  // const [aluno, setAluno] = useState("Rocker Tech");

  // function handleChangeName(nome) {
  //   setAluno(nome);
  // }

  return (
    <div>
      <h1>Cadastrando usuário</h1>

      <form onSubmit={handleRegister}>
        <label>Nome:</label>
        <input
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />

        <label>Email:</label>
        <input
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label>Idade:</label>
        <input
          placeholder="Digite seu idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <br />

        <button type="submit">Registrar</button>
      </form>

      <br />

      <div>
        <span>Bem vindo: {user.nome}</span>
        <br />
        <span>Idade: {user.idade}</span>
        <br />
        <span>Email: {user.email}</span>
        <br />
      </div>

      <br />

      {/* ARRAY */}
      <h1>Cadastrando Tarefa</h1>

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

      <br />
      <br />

      {/* USESTATE */}
      {/* <h1>React app</h1>
      <h2>Olá: {aluno}</h2>
      <button onClick={() => handleChangeName("Ricardo Rocker")}>
        Mudar nome
      </button> */}

      {/* COMPONENTS & PROPS */}
      {/* <Nome aluno="Ricardo" idade={28} />
      <br />
      <Nome aluno="Petrucia" idade={26} /> */}
    </div>
  );
}

export default App;
