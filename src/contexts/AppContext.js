import { useEffect, useState, createContext } from "react";

const dummyMonsters = [
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

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [monsters, setMonsters] = useState(dummyMonsters);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

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
    <AppContext.Provider
      value={{
        monsters,
        filteredMonsters,
        addMonsterHandler,
        searchMonsterHandler,
        deleteMonsterHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
