import React from "react";
import { FaRegWindowClose} from "react-icons/fa";
import "./../../styles/task.css";

const Task = (props) => {

    const deleteTask=()=>{
        const index=props.index;
        props.list.splice(index,1);
        const listForMapAndDeleteTask = props.list;
        props.updateList([...listForMapAndDeleteTask]);
        props.updateNumItems(props.list.length);
      }
    
    return(
        <div className="container_task">
            <div className="description_task">{props.description}</div>
            <div className="container_icon_close">
            <h5 className="icon_close" onClick={deleteTask}><FaRegWindowClose/></h5>
            </div>
        </div>
    );
  
};

export default Task;