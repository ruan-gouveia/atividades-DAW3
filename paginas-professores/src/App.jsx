import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import PaginaInicial from "./components/PaginaInicial";
import PaginaProfessor from "./components/PaginaProfessor";

const professores = [
  {
    id: 1,
    nome: "Renata França",
    disciplina: "Estrutura de Dados",
    curso: "Análise e Desenvolvimento de Sistemas",
    semestre: "2026.1",
  },
  {
    id: 2,
    nome: "Álvaro Magnum",
    disciplina: "Padrões de Projeto",
    curso: "Análise e Desenvolvimento de Sistemas",
    semestre: "2026.1",
  },
  {
    id: 3,
    nome: "Rodolfo Bolconte",
    disciplina: "Desenvolvimento de Aplicações Web III",
    curso: "Análise e Desenvolvimento de Sistemas",
    semestre: "2026.1",
  },
];

function App() {
  const [paginaAtual, setPaginaAtual] = useState("inicio");

  const professorSelecionado = professores.find((p) => p.id === paginaAtual);

  return (
    <div>
      <Menu
        professores={professores}
        paginaAtual={paginaAtual}
        setPaginaAtual={setPaginaAtual}
      />

      <div className="conteudo">
        {paginaAtual === "inicio" && <PaginaInicial professores={professores} setPaginaAtual={setPaginaAtual} />}
        {professorSelecionado && <PaginaProfessor professor={professorSelecionado} />}
      </div>
    </div>
  );
}

export default App;