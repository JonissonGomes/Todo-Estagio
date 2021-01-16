import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api";

import "./todo.css";

import imageTask from "../../assets/Task-bro.svg";

function Todo() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("todo/").then((taskList) => {
      setTasks(taskList.data);
    });
  }, []);

  return (
    <div className="Container">
      <Link to="/">
        <p className="btn-close">Voltar</p>
      </Link>
      <img src={imageTask} alt="Task" />
      <h1>To-Do List</h1>
      <section className="boxContainer">

       {tasks.map((task)=>{
         return (
          <section className="boxSection">
          <section className="boxContent">
            <h3>{task.name}</h3>
            <p className="Stack">{task.stack}</p>
            <p className="Description">
              {task.description}
            </p>
          </section>

          <section className="Dias">
            <label htmlFor="">Dias</label>
            <h2>{task.time}</h2>
          </section>

          <section className="Status">
            <label htmlFor="">Status</label>
            <input type="checkbox" name="done" id="Done" checked={task.done}/>
          </section>
        </section>
         )
       })}


      </section>
    </div>
  );
}

export default Todo;
