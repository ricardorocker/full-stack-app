import Nome from "./components/Nome";

function App() {
  return (
    <div>
      <h1>React app</h1>
      <Nome aluno="Ricardo" idade={28}/>
      <br />
      <Nome aluno="Petrucia" idade={26}/>
    </div>
  );
}

export default App;
