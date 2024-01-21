import { useState } from "react";
import { useDispatch } from "react-redux";
import { taskCreated } from "../features/tasksSlice";

export default function AddTask() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTaskHandler = () => {
    dispatch(taskCreated({ task: input }));
    setInput("");
  };
  return (
    <div className="new-task">
      <input
        type="text"
        placeholder="Create Task ....."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTaskHandler}>Add</button>
    </div>
  );
}
