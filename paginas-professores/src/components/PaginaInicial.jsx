function PaginaInicial({ professores, setPaginaAtual }) {
  return (
    <div>
      <div className="banner">
        <h1>Sistema de Professores</h1>
        <p>Selecione um professor no menu para ver suas disciplinas e entrar em contato.</p>
      </div>

      <div className="cards-grid">
        {professores.map((prof) => (
          <div key={prof.id} className="card-professor" onClick={() => setPaginaAtual(prof.id)}>
            <div className="card-avatar">{prof.nome.charAt(0)}</div>
            <h3>{prof.nome}</h3>
            <p>{prof.disciplina}</p>
            <span>{prof.semestre}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaginaInicial;