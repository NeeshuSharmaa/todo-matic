import "../componentStyles/Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <h1>ToDo Matic</h1>
      <h2>What needs to be done?</h2>
      <div className="new-task">
        <input type="text" placeholder="Create Task ....." />
        <button>Add</button>
      </div>
      <div className="filters">
        <button className="active">Show All tasks</button>
        <button>Show Active Tasks</button>
        <button>Show Completed Tasks</button>
      </div>
    </div>
  );
}
