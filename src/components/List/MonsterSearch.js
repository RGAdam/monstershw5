import "./MonsterSearch.css";

const MonsterSearch = ({ onSearchMonster }) => {
  const onSearchChangeHandler = (event) => {
    onSearchMonster(event.target.value);
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
