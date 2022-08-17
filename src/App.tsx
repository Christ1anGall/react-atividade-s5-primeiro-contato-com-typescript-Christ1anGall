import { SetStateAction, useState } from "react";
import "./App.css";
import Card, { User } from "./components/Card/Card";
import Input from "./components/Input/Input";

function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");

  const [users, setUsers] = useState<User[]>([] as User[]);

  const setUserrs = (data: any) => {
    setName(data.target[0].value);
    setAge(data.target[1].value);
    setHobby(data.target[2].value);
  };

  const handleClick = (data: any) => {
    data.preventDefault();

    setUserrs(data);

    setUsers((old) => {
      return [...old, { name, age, hobby }];
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <>
          <form onSubmit={handleClick}>
            <Input label="Nome" placeholder="digite seu nome" />
            <Input label="Age" type="number" placeholder="digite sua idade" />
            <Input label="Hobby" placeholder="digite seu Hobby" />
            <button type="submit">Enviar</button>
          </form>

          {users.map((elem) => {
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
      </header>
    </div>
  );
}

export default App;
