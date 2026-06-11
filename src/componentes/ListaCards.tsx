import Card from "./Card";
import lista from "../data/produtos.json"

export default function ListaCards() {
    // const lista = [
    //     {id: 1, nome:"Produto 1", preco: 30.43},
    //     {id: 2, nome:"Produto 2", preco: 50.33},
    //     {id: 3, nome:"Produto 3", preco: 60.33}
    // ];

    return (
            lista.map( produto =>            
                <Card key={produto.id} titulo={produto.nome}>
                    <h3>R$ {produto.preco}</h3>
                </Card>
            )
    )
}