import MonsterForm from "./MonsterForm";

const NewMonster = (props) => {
  const saveMonsterDataHandler = (enteredMonsterData) => {
    const monsterData = {
      ...enteredMonsterData,
      id: Math.random(),
    };
    props.onAddMonster(monsterData);
  };

  return (
    <div className="new-monster">
      <MonsterForm onSaveMonsterData={saveMonsterDataHandler} />
    </div>
  );
};

export default NewMonster;
