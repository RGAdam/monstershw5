import AppContext from "contexts/AppContext";
import { useContext } from "react";
import Card from "../UI/Card";
import Icon from "../UI/Icon";

import "./MonsterList.css";

const MonsterList = (props) => {
  const elementIconStyle = { height: "50px", width: "50px" };
  const trashIconStyle = { height: "30px", width: "30px" };
  const statIconStyle = { height: "15px", width: "15px" };

  const ctx = useContext(AppContext);

  const deleteMonster = (id) => {
    props.onDeleteMonster(id);
  };

  console.log(props.monsters());

  if (props.monsters.length === 0) {
    return <h2>No monsters</h2>;
  }

  return (
    <div className="monster-list-outer">
      <h2>Monsters:</h2>
      <ul>
        {props.monsters.map((monster) => (
          <Card className="list-item-wrapper" key={monster.id}>
            <li className="list-item">
              <Icon iconName={monster.elemental} setStyle={elementIconStyle} />
              <div className="list-item__name-stats">
                <p>{monster.name}</p>
                <div className="list-item-name-stats__stats">
                  <Icon iconName={"attack"} setStyle={statIconStyle} />
                  <p>{monster.attack}</p>
                  <Icon iconName={"defense"} setStyle={statIconStyle} />
                  <p>{monster.defense}</p>
                </div>
              </div>
              <Icon
                iconName="trash"
                setStyle={trashIconStyle}
                onClick={() => deleteMonster(monster.id)}
              />
            </li>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default MonsterList;
