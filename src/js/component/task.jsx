import React, { useState } from "react";
import { FaRegWindowClose} from "react-icons/fa";
import "/workspace/react-hello/src/styles/task.css";
const Task = (props) => {
    const deleteTask=()=>{
        console.log('estoy en el delete del hijo');
        console.log('ante de na',props.list);
        console.log('vamo a ver el indice:',props.index)
        const listForMapAndDeleteTask = props.list.map((e,i)=>{
            if(props.index!==i){  
                return e;
            }else{
                props.list.splice(i,1);
            }   
        });
        console.log('nuevo array',listForMapAndDeleteTask);
          props.updateList([...listForMapAndDeleteTask]);
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