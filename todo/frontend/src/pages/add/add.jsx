import "./add.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../api";

import Sucess from "../../components/sucess/sucess";
import Error from "../../components/error/error";

// Importando imagens e icones
import imageAddTodo from "../../assets/Add-notes-bro.svg";

function Add() {
  const history = useHistory();

  // Criando Stados
  const [name, setName] = useState("");
  const [stack, setStack] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(0);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Retirando evento de reload da pagina
  async function dataSend(event) {
    event.preventDefault();
    try {
      await api.post("todo/", { name, stack, description, time });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        history.push("/");
      }, 2000);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
        history.push("/add");
      }, 2000);
    }
  }

  return (
    <div className="Container">
      {success && <Sucess />}

      {error && <Error />}

      <Link to="/">
        <p className="btn-close">Voltar</p>
      </Link>
      <img src={imageAddTodo} alt="New-Taks" />

      <h1> Criar tarefa</h1>

      <section className="boxForm">
        <form onSubmit={dataSend}>
          <label htmlFor="Name">Nome</label>
          <input
            type="text"
            name="name"
            id="Name"
            required
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <label htmlFor="Stack">Stack</label>
          <input
            type="text"
            name="stack"
            id="Stack"
            required
            value={stack}
            onChange={(event) => {
              setStack(event.target.value);
            }}
          />

          <label htmlFor="Description">Descrição</label>
          <input
            type="text"
            name="description"
            id="Description"
            required
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />

            <label htmlFor="Time">Limite/Tempo</label>
          <section className="boxFlex">
            <input
              type="number"
              maxlength="2"
              name="time"
              id="Time"
              required
              value={time}
              onChange={(event) => {
                setTime(event.target.value);
              }}
            />

            <input
              type="checkbox"
              maxlength="2"
              name="done"
              id="Done"
              onChange={(event) => {
                setTime(event.target.value);
              }}
            />
          </section>

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
