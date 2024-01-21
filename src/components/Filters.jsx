import { useDispatch, useSelector } from "react-redux";
import { showActive, showAll, showCompleted } from "../features/filtersSlice";

export default function Filters() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <div className="filters">
      <button
        className={filter.allTasks ? "active" : ""}
        onClick={() => dispatch(showAll())}
      >
        Show All tasks
      </button>
      <button
        className={filter.activeTasks ? "active" : ""}
        onClick={() => dispatch(showActive())}
      >
        Show Active Tasks
      </button>
      <button
        className={filter.completedTasks ? "active" : ""}
        onClick={() => dispatch(showCompleted())}
      >
        Show Completed Tasks
      </button>
    </div>
  );
}
