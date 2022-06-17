import Card from "../UI/Card";
import Monster from "./Monster";

import "./MonsterList.css";

const MonsterList = (props) => {
  if (props.monsters.length === 0) {
    return <h2>No monsters</h2>;
  }

  return (
    <div className="monster-list-outer">
      <h2>Monsters:</h2>
      <ul>
        {props.monsters.map((monster) => (
          <Monster key={monster.id} elemental={monster.elemental} name={monster.name} attack={monster.attack} defense={monster.defense} />
        ))}
      </ul>
    </div>
  );
};

export default MonsterList;
