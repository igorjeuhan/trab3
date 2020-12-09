import './index.css';

const ItemVenda = ({ venda, remover }) => {
  return (
    <tr>
      <td className="corRoxa">{venda.produto}</td>
      <td className="corRoxa">{venda.cliente}</td>
      <td className="corVerde">R$ {venda.valor}</td>
      <td className={venda.pago !== 'Sim' ? 'corVermelha' : 'corVerde'}>
        {venda.pago}
      </td>
      <td className="corVermelha">
        <span onClick={() => remover(venda.id)}>
          {venda.produto ? 'Excluir' : ''}
        </span>
      </td>
    </tr>
  );
};

export default ItemVenda;
