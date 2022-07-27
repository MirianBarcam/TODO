import React, { useState } from "react";
import Task from "./task.jsx";
import "./../../styles/home.css";

const Home = () => {

  const tasksList = [];
  const [tasksListState, setTaskListState] = useState(tasksList); 
  const [tasks, setTask] = useState(""); 
  const [numItems,setNumItems]=useState(0);

  const showList = tasksListState.map((tasks, i) => {
    return <Task key={i} index={i} description={tasks} list={tasksListState} updateList={setTaskListState} updateNumItems={setNumItems}>{tasks}</Task>;
  });

  const handleKeyDown = (ev) => {
    if (ev.keyCode === 13 && !ev.shiftKey) {
      if (tasks) {
        setTaskListState([...tasksListState, tasks]);
        setNumItems(tasksListState.length+1)
        setTask("");
      }
    }
  };

  const handleOnChange = (ev) => {
    setTask(ev.target.value);
  };

  return (
    <div className="container_home">
      <div className="container_list">
        <h1 className="list_title">TODOS</h1>
        <input
		      placeholder="Introduce una tarea nueva"
          className="list_input"
          type="text"
          onChange={handleOnChange}
          value={tasks}
          onKeyDown={handleKeyDown}
        />
        <div>{showList}</div>
        <div className="num_items"><h5>Tareas: {numItems}</h5></div>
      </div>
    </div>
  );
};

export default Home;
