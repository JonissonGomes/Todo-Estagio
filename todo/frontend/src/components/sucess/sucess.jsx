import "./sucess.css";

// Importando imagens e icones
import imageCompleted from "../../assets/Completed-bro.svg";

function Sucess() {
  return ( 
      <div className="containerSucess">
          <img src={imageCompleted} alt="Sucesso"/>
            <h2>Sua tarefa foi criada com sucesso</h2>
      </div>
  );
}

export default Sucess;