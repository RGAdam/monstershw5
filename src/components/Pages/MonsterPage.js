import MonsterList from "./components/List/MonsterList";
import MonsterSearch from "./components/List/MonsterSearch";
import NewMonster from "./components/Form/NewMonster";
import Logo from "assets/logo.svg";

const MonsterPage = () => {
  return (
    <div className="app">
      <header className="app__header">
        <img className="app-header__logo" src={Logo} alt="Logo here" />
        <h1 className="app-header__title">Monsters</h1>
      </header>
      <NewMonster />
      <MonsterSearch />
      <MonsterList />
    </div>
  );
};

export default MonsterPage;
