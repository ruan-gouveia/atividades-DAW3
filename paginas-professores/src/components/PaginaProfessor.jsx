import { useState } from "react";
import ModalContato from "./ModalContato";

function PaginaProfessor({ professor }) {
  const [form, setForm] = useState({ nome: "", assunto: "", mensagem: "" });
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
    setForm({ nome: "", assunto: "", mensagem: "" });
  }

  return (
    <div>
      <div className="banner">
        <h1>{professor.nome}</h1>
      </div>

      <div className="pagina-professor">

        <div className="card">
          <h2>Disciplinas</h2>
          <table className="tabela">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Curso</th>
                <th>Semestre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{professor.disciplina}</td>
                <td>{professor.curso}</td>
                <td>{professor.semestre}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <h2>Entrar em Contato</h2>
          <form onSubmit={handleSubmit}>
            <div className="campo">
              <label>Nome do Aluno</label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                required
              />
            </div>
            <div className="campo">
              <label>Assunto</label>
              <input
                type="text"
                name="assunto"
                value={form.assunto}
                onChange={handleChange}
                placeholder="Assunto da mensagem"
                required
              />
            </div>
            <div className="campo">
              <label>Mensagem</label>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                placeholder="Escreva sua mensagem..."
                required
              />
            </div>
            <button type="submit" className="btn-cadastrar">Enviar Contato</button>
          </form>
        </div>

      </div>

      {modal && <ModalContato dados={form} fechar={fecharModal} />}
    </div>
  );
}

export default PaginaProfessor;