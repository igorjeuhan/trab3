import { useState } from 'react';
import './index.css';

const FormularioVendas = ({ adicionar }) => {
  const [dados, setDados] = useState({
    produto: '',
    cliente: '',
    valor: '',
    pago: '',
  });

  function enviarFormulario(event) {
    event.preventDefault();

    adicionar(dados.produto, dados.cliente, dados.valor, dados.pago);

    setDados({ produto: '', cliente: '', valor: '', pago: '' });
  }

  function alterarEstado({ target }) {
    setDados({
      ...dados,
      [target.name]: target.value,
    });
  }

  return (
    <>
      <form onSubmit={enviarFormulario}>
        <h3>Formulário de cadastro de vendas</h3>
        <label htmlFor="produto">Produto:</label>
        <input
          type="text"
          id="produto"
          name="produto"
          value={dados.produto}
          onChange={alterarEstado}
        />
        <label htmlFor="cliente">Cliente:</label>
        <input
          type="text"
          id="cliente"
          name="cliente"
          value={dados.cliente}
          onChange={alterarEstado}
        />
        <label htmlFor="valor">Valor:</label>
        <input
          type="text"
          id="valor"
          name="valor"
          value={dados.valor}
          onChange={alterarEstado}
        />
        <label htmlFor="pago">Pago</label>
        <select
          id="pago"
          name="pago"
          value={dados.pago}
          onChange={alterarEstado}
        >
          <option>Selecione</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
        <button type="submit">Cadastrar venda</button>
      </form>
    </>
  );
};

export default FormularioVendas;
