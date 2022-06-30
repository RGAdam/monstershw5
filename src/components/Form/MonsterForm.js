import { useContext, useState } from "react";
import AppContext from "contexts/AppContext";

import Icon from "../UI/Icon";
import Card from "../UI/Card";

import "./MonsterForm.css";

const MonsterForm = ({ onSaveMonsterData }) => {
  const [currentElement, setCurrentElement] = useState("air");
  const [enteredName, setEnteredName] = useState("");
  const [enteredAttack, setEnteredAttack] = useState(1);
  const [enteredDefense, setEnteredDefense] = useState(1);

  const { addMonsterHandler } = useContext(AppContext);

  const setSizeBig = { height: "50px", width: "50px" };
  const setSizeMedium = { height: "30px", width: "30px" };

  const elementals = ["air", "earth", "fire", "water"];

  const chooseElement = (direction) => {
    if (direction === "left") {
      let nextIndex = elementals.indexOf(currentElement) - 1;
      setCurrentElement(elementals[nextIndex === -1 ? 3 : nextIndex]);
    } else {
      let nextIndex = elementals.indexOf(currentElement) + 1;
      setCurrentElement(elementals[nextIndex === 4 ? 0 : nextIndex]);
    }
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const attackChangeHandler = (event) => {
    setEnteredAttack(event.target.value);
  };

  const defenseChangeHandler = (event) => {
    setEnteredDefense(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.length && enteredAttack && enteredDefense) {
      const monsterData = {
        id: Math.random(),
        elemental: currentElement,
        name: enteredName,
        attack: enteredAttack,
        defense: enteredDefense,
      };

      addMonsterHandler(monsterData);
      setCurrentElement("air");
      setEnteredName("");
      setEnteredAttack(1);
      setEnteredDefense(1);
    }
  };

  return (
    <div className="create-monster">
      <h2>Create a Monster:</h2>
      <Card className="create-monster__card">
        <form onSubmit={submitHandler}>
          <div className="create-monster-form__element-chooser">
            <Icon
              iconName="left"
              setStyle={setSizeMedium}
              onClick={() => chooseElement("left")}
            />
            <Icon iconName={currentElement} setStyle={setSizeBig} />
            <Icon
              iconName="right"
              setStyle={setSizeMedium}
              onClick={() => chooseElement("right")}
            />
          </div>
          <input
            type="text"
            placeholder="Name"
            value={enteredName}
            onChange={nameChangeHandler}
          />
          <div className="create-monster-form__stat-chooser">
            <Icon iconName={"attack"} setStyle={setSizeMedium} />
            <input
              type="number"
              min="1"
              max="99"
              step="1"
              value={enteredAttack}
              onChange={attackChangeHandler}
            ></input>
            <Icon iconName={"defense"} setStyle={setSizeMedium} />
            <input
              type="number"
              min="1"
              max="99"
              step="1"
              value={enteredDefense}
              onChange={defenseChangeHandler}
            ></input>
          </div>
          <button type="submit">Add</button>
        </form>
      </Card>
    </div>
  );
};

export default MonsterForm;
