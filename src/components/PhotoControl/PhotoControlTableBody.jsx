import React from "react";
import { TableRow, TableCell, TableBody } from "@material-ui/core";
import pending from "../../assets/images/pending.png";
import rejected from "../../assets/images/not_allowed.png";

class PhotoControlTableBody extends React.Component {
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
      isSelected,
    } = this.props;
    console.log("-----AAAAA--------", this.props);
    return (
      <TableBody className="photo-control-table-body">
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
                  <div className='table-infomation-section'>
                    <img
                      src={
                        row.status === "pending"
                          ? pending
                          : row.status === "rejected"
                          ? rejected
                          : ""
                      }
                      alt=""
                      style={{ width: "20px", height: "20px" }}
                    />
                    <p className='date-setion'>{row.date}</p>
                  </div>
                  <br/>
                  <strong className='table-body-span'>О.Н. {row.id}</strong>
                  <br />
                  <strong>ID:{row.userId}</strong>
                  <br/>
                  <strong>{row.surname} {row.name}</strong>
                  <br/>
                    <p className="table-bod-car-mark">{row.mark}{' '}{row.model}{' '}{row.carNum}{' '}{row.color}</p>
                    <p className="year-section">Год выпуска {row.year}</p>
                </TableCell>
                <TableCell align="center">
                  <img src={row.photo.front} alt="" />
                </TableCell>
                <TableCell align="center">
                  <img src={row.photo.left_side} alt="" />
                </TableCell>
                <TableCell align="center">
                  <img src={row.photo.back} alt="" />
                </TableCell>
                <TableCell align="center">
                  <img src={row.photo.right_side} alt="" />
                </TableCell>
                <TableCell align="center">
                  <img src={row.photo.salon_a} alt="" />
                </TableCell>
                <TableCell align="center">
                  <img src={row.photo.salon_b} alt="" />
                </TableCell>
                <TableCell align="center">
                  <img src={row.photo.tech_pass} alt="" />
                </TableCell>
                <TableCell align="center">
                  <img src={row.photo.tech_pass_b} alt="" />
                </TableCell>
                <TableCell align="center">
                  <img src={row.photo.license} alt="" />
                </TableCell>
                <TableCell align="center">
                  <img src={row.photo.license_b} alt="" />
                </TableCell>
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

export default PhotoControlTableBody;
