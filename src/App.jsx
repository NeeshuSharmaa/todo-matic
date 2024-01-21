import "./App.css";
import Hero from "./components/Hero";
import Task from "./components/Task";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="app">
      <div className="main">
        <Hero />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
