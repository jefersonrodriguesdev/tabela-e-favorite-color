import Card from "./Card";
import lista from "../data/produtos.json"

export default function ListaCards() {
    
    return (
            lista.map( produto =>            
                <Card key={produto.id} titulo={produto.nome}>
                    <h3>R$ {produto.preco}</h3>
                </Card>
            )
    )
}