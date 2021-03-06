// Importando dependências
import "./home.css";
import Link from "react-router-dom/Link";


// Importando imagens
import iconCreateTasks from "../../assets/icon-create.svg";
import iconVisualTasks from "../../assets/icon-visual-task.svg";
import imageTodo from "../../assets/Checklist-bro.svg";

function Home() {
  return (
    <div className="Container">
      <img src={imageTodo} alt="" />

      <h1>
        TO-DO <strong>ESTAGIÁRIO</strong>
      </h1>
      <p>
        Uma ferramenta para organizar e manter as tarefas do estagiário em dia.
      </p>

      <section className="boxButton">
        <Link to="/add">
          <button className="createTaskButton">
            <img src={iconCreateTasks} alt="Icon-Create-Task" />
            <h3> Criar tarefa</h3>
          </button>
        </Link>

        <Link to="/todo">
          <button className="visualTaskButton">
            <img src={iconVisualTasks} alt="Icon-Visual-Task" />
            <h3>Visualizar tarefas</h3>
          </button>
        </Link>
      </section>
    </div>
  );
}
export default Home;
