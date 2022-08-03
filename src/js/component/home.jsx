import React, { useState, useEffect } from "react";
import Task from "./task.jsx";
import "./../../styles/home.css";

const Home = () => {
  let tasksList = [];
  const userApi=[ {"result": "ok" }];

  const [tasksListState, setTaskListState] = useState(tasksList);
  const [tasks, setTask] = useState({ label: "", done: false });
  const [numItems, setNumItems] = useState(tasksList.length);

  const showList = tasksListState.map((tasks, i) => {
    return (
      <Task
        key={i}
        index={i}
        description={tasks.label}
        list={tasksListState}
        updateList={setTaskListState}
        updateNumItems={setNumItems}
        setDataList={updateTasksList}
        deleteLastTask={deleteAllTasks}
      >
        {tasks.label}
      </Task>
    );
  });

  const handleKeyDown = (ev) => {
    if (ev.keyCode === 13 && !ev.shiftKey) {
      if (tasks) {
        setTaskListState([...tasksListState, tasks]);
        setNumItems(tasksListState.length + 1);
        setTask({ label: "", done: false });
        updateTasksList();
      }
    }
  };

  const handleOnChange = (ev) => {
    setTask({ label: ev.target.value, done: false });
  };

  useEffect(() => {
    console.log("estoy en el get que hacemos nada más empezar");
    fetch("https://assets.breatheco.de/apis/fake/todos/user/mbarajas", {
      method: "GET",
      headers: {
        Accept: "application/json",
      }
    })
      .then((resp) => {
        console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
        if(!resp.ok){
          createUser();
        }
        console.log(resp.status); // el código de estado = 200 o código = 400 etc.
        // console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        // setTaskListState(data);
        console.log("lo que ha traido el get del principio", data);
        tasksList = tasksList.concat(data);
        console.log("lo que tiene la lista despues de unirla", tasksList);
        setTaskListState(tasksList);
        setNumItems(tasksList.length);
        //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log("al final del get", tasksList); //esto imprimirá en la consola el objeto exacto recibido del servidor
      })
      .catch((error) => {
        //manejo de errores
        console.log(error);
      });
  }, []);

function getTasksWhenDeleteAll(){
  fetch("https://assets.breatheco.de/apis/fake/todos/user/mbarajas", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((resp) => {
      console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
      if(!resp.ok){
        createUser();
      }
      console.log(resp.status); // el código de estado = 200 o código = 400 etc.
      // console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
      return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
    })
    .then((data) => {
      // setTaskListState(data);
      console.log("lo que ha traido el get", data);
      tasksList = tasksList.concat(data);
      console.log("lo que tiene la lista despues de unirla", tasksList);
      setTaskListState(tasksList);
      setNumItems(tasksList.length);
      //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
      console.log("al final del get", tasksList); //esto imprimirá en la consola el objeto exacto recibido del servidor
    })
    .catch((error) => {
      //manejo de errores
      console.log(error);
    });
}
  
  function createUser(){
    console.log('estoy en el post');
    fetch("https://assets.breatheco.de/apis/fake/todos/user/mbarajas", {
      method: "POST",
      body: JSON.stringify(userApi),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
        console.log(resp.status); // el código de estado = 200 o código = 400 etc.
        // console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
      })
      .catch((error) => {
        //manejo de errores
        console.log(error);
      });
  }

  function updateTasksList() {
    console.log("estoy en el put");
    fetch("https://assets.breatheco.de/apis/fake/todos/user/mbarajas", {
      method: "PUT",
      body: JSON.stringify(tasksListState),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
        console.log(resp.status); // el código de estado = 200 o código = 400 etc.
        // console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
      })
      .catch((error) => {
        //manejo de errores
        console.log(error);
      });
  }

  const deleteAllTasks = () => {
    console.log("estoy en el delete");
    fetch("https://assets.breatheco.de/apis/fake/todos/user/mbarajas", {
      method: "DELETE",
      body: JSON.stringify(userApi),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((resp) => {
        console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
        if(resp.ok){
          //cerrar modal
          alert('tareas borradas');
          //borrar tareas
            //llamamos al get otra vez
            getTasksWhenDeleteAll();
        }
        console.log(resp.status); // el código de estado = 200 o código = 400 etc.
        // console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
      })
      .catch((error) => {
        //manejo de errores
        console.log(error);
      });
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
          value={tasks.label}
          onKeyDown={handleKeyDown}
        />
        <div>{showList}</div>
        <div className="num_items">
          <h5>Tareas: {numItems}</h5>
        </div>
        <div>
          <button
            className="delete_all"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Borrar todas las tareas
          </button>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Borrar todas las tareas
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">¿Desea borrar todas las tareas?</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn_delete_all_close"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="button" className="btn btn_delete_all_accept" data-bs-dismiss="modal" onClick={deleteAllTasks}>
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
