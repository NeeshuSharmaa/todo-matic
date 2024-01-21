import "../componentStyles/Task.css";

export default function Task({ id, name }) {
  return (
    <div className="task">
      <div>
        <input id={id} type="checkbox" />
        <label htmlFor={id}>{name}</label>
      </div>
      <div className="action-btns">
        <button>
          <img src="icons/edit.svg" alt="edit-task-icon" />
        </button>
        <button>
          <img src="icons/delete.svg" alt="delete-task-icon" />
        </button>
      </div>
    </div>
  );
}
