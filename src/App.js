import { useEffect, useState } from "react";

import MonsterList from "./components/List/MonsterList";
import MonsterSearch from "./components/List/MonsterSearch";
import NewMonster from "./components/Form/NewMonster";
import Logo from "assets/logo.svg";
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
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setFilteredMonsters(monsters);
  }, [monsters]);

  const addMonsterHandler = (monster) => {
    setMonsters((prevMonsters) => {
      return [monster, ...prevMonsters];
    });
  };

  const searchMonsterHandler = (filter) => {
    let copyOfMonsters = [...monsters];

    setFilteredMonsters(
      copyOfMonsters.filter((monster) =>
        monster.name.toLowerCase().includes(filter)
      )
    );
  };

  const deleteMonsterHandler = (id) => {
    let copyOfMonsters = [...monsters];

    setMonsters(copyOfMonsters.filter((monster) => monster.id !== id));
  };

  return (
    <div className="app">
      <header className="app__header">
        <img className="app-header__logo" src={Logo} alt="Logo here" />
        <h1 className="app-header__title">Monsters</h1>
      </header>
      <NewMonster onAddMonster={addMonsterHandler} />
      <MonsterSearch onSearchMonster={searchMonsterHandler} />
      <MonsterList
        monsters={filteredMonsters}
        onDeleteMonster={deleteMonsterHandler}
      />
    </div>
  );
}

export default App;
