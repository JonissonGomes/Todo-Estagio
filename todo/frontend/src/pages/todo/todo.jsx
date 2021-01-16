import { Link } from 'react-router-dom';

import "./todo.css";

import imageTask from "../../assets/Task-bro.svg";

function Todo() {
  return (
    <div className="Container">
        <Link to="/">
        <p className="btn-close">Voltar</p>
      </Link>
      <img src={imageTask} alt="Task" />
      <h1>To-Do List</h1>
      <section className="boxContainer">

        
        <section className="boxSection">
          <section className="boxContent">
            <h3>Criar API </h3>
            <p className="Stack">Python</p>
            <p className="Description">
              Criar uma API para utilizar como backend do projeto.
            </p>
          </section>

          <section className="Dias">
            <label htmlFor="">Dias</label>
            <h2>3</h2>
          </section>

          <section className="Status">
            <label htmlFor="">Status</label>
            <input type="checkbox" name="done" id="Done" checked />
          </section>
        </section>

        
        <section className="boxSection">
          <section className="boxContent">
            <h3>Construir frontend React</h3>
            <p className="Stack">JavaScript</p>
            <p className="Description">
              Criar as telas utilizando o framework React.
            </p>
          </section>

          <section className="Dias">
            <label htmlFor="">Dias</label>
            <h2>1</h2>
          </section>

          <section className="Status">
            <label htmlFor="">status</label>
            <input type="checkbox" name="done" id="Done" />
          </section>
        </section>

        <section className="boxSection">
          <section className="boxContent">
            <h3>Documentação do projeto</h3>
            <p className="Stack">Dev</p>
            <p className="Description">
              Detalhar a criação e funcionamento da API e criar manual de execução do front end
            </p>
          </section>

          <section className="Dias">
            <label htmlFor="">Dias</label>
            <h2>3</h2>
          </section>

          <section className="Status">
            <label htmlFor="">Status</label>
            <input type="checkbox" name="done" id="Done" />
          </section>
        </section>


      </section>
    </div>
  );
}

export default Todo;
