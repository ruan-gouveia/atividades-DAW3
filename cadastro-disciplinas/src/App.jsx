import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    curso: "",
    periodo: "",
    professor: "",
    alunos: "",
  });

  const [modal, setModal] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setModal(true);
  }

  function fecharModal() {
    setModal(false);
    setForm({ nome: "", descricao: "", curso: "", periodo: "", professor: "", alunos: "" });
  }

  return (
    <div className="container">
      <header className="header">
        <h1>IFPB</h1>
        <p>Sistema de Cadastro de Disciplinas</p>
      </header>

      <div className="card">
        <h2>Nova Disciplina</h2>

        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label>Nome da Disciplina</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Ex: Desenvolvimento de Aplicações Web III"
              required
            />
          </div>

          <div className="campo">
            <label>Descrição da Disciplina</label>
            <textarea
              name="descricao"
              value={form.descricao}
              onChange={handleChange}
              placeholder="Descreva a disciplina..."
              required
            />
          </div>

          <div className="grid-2">
            <div className="campo">
              <label>Curso</label>
              <select name="curso" value={form.curso} onChange={handleChange} required>
                <option value="">Selecione...</option>
                <option value="Análise e Desenvolvimento de Sistemas">Análise e Desenvolvimento de Sistemas</option>
                <option value="Informática">Informática</option>
                <option value="Sistemas de Energia Renovável">Sistemas de Energia Renovável</option>
              </select>
            </div>

            <div className="campo">
              <label>Período</label>
              <select name="periodo" value={form.periodo} onChange={handleChange} required>
                <option value="">Selecione...</option>
                <option value="1º Período">1º Período</option>
                <option value="2º Período">2º Período</option>
                <option value="3º Período">3º Período</option>
                <option value="4º Período">4º Período</option>
                <option value="5º Período">5º Período</option>
                <option value="6º Período">6º Período</option>
              </select>
            </div>

            <div className="campo">
              <label>Professor</label>
              <input
                type="text"
                name="professor"
                value={form.professor}
                onChange={handleChange}
                placeholder="Ex: Prof. Rodolfo"
                required
              />
            </div>

            <div className="campo">
              <label>Quantidade de Alunos</label>
              <input
                type="number"
                name="alunos"
                value={form.alunos}
                onChange={handleChange}
                placeholder="Ex: 40"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-cadastrar">
            Cadastrar Disciplina
          </button>
        </form>
      </div>

      {modal && (
        <div className="overlay">
          <div className="modal">
            <h3>Disciplina Cadastrada!</h3>
            <div className="info">
              <p><strong>Nome:</strong> {form.nome}</p>
              <p><strong>Descrição:</strong> {form.descricao}</p>
              <p><strong>Curso:</strong> {form.curso}</p>
              <p><strong>Período:</strong> {form.periodo}</p>
              <p><strong>Professor:</strong> {form.professor}</p>
              <p><strong>Alunos:</strong> {form.alunos}</p>
            </div>
            <button onClick={fecharModal} className="btn-fechar">
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;