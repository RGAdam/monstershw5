import { useState } from "react";

import MonsterList from "./components/List/MonsterList";
import NewMonster from "./components/Form/NewMonster";
import Logo from "./res/logo.svg";
import "./App.css";

const DUMMY_MONSTERS = [
  {
    id: "0",
    elemental: "air",
    name: "Egyes",
    attack: 11,
    defense: 12,
  },
  {
    id: "1",
    elemental: "earth",
    name: "Kettes",
    attack: 22,
    defense: 23,
  },
  {
    id: "2",
    elemental: "fire",
    name: "Hármas",
    attack: 33,
    defense: 34,
  },
  {
    id: "3",
    elemental: "water",
    name: "Négyes",
    attack: 44,
    defense: 45,
  },
];

function App() {
  const [monsters, setMonsters] = useState(DUMMY_MONSTERS);

  const addMonsterHandler = (monster) => {
    setMonsters((prevMonsters) => {
      return [monster, ...prevMonsters];
    });
  };

  return (
    <div className="app">
      <header className="app__header">
        <img className="app-header__logo" src={Logo} alt="Logo here" />
        <h1 className="app-header__title">Monsters</h1>
      </header>
      <NewMonster onAddMonster={addMonsterHandler} />
      <MonsterList monsters={monsters} />
    </div>
  );
}

export default App;
