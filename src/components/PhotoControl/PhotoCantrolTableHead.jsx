import React from "react";
import PropTypes from "prop-types";
import {
  TableHead,
  TableRow,
  TableSortLabel,
  TableCell,
} from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import carFront from "../../assets/images/front.png";
import leftSide from "../../assets/images/leftSide.png";
import backSide from "../../assets/images/car-back.png";
import rightSide from "../../assets/images/rightSide.png";
import salonA from "../../assets/images/salonA.png";
import salonB from "../../assets/images/salonB.png";

const headCells = [
  {
    id: "information",
    numeric: false,
    disablePadding: true,
    label: "Информация",
  },
  {
    id: "carFront",
    numeric: false,
    disablePadding: true,
    label: "Перед",
    img: {carFront}
  },
  { id: "leftSide", numeric: true, disablePadding: false, label: "Левый бок", },
  { id: "backSide", numeric: true, disablePadding: false, label: "Вид Сзади" },
  { id: "rightSide", numeric: true, disablePadding: false, label: "Правый бок" },
  { id: "salonA", numeric: true, disablePadding: false, label: "Салон А" },
  { id: "salonB", numeric: true, disablePadding: false, label: "Салон B" },
  { id: "texnicalPasspFront", numeric: true, disablePadding: false, label: "Тех. Паспорт A" },
  { id: "texnicalPasspBack", numeric: true, disablePadding: false, label: "Тех. Паспорт B" },
  { id: "licennceFront", numeric: true, disablePadding: false, label: "В. Права" },
  { id: "licennceBack", numeric: true, disablePadding: false, label: "В. Права" },
];

class PhotoCantrolTableHead extends React.Component {
  componentDidMount = async () => {};

  createSortHandler = (property) => (event) => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;
    return (
      <TableHead>
        <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='left'
            padding='none'
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={this.createSortHandler(headCell.id)}
            >
              <img src={
                headCell.id === 'carFront' ? carFront : 
                headCell.id === 'leftSide' ? leftSide : 
                headCell.id === 'backSide' ? backSide : 
                headCell.id === 'rightSide' ? rightSide :
                headCell.id === 'salonA' ? salonA :
                headCell.id === 'salonB' ? salonB : ""
              } alt=""/>
              {headCell.label}
              {/* {orderBy === headCell.id ? (
                <span >
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null} */}
            </TableSortLabel>
          </TableCell>
        ))}
        </TableRow>
      </TableHead>
    );
  }
}
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoCantrolTableHead);

PhotoCantrolTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
