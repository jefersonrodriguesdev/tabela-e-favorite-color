import { useState } from "react";

export default function FavoriteColor() {
  // Estado booleano para controlar se é azul ou não
  const [isAzul, setIsAzul] = useState(true);

  // Define os valores dinamicamente com base no estado
  const corAtual = isAzul ? "blue" : "red";
  const nomeCor = isAzul ? "Azul" : "Vermelho";

  return (
    <div style={{ margin: "20px", padding: "15px", border: "1px dashed #555", borderRadius: "8px" }}>
      {/* Descrição com a cor da letra dinâmica */}
      <p style={{ color: corAtual, fontWeight: "bold", fontSize: "1.2em" }}>
        A cor atual é: {nomeCor}
      </p>
      
      {/* Botão que muda o estado e herda os estilos dinâmicos */}
      <button 
        onClick={() => setIsAzul(!isAzul)} 
        style={{ 
          backgroundColor: corAtual, 
          color: "#fff", 
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "5px"
        }}
      >
        Mudar para {isAzul ? "Vermelho" : "Azul"}
      </button>
    </div>
  );
}