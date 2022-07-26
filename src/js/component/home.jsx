import React, { useState } from "react";
import Task from "./task.jsx";
import "/workspace/react-hello/src/styles/home.css";

const Home = () => {

  const tasksList = [];

  const [tasksListState, setTaskListState] = useState(tasksList); 
  const [tasks, setTask] = useState(""); 

  const showList = tasksListState.map((tasks, i) => {
    return <Task key={i} index={i} description={tasks} list={tasksListState} updateList={setTaskListState}>{tasks} </Task>;
  });

  const handleKeyDown = (ev) => {
    if (ev.keyCode === 13 && !ev.shiftKey) {
      if (tasks) {
        setTaskListState([...tasksListState, tasks]);
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
      </div>
    </div>
  );
};

export default Home;
