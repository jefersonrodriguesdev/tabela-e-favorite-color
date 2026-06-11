import "./Card.css";

export default function Card({titulo, children}:any) {
    function mostrarInfo() {
        alert(`Info do ${titulo}`);
    }

    return (
        <div className="card" onClick={mostrarInfo}>
            <div className="card-titulo">
                <h2>{titulo}</h2>
            </div>
            <div className="card-conteudo">
                {children}
            </div>
        </div>
    )
}