import { useState } from "react";
import { useDispatch } from "react-redux";
import { taskCreated } from "../features/tasksSlice";

export default function AddTask() {
  const [input, setInput] = useState("");
  const [warning, setWarning] = useState(false);
  const dispatch = useDispatch();

  const addTaskHandler = () => {
    if (input) {
      dispatch(taskCreated({ task: input }));
      setInput("");
    } else {
      setWarning(true);
    }
  };
  return (
    <div className="new-task">
      <input
        type="text"
        placeholder="Create Task ....."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button id="add-btn" onClick={addTaskHandler}>
        Add
      </button>
      {warning && <small>Fill in some task first then add!!</small>}
    </div>
  );
}
