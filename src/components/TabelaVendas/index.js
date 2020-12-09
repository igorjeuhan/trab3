import { useState, useEffect } from 'react';
import './index.css';
import ItemVenda from '../ItemVenda';
import FormularioVendas from '../FormularioVendas';

const TabelaVendas = () => {
  const [vendas, setVendas] = useState(() => {
    const dadosLocal = localStorage.getItem('venda');
    return dadosLocal ? JSON.parse(dadosLocal) : [];
  });

  function adicionarVenda(produto, cliente, valor, pago) {
    const id = Math.random() * 1;
    setVendas([...vendas, { id, produto, cliente, valor, pago }]);
  }

  useEffect(() => {
    localStorage.setItem('venda', JSON.stringify(vendas));
  }, [vendas]);

  function removerVenda(id) {
    setVendas(vendas.filter((venda) => venda.id !== id));
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="titulo">Produto</th>
            <th className="titulo">Cliente</th>
            <th className="titulo">Valor</th>
            <th className="titulo">Pago</th>
            <th className="titulo">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {vendas.map((venda) => (
            <ItemVenda key={venda.id} venda={venda} remover={removerVenda} />
          ))}
        </tbody>
      </table>
      <FormularioVendas adicionar={adicionarVenda} />
    </>
  );
};

export default TabelaVendas;
