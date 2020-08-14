import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import Deposit from "./Deposit";

function createData(
  date,
  source,
  method,
  idOrder,
  IdTransaction,
  inputsMoney,
  findings,
  residue,
  available,
  description
) {
  return {
    date,
    source,
    method,
    idOrder,
    IdTransaction,
    inputsMoney,
    findings,
    residue,
    available,
    description
  };
}

const rows = [createData(10000, 159, 11, 24, 55, 77, 88, 99, 100, 150)];

class WriteOffTable extends React.Component {
  render() {
    return (
      <div className='balance-tables'>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Дата</TableCell>
                <TableCell align="center">Источник</TableCell>
                <TableCell align="center">Mетод</TableCell>
                <TableCell align="center">Ид заказа</TableCell>
                <TableCell align="center">Ид транзакция</TableCell>
                <TableCell align="center">Вводы</TableCell>
                <TableCell align="center">Выводы</TableCell>
                <TableCell align="center">Остаток</TableCell>
                <TableCell align="center">Доступно</TableCell>
                <TableCell align="center">Описание</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.date}>
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell align="center">{row.source}</TableCell>
                  <TableCell align="center">{row.method}</TableCell>
                  <TableCell align="center">{row.idOrder}</TableCell>
                  <TableCell align="center">{row.IdTransaction}</TableCell>
                  <TableCell align="center">{row.inputsMoney}</TableCell>
                  <TableCell align="center">{row.findings}</TableCell>
                  <TableCell align="center">{row.residue}</TableCell>
                  <TableCell align="center">{row.available}</TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default WriteOffTable;
