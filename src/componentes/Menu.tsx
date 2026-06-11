export default function Menu() {
  return (
    <nav style={{
      backgroundColor: "#111",
      padding: "15px",
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      borderRadius: "8px",
      marginBottom: "20px"
    }}>
      <a href="#home" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>Início</a>
      <a href="#produtos" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>Produtos</a>
      <a href="#sobre" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>Sobre</a>
    </nav>
  );
}