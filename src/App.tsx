import { createWindow } from "./services/tauriService";
import "./App.css";

function App() {
  function createNewWindow() {
    void createWindow();
  }

  return (
    <main className="container">
      <button type="button" onClick={createNewWindow}>
        Create New Window
      </button>
    </main>
  );
}

export default App;
