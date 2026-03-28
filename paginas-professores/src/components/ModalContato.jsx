function ModalContato({ dados, fechar }) {
  return (
    <div className="overlay">
      <div className="modal">
        <h3>Contato Enviado!</h3>
        <div className="info">
          <p><strong>Aluno:</strong> {dados.nome}</p>
          <p><strong>Assunto:</strong> {dados.assunto}</p>
          <p><strong>Mensagem:</strong> {dados.mensagem}</p>
        </div>
        <button className="btn-fechar" onClick={fechar}>Fechar</button>
      </div>
    </div>
  );
}

export default ModalContato;