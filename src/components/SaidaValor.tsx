import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRegistro } from '../store/modules/registro/registroSlice';

function SaidaValor() {
  const [valor, setValor] = useState<number>(0);
  const [descricao, setDescricao] = useState<string>('');
  const dispatch = useDispatch();

  const handleAdicionarSaida = () => {
    dispatch(
      addRegistro({
        id: Date.now().toString(),
        valor: valor,
        descricao,
        type: "saída"
      })
    );
    setValor(0);
    setDescricao('');
  };

  return (
    <div>
      <h2>Saída de Valor</h2>
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <button onClick={handleAdicionarSaida}>Saída</button>
    </div>
  );
}

export default SaidaValor;
