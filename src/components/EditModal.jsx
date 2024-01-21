import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/tasksSlice";

export default function EditModal({ id, name, setEditActive }) {
  const [input, setInput] = useState(name);
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(editTask({ id, name: input }));
    setEditActive(false);
  };

  return (
    <div className="modal">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="action-btns">
        <button onClick={handleSave}>Save</button>
        <button onClick={() => setEditActive(false)}>Cancel</button>
      </div>
    </div>
  );
}
