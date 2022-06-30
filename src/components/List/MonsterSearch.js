import { useContext } from "react";
import AppContext from "contexts/AppContext";
import "./MonsterSearch.css";

const MonsterSearch = () => {
  const { searchMonsterHandler } = useContext(AppContext);

  const onSearchChangeHandler = (event) => {
    searchMonsterHandler(event.target.value);
  };

  return (
    <div className="wrapper">
      <input
        type="text"
        placeholder="Search for names..."
        onChange={onSearchChangeHandler}
      />
    </div>
  );
};

export default MonsterSearch;
