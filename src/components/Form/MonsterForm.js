import { useState } from "react";

import Icon from "../UI/Icon";
import Card from "../UI/Card";

import "./MonsterForm.css";

const MonsterForm = (props) => {
  const [elemental, setElemental] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredAttack, setEnteredAttack] = useState("");
  const [enteredDefense, setEnteredDefense] = useState("");

  const setSizeBig = { height: "50px", width: "50px" };
  const setSizeMedium = { height: "30px", width: "30px" };

  const chooseElement = (event) => {};

  const elementalChangedHandler = (event) => {
    setElemental(event.target.iconName);
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

    const monsterData = {
      // elemental: elemental,
      name: enteredName,
      attack: enteredAttack,
      defense: enteredDefense,
    };

    props.onSaveMonsterData(monsterData);
    // setElemental("");
    setEnteredName("");
    setEnteredAttack("");
    setEnteredDefense("");
  };

  return (
    <div className="create-monster">
      <h2>Create a Monster:</h2>
      <Card className="create-monster__card">
        <form onSubmit={submitHandler}>
          <div className="create-monster-form__element-chooser">
            <Icon iconName="left" setStyle={setSizeMedium} onClick={chooseElement} />
            <Icon iconName="air" setStyle={setSizeBig} onChange={elementalChangedHandler} />
            <Icon iconName="right" setStyle={setSizeMedium} onClick={chooseElement} />
          </div>
          <input type="text" placeholder="Name" value={enteredName} onChange={nameChangeHandler} />
          <div className="create-monster-form__stat-chooser">
            <Icon iconName={"attack"} setStyle={setSizeMedium} />
            <input type="number" min="1" max="99" step="1" value={enteredAttack} onChange={attackChangeHandler}></input>
            <Icon iconName={"defense"} setStyle={setSizeMedium} />
            <input type="number" min="1" max="99" step="1" value={enteredDefense} onChange={defenseChangeHandler}></input>
          </div>
          <button type="submit">Add</button>
        </form>
      </Card>
    </div>
  );
};

export default MonsterForm;
