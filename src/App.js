import AppProvider from "contexts/AppContext";

import "./App.css";
import MonsterPage from "components/Pages/MonsterPage";

function App() {
  return (
    <AppProvider>
      <MonsterPage />
    </AppProvider>
  );
}

export default App;
