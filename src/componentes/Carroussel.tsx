import { useState } from "react";

export default function Carroussel() {
  const imagens = [
    "https://picsum.photos/id/20/1200/400",
    "https://picsum.photos/id/48/1200/400",
    "https://picsum.photos/id/60/1200/400"
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);

  return (
    <div className="w3-content w3-display-container" style={{ maxWidth: "1200px", marginTop: "20px" }}>
      <img 
        src={imagens[indiceAtual]} 
        alt="Destaque" 
        className="w3-animate-opacity"
        style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "4px" }}
      />
      
      <button 
        className="w3-button w3-black w3-display-left w3-hover-red" 
        onClick={() => setIndiceAtual(prev => prev === 0 ? imagens.length - 1 : prev - 1)}
      >
        &#10094;
      </button>
      
      <button 
        className="w3-button w3-black w3-display-right w3-hover-red" 
        onClick={() => setIndiceAtual(prev => prev === imagens.length - 1 ? 0 : prev + 1)}
      >
        &#10095;
      </button>
    </div>
  );
}