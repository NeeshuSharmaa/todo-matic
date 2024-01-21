import { useDispatch, useSelector } from "react-redux";
import { showActive, showAll, showCompleted } from "../features/filtersSlice";

export default function Filters() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const noOfActiveTasks = tasks.filter(({ completed }) => !completed).length;
  const noOfCompletedTasks = tasks.filter(({ completed }) => completed).length;
  return (
    <div className="filters">
      <button
        className={filter.allTasks ? "active" : ""}
        onClick={() => dispatch(showAll())}
      >
        Show All tasks ({tasks.length})
      </button>
      <button
        className={filter.activeTasks ? "active" : ""}
        onClick={() => dispatch(showActive())}
      >
        Show Active Tasks ({noOfActiveTasks})
      </button>
      <button
        className={filter.completedTasks ? "active" : ""}
        onClick={() => dispatch(showCompleted())}
      >
        Show Completed Tasks ({noOfCompletedTasks})
      </button>
    </div>
  );
}
