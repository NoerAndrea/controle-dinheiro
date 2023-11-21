import { useState } from 'react';
import { addRegistro } from '../store/modules/registro/registroSlice';
import { useAppDispatch } from '../store/hooks';

function EntradaValor() {
  const [valor, setValor] = useState<number>(0);
  const [descricao, setDescricao] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleAdicionarEntrada = () => {
    dispatch(
      addRegistro({
        id: Date.now().toString(),
        valor,
        descricao,
        type: "entrada"
      })
    );
    setValor(0);
    setDescricao('');
  };

  return (
    <div>
      <h2>Entrada de Valor</h2>
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
      <button onClick={handleAdicionarEntrada}>Entrada</button>
    </div>
  );
}

export default EntradaValor;
