import { useDispatch } from "react-redux";
import "../componentStyles/Task.css";
import { deleteTask, updateTaskStatus } from "../features/tasksSlice";
import EditModal from "./EditModal";
import { useState } from "react";

export default function Task({ id, name, completed }) {
  const [editActive, setEditActive] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="task">
      <div>
        <input
          id={id}
          type="checkbox"
          checked={completed ? true : false}
          onChange={(e) =>
            dispatch(updateTaskStatus({ id, completed: e.target.checked }))
          }
        />
        <label htmlFor={id}>{name}</label>
      </div>
      <div className="action-btns">
        <button>
          <img
            src="icons/edit.svg"
            alt="edit-task-icon"
            onClick={() => setEditActive(true)}
          />
        </button>
        <button onClick={() => dispatch(deleteTask({ id }))}>
          <img src="icons/delete.svg" alt="delete-task-icon" />
        </button>
        {editActive && (
          <EditModal id={id} name={name} setEditActive={setEditActive} />
        )}
      </div>
    </div>
  );
}
