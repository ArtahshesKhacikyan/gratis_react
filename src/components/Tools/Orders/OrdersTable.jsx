import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(
  orderId,
  orderTime,
  orderStatus,
  durationOfOrder,
  tariff,
  orderAddress,
  paymentMethod,
  costOfOrder,
  currency
) {
  return {
    orderId,
    orderTime,
    orderStatus,
    durationOfOrder,
    tariff,
    orderAddress,
    paymentMethod,
    costOfOrder,
    currency,
  };
}

const rows = [createData(10000, 159, 11, 24, 55, 77, 88, 99, 100)];

class OrdersTable extends React.Component {
  render() {
    return (
      <div>
          <div>
              
          </div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID заказа</TableCell>
                <TableCell align="center">Время заказа</TableCell>
                <TableCell align="center">Статус заказа</TableCell>
                <TableCell align="center">Длительность заказа</TableCell>
                <TableCell align="center">Тариф</TableCell>
                <TableCell align="center">Адрес поездки</TableCell>
                <TableCell align="center">Метод оплаты</TableCell>
                <TableCell align="center">Стоимость поездки</TableCell>
                <TableCell align="center">Валюта</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.orderId}>
                  <TableCell component="th" scope="row">
                    {row.orderId}
                  </TableCell>
                  <TableCell align="center">{row.orderTime}</TableCell>
                  <TableCell align="center">{row.orderStatus}</TableCell>
                  <TableCell align="center">{row.durationOfOrder}</TableCell>
                  <TableCell align="center">{row.tariff}</TableCell>
                  <TableCell align="center">{row.orderAddress}</TableCell>
                  <TableCell align="center">{row.paymentMethod}</TableCell>
                  <TableCell align="center">{row.costOfOrder}</TableCell>
                  <TableCell align="center">{row.currency}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default OrdersTable;
