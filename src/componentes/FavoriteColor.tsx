import { useState } from "react";

export default function FavoriteColor() {
  const [isAzul, setIsAzul] = useState(true);

  // Mapeia os estados para classes CSS do W3.CSS
  const classeCorTexto = isAzul ? "w3-text-blue" : "w3-text-red";
  const classeCorBotao = isAzul ? "w3-btn w3-blue" : "w3-btn w3-red";
  const nomeCor = isAzul ? "Azul" : "Vermelho";

  return (
    <div className="w3-panel w3-border w3-border-light-grey w3-round w3-padding-16 w3-center" style={{ maxWidth: "400px", margin: "20px auto" }}>
      <p className={`w3-xlarge ${classeCorTexto}`}>
        A cor atual é: <b>{nomeCor}</b>
      </p>
      <button 
        className={`${classeCorBotao} w3-round w3-ripple`}
        onClick={() => setIsAzul(!isAzul)}
      >
        Mudar para {isAzul ? "Vermelho" : "Azul"}
      </button>
    </div>
  );
}