import Menu from "./componentes/Menu";
import Carroussel from "./componentes/Carroussel";
import Hello from "./componentes/Hello";
import FavoriteColor from "./componentes/FavoriteColor";
import TabelaProdutos from "./componentes/TabelaProdutos";
import ListaCards from "./componentes/ListaCards";
import Contador from "./componentes/Contador";

function App() {
  return (
    <>
      {/* Exercício 4: Menu e Carrossel */}
      <Menu />
      <Carroussel />

      <div style={{ padding: "20px" }}>
        <Hello nome="Jeferson" />
        
        <hr style={{ margin: "30px 0", borderColor: "#444" }} />

        {/* Exercício 2: Componente de Cor Favorita */}
        <h2>Exercício 2: Favorite Color</h2>
        <FavoriteColor />

        <hr style={{ margin: "30px 0", borderColor: "#444" }} />

        {/* Exercício 1 e 3: Tabela de dados vindo do JSON */}
        <h2>Exercício 1 e 3: Tabela de Produtos (Carga via JSON)</h2>
        <TabelaProdutos />

        <hr style={{ margin: "30px 0", borderColor: "#444" }} />

        {/* Seus componentes anteriores organizados */}
        <h2>Componentes Anteriores (Cards e Contador)</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", margin: "20px 0" }}>
          <ListaCards />
        </div>
        
        <Contador />
      </div>
    </>
  );
}

export default App;