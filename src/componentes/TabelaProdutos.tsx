import lista from "../data/produtos.json";

export default function TabelaProdutos() {
  return (
    <div style={{ margin: "20px auto", maxWidth: "600px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
        <thead>
          <tr style={{ backgroundColor: "#1a1a1a", color: "#fff" }}>
            <th style={{ padding: "10px", border: "1px solid #444" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #444" }}>Nome</th>
            <th style={{ padding: "10px", border: "1px solid #444" }}>Preço</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((produto) => (
            <tr key={produto.id} style={{ color: "inherit" }}>
              <td style={{ padding: "10px", border: "1px solid #444" }}>{produto.id}</td>
              <td style={{ padding: "10px", border: "1px solid #444" }}>{produto.nome}</td>
              <td style={{ padding: "10px", border: "1px solid #444" }}>R$ {produto.preco.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}