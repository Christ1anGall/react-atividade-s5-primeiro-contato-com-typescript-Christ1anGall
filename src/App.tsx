import { SetStateAction, useEffect, useState } from "react";
import "./App.css";
import Card, { User } from "./components/Card/Card";
import Input from "./components/Input/Input";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hobby, setHobby] = useState("");

  const [users, setUsers] = useState<User[]>([]);

  const handleClick = (name: string, age: number, hobby: string) => {
    setUsers((old) => {
      return [...old, { name, age, hobby }];
    });
  };

  useEffect(() => {}, [name, age, hobby]);

  return (
    <div className="App">
      <>
        <Input
          label="Nome"
          placeholder="digite seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Age"
          type="number"
          placeholder="digite sua idade"
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
        <Input
          label="Hobby"
          placeholder="digite seu Hobby"
          onChange={(e) => setHobby(e.target.value)}
        />
        <button onClick={() => handleClick(name, age, hobby)}>Enviar</button>

        {users?.map((elem) => {
          return (
            <Card
              key={elem.name}
              name={elem.name}
              age={elem.age}
              hobby={elem.hobby}
            />
          );
        })}
      </>
    </div>
  );
}

export default App;
