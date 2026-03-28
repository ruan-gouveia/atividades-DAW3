function Menu({ professores, paginaAtual, setPaginaAtual }) {
  return (
    <nav className="menu">
      <div className="menu-logo">IFPB</div>
      <div className="menu-links">
        <button
          className={paginaAtual === "inicio" ? "ativo" : ""}
          onClick={() => setPaginaAtual("inicio")}
        >
          Início
        </button>

        {professores.map((prof) => (
          <button
            key={prof.id}
            className={paginaAtual === prof.id ? "ativo" : ""}
            onClick={() => setPaginaAtual(prof.id)}
          >
            {prof.nome}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Menu;