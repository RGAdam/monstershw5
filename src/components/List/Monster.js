import React from "react";

import Card from "../UI/Card";
import Icon from "../UI/Icon";

import "./Monster.css";

const Monster = (props) => {
  const elementIconStyle = { height: "50px", width: "50px" };
  const trashIconStyle = { height: "30px", width: "30px" };
  const statIconStyle = { height: "15px", width: "15px" };

  return (
    <Card className="list-item-wrapper">
      <li className="list-item">
        <Icon iconName={props.elemental} setStyle={elementIconStyle} />
        <div className="list-item__name-stats">
          <p>{props.name}</p>
          <div className="list-item-name-stats__stats">
            <Icon iconName={"attack"} setStyle={statIconStyle} />
            <p>{props.attack}</p>
            <Icon iconName={"defense"} setStyle={statIconStyle} />
            <p>{props.defense}</p>
          </div>
        </div>
        <Icon iconName="trash" setStyle={trashIconStyle} />
      </li>
    </Card>
  );
};

export default Monster;
