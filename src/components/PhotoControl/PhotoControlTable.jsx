import React from "react";
import Table from "@material-ui/core/Table";

import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";

import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import PhotoCantrolTableHead from "./PhotoCantrolTableHead";
import PhotoControlTableBody from "./PhotoControlTableBody";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPhotocontrolData } from "./photoControlStore/action";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];

class PhotoControlTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: "asc",
      orderBy: "IDЗаказа",
      page: 0,
      dense: false,
      rowsPerPage: 5,
      selected: [],
    };
  }

  componentDidMount = async () => {
    await this.props.getPhotocontrolData(); 
  };

  descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => this.descendingComparator(a, b, orderBy)
      : (a, b) => -this.descendingComparator(a, b, orderBy);
  }

  stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  handleRequestSort = (event, property) => {
    const isAsc = this.state.orderBy === property && this.state.order === "asc";
    this.setState({
      order: isAsc ? "desc" : "asc",
      orderBy: property,
    });
  };

  handleChangePage = (event, newPage) => {
    this.setState({
      page: newPage,
    });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    });
  };

  handleChangeDense = (event) => {
    this.setState({
      dense: event.target.checked,
    });
  };

  render() {
    if (!this.props.getPhotoCantrolDataResponse.data) return "";
    const isSelected = (name) => this.state.selected.indexOf(name) !== -1;

    const emptyRows =
      this.state.rowsPerPage -
      Math.min(
        this.state.rowsPerPage,
        this.props.getPhotoCantrolDataResponse.data.length - this.state.page * this.state.rowsPerPage
      );
    console.log("this prop", this.props.getPhotoCantrolDataResponse.data.length);

    return (
      <div className="">
        <Paper>
          <TableContainer>
            <Table
              aria-labelledby="tableTitle"
              size={this.state.dense ? "small" : "medium"}
              aria-label="enhanced table"
            >
              <PhotoCantrolTableHead
                order={this.state.order}
                orderBy={this.state.orderBy}
                onRequestSort={this.handleRequestSort}
                rowCount={rows.length}
              />
              <PhotoControlTableBody
                isSelected={isSelected}
                dense={this.state.dense}
                emptyRows={emptyRows}
                rows={this.props.getPhotoCantrolDataResponse.data}
                page={this.state.page}
                stableSort={this.stableSort}
                rowsPerPage={this.state.rowsPerPage}
                getComparator={() =>
                  this.getComparator(this.state.order, this.state.orderBy)
                }
              />
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={this.props.getPhotoCantrolDataResponse.data.length}
            rowsPerPage={this.state.rowsPerPage}
            page={this.state.page}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.dense}
              onChange={this.handleChangeDense}
            />
          }
          label="Dense padding"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    getPhotoCantrolDataResponse: state.photoControl.getPhotoCantrolDataResponse,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getPhotocontrolData,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoControlTable);
