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
        <button>All tasks</button>
        <button>Active Tasks</button>
        <button>Completed Tasks</button>
      </div>
    </div>
  );
}
