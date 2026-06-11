import lista from "../data/produtos.json";

export default function TabelaProdutos() {
  return (
    <div className="w3-container w3-responsive" style={{ maxWidth: "800px", margin: "20px auto" }}>
      <table className="w3-table-all w3-centered w3-card-4">
        <thead>
          <tr className="w3-dark-grey">
            <th>ID</th>
            <th>Nome do Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((produto) => (
            <tr key={produto.id} className="w3-hover-light-grey">
              <td>{produto.id}</td>
              <td className="w3-text-teal w3-strong">{produto.nome}</td>
              <td>R$ {produto.preco.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}