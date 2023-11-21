
import React from 'react';
import { useAppSelector } from '../store/hooks';
import EntradaValor from '../components/EntradaValor';
import SaidaValor from '../components/SaidaValor';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Home: React.FC = () => {
  //utilizar infos salvas no redux useAppSelector
    const registroRedux = useAppSelector((state) => state.registros);

    return (
      <div className="App">
        <h1>Minha Carteira</h1>
        <EntradaValor />
        <SaidaValor />

        <h2>Valor Total:{registroRedux.reduce((acc,val)=>{
          if(val.type === 'entrada'){
            return acc+val.valor
          }else{
            return acc-val.valor
          }
        },0)}</h2>
        
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell align="right">Valor</TableCell>
            <TableCell align="right">Tipo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {registroRedux.map((r) => (
            <TableRow
              key={r.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {r.descricao}
              </TableCell>
              <TableCell align="right">{r.valor}</TableCell>
              <TableCell align="right">{r.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      </div>
    );
}

export default Home;