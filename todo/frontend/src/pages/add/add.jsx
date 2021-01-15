import "./add.css";
import { Link } from "react-router-dom";

// Importando imagens e icones
import imageAddTodo from "../../assets/Add-notes-bro.svg";

function Add() {
  return (
    <div className="Container">
      <Link to="/">
        <p className="btn-close">Voltar</p>
      </Link>
      <img src={imageAddTodo} alt="New-Taks" />

      <h1> Criar tarefa</h1>

      <section className="boxForm">
        <form action="">
          <label htmlFor="Name">Nome</label>
          <input type="text" name="name" id="Name" />

          <label htmlFor="Stack">Stack</label>
          <input type="text" name="stack" id="Stack" />

          <label htmlFor="Description">Descrição</label>
          <input type="text" name="description" id="Description" />
          <input type="submit" value="Criar" />
        </form>
      </section>

      <Link to="/">
        <button className="btn-back"> Voltar </button>
      </Link>
    </div>
  );
}

export default Add;
