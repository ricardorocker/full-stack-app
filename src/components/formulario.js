import { useState } from "react";

function Formulario() {
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

  return (
    <div>
      <h1>FORMULARIO</h1>

      <form onSubmit={handleRegister}>
        <label>Nome:</label>
        <input
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        /> <br />

        <label>Email:</label>
        <input
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> <br />

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
    </div>
  );
}

export default Formulario;
