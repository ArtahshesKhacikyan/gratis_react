import React from "react";
import { TableRow, TableCell, TableBody } from "@material-ui/core";

class DownTableBody extends React.Component {
  render() {
    const {
      stableSort,
      getComparator,
      order,
      orderBy,
      rows,
      page,
      rowsPerPage,
      emptyRows,
      dense,
      isSelected
    } = this.props;
    return (
      <TableBody>
        {stableSort(rows, getComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, index) => {
            const isItemSelected = isSelected(row.name);
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <TableRow
                hover
                tabIndex={-1}
                key={row.name}
                selected={isItemSelected}
              >
                <TableCell component="th" id={labelId}>
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">{row.protein}</TableCell>
              </TableRow>
            );
          })}
        {emptyRows > 0 && (
          <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
    );
  }
}

export default DownTableBody;
