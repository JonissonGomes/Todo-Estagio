import "./sucess.css";

// Importando imagens e icones
import imageCompleted from "../../assets/ACompleted-bro.svg";

function Sucess() {
  return ( 
      <div className="Container">
          <img src={imageCompleted} alt=""/>
            <h2>Sua tarefa foi criada com sucesso</h2>
      </div>
  );
}

export default Sucess;