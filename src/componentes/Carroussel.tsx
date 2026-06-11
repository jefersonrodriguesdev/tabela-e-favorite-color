import { useState } from "react";

export default function Carroussel() {
  const imagens = [
    "https://picsum.photos/id/20/800/300", // Imagem 1
    "https://picsum.photos/id/48/800/300", // Imagem 2
    "https://picsum.photos/id/60/800/300"  // Imagem 3
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);

  function irParaAnterior() {
    setIndiceAtual((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  }

  function irParaProximo() {
    setIndiceAtual((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  }

  return (
    <div style={{ maxWidth: "800px", margin: "20px auto", position: "relative", overflow: "hidden", borderRadius: "10px" }}>
      <img 
        src={imagens[indiceAtual]} 
        alt={`Slide ${indiceAtual + 1}`} 
        style={{ width: "100%", display: "block", height: "300px", objectFit: "cover" }}
      />
      
      {/* Botão Esquerdo */}
      <button 
        onClick={irParaAnterior} 
        style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", background: "rgba(0,0,0,0.6)", color: "#fff", border: "none", padding: "10px", cursor: "pointer", borderRadius: "50%" }}
      >
        &#10094;
      </button>

      {/* Botão Direito */}
      <button 
        onClick={irParaProximo} 
        style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", background: "rgba(0,0,0,0.6)", color: "#fff", border: "none", padding: "10px", cursor: "pointer", borderRadius: "50%" }}
      >
        &#10095;
      </button>
    </div>
  );
}