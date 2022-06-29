import "./Icon.css";

import Air from "assets/air.svg";
import Earth from "assets/earth.svg";
import Fire from "assets/fire.svg";
import Water from "assets/water.svg";
import Attack from "assets/attack.svg";
import Defense from "assets/defense.svg";
import ArrowLeft from "assets/arrow-left.svg";
import ArrowRight from "assets/arrow-right.svg";
import Trash from "assets/trash-can.svg";

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
      <img
        src={iconName}
        style={props.setStyle}
        onClick={props.onClick}
        alt=""
      />
    </div>
  );
};

export default Icon;
