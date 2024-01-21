import { useSelector } from "react-redux";
import Task from "./Task";
import "../componentStyles/Tasks.css";

export default function Tasks() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.filter);
  console.log(filter);

  let tasksToDisplay = [];
  if (filter.allTasks) {
    tasksToDisplay = [...tasks];
  } else if (filter.activeTasks) {
    tasksToDisplay = tasks.filter(({ completed }) => !completed);
  } else if (filter.completedTasks) {
    tasksToDisplay = tasks.filter(({ completed }) => completed);
  }

  return (
    <div className="tasks">
      {tasksToDisplay.length > 0 &&
        tasksToDisplay?.map((task) => <Task key={task.id} {...task} />)}
      {tasksToDisplay.length === 0 && (
        <div className="no-task"> No Task to Show Here ╮(╯▽╰)╭</div>
      )}
    </div>
  );
}
