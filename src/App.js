import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/* Sidebar component*/}
        <Sidebar />

        {/* chat component */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
