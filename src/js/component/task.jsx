import React from "react";
import { FaRegWindowClose} from "react-icons/fa";
import "./../../styles/task.css";

const Task = (props) => {

    const deleteTask=()=>{
        const index=props.index;
        if(props.list.length===1){
            console.log('estás borrando la ultima');
            //borrar todas las tareas, cerrar el user y volver hacer el get
            props.deleteLastTask;
        }else{
            props.list.splice(index,1);
        }
        const listForMapAndDeleteTask = props.list;
        props.updateList([...listForMapAndDeleteTask]);
        props.updateNumItems(props.list.length);
        props.setDataList();
        console.log('lo que tiene la lista despues de borrar',props.list);
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