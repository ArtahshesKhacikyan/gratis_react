import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function createData(generation, user, userId, anotherUserId, money, idTransaction,bonus, idTransactionBonus) {
  return { generation, user, userId, anotherUserId, money, idTransaction, bonus, idTransactionBonus};
}

const rows = [
  createData('1', 'Клиент', 'AA145468', 24, '12 (1.2)', 'TRAZ54564564', 500, 'TRAZ54564510'),
  createData('2', 'Клиент', 'AA145469', 37, '24(2.4%)', 'TRAZ54564564', 100, 'TRAZ54564510'),
  createData('3', 'Клиент', 'AA145468', 24, '5 (0,5%)', 'TRAZ54564564', 250, 'TRAZ54564510'),
  createData('1', 'Водитель', 'AA145468', 67, '5 (0,5%)', 'TRAZ54564564', 300, 'TRAZ54564510'),
  createData('2', 'Водитель', 'AA145468', 49, '5 (0,5%)', 'TRAZ54564564', 500, 'TRAZ54564510'),
  createData('3', 'Водитель', 'AA145468', 49, '5 (0,5%)', 'TRAZ54564564', 500, 'TRAZ54564510'),
  createData('', 'Superuser клиента', 'AA145468', 49, '5 (0,5%)', 'TRAZ54564564', 500, 'TRAZ54564510'),
  createData('', 'Superuser водителя', 'AA145468', 49, '5 (0,5%)', 'TRAZ54564564', 500, 'TRAZ54564510'),
];

class PaymentTable extends React.Component  {
    render(){
        return (
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Поколение</TableCell>
                    <TableCell align="center">Пользователь</TableCell>
                    <TableCell align="center">ID Пользователь</TableCell>
                    <TableCell align="center">Сумма (%)</TableCell>
                    <TableCell align="center">O.Н.</TableCell>
                    <TableCell align="center">ID транзакции (%)</TableCell>
                    <TableCell align="center">Бонус</TableCell>
                    <TableCell align="center">ID транзакции бонуса</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row" align="center">
                        {row.generation}
                      </TableCell>
                      <TableCell align="center">{row.user}</TableCell>
                      <TableCell align="center">{row.userId}</TableCell>
                      <TableCell align="center">{row.anotherUserId}</TableCell>
                      <TableCell align="center">{row.money}</TableCell>
                      <TableCell align="center">{row.idTransaction}</TableCell>
                      <TableCell align="center">{row.bonus}</TableCell>
                      <TableCell align="center">{row.idTransactionBonus}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );   
    }
}

export default PaymentTable;