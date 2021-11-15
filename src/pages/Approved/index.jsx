import { useHistory, useParams } from "react-router";

import "./approved.css";

function Approved() {
  const history = useHistory();
  const params = useParams();
  return (
    <div>
      <div id="aprovado">
        <h1>{params.name}</h1>
        <p>Seja Bem Vindo a nossa plataforma de cadastro por formulários</p>
        <button onClick={() => history.push("/")}>
          Voltar para o cadastro
        </button>
      </div>
    </div>
  );
}

export default Approved;
