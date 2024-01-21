import { useDispatch } from "react-redux";
import "../componentStyles/Task.css";
import { deleteTask, updateTaskStatus } from "../features/tasksSlice";

export default function Task({ id, name, completed }) {
  const dispatch = useDispatch();
  return (
    <div className="task">
      <div>
        <input
          id={id}
          type="checkbox"
          onChange={(e) =>
            dispatch(updateTaskStatus({ id, completed: e.target.checked }))
          }
        />
        <label htmlFor={id}>{name}</label>
      </div>
      <div className="action-btns">
        <button>
          <img src="icons/edit.svg" alt="edit-task-icon" />
        </button>
        <button onClick={() => dispatch(deleteTask({ id }))}>
          <img src="icons/delete.svg" alt="delete-task-icon" />
        </button>
      </div>
    </div>
  );
}
