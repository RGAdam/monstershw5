import MonsterForm from "./MonsterForm";

const NewMonster = (props) => {
  const saveMonsterDataHandler = (enteredMonsterData) => {
    const monsterData = {
      ...enteredMonsterData,
      id: Math.random().toString(),
    };
    props.onAddMonster(monsterData);
    console.log("Új szörny: ");
    console.log(enteredMonsterData);
  };

  return (
    <div className="new-monster">
      <MonsterForm onSaveMonsterData={saveMonsterDataHandler} />
    </div>
  );
};

export default NewMonster;
