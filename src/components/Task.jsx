export default function Task() {
  return (
    <div className="task">
      <div>
        <input id="" type="checkbox" />
        <label htmlFor="">task1</label>
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
