import "../componentStyles/Hero.css";

import AddTask from "./AddTask";
import Filters from "./Filters";

export default function Hero() {
  return (
    <div className="hero">
      <h1>ToDo Matic</h1>
      <h2>What needs to be done?</h2>
      <AddTask />
      <Filters />
    </div>
  );
}
