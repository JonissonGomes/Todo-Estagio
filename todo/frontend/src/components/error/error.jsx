import "./error.css";

// Importando imagens e icones
import imageIncompleted from "../../assets/Incompleted-bro.svg";

function Error() {
  return ( 
      <div className="Container">
          <img src={imageIncompleted} alt="Erro"/>
            <h2>Ocorreu um erro</h2>
      </div>
  );
}

export default Error;