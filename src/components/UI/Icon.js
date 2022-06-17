import "./Icon.css";

import Air from "../../res/air.svg";
import Earth from "../../res/earth.svg";
import Fire from "../../res/fire.svg";
import Water from "../../res/water.svg";
import Attack from "../../res/attack.svg";
import Defense from "../../res/defense.svg";
import ArrowLeft from "../../res/arrow-left.svg";
import ArrowRight from "../../res/arrow-right.svg";
import Trash from "../../res/trash-can.svg";

const Icon = (props) => {
  let iconName;

  switch (props.iconName) {
    case "air":
      iconName = Air;
      break;
    case "earth":
      iconName = Earth;
      break;
    case "fire":
      iconName = Fire;
      break;
    case "water":
      iconName = Water;
      break;
    case "left":
      iconName = ArrowLeft;
      break;
    case "right":
      iconName = ArrowRight;
      break;
    case "attack":
      iconName = Attack;
      break;
    case "defense":
      iconName = Defense;
      break;
    case "trash":
      iconName = Trash;
      break;
  }

  return (
    <div className="icon">
      <img src={iconName} style={props.setStyle} onClick={props.onClick} alt="" />
    </div>
  );
};

export default Icon;
