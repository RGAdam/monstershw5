import "./App.css";
import MonsterPage from "components/Pages/MonsterPage";
import { AppProvider } from "contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <MonsterPage />
    </AppProvider>
  );
}

export default App;
