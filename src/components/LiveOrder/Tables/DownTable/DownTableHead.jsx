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
import { getOrderList } from "../../liveOrderstore/actions";

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
  },
  { id: "calories", numeric: true, disablePadding: false, label: "Calories" },
  { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
  { id: "carbs", numeric: true, disablePadding: false, label: "Carbs (g)" },
  { id: "protein", numeric: true, disablePadding: false, label: "Protein (g)" },
];

class DownTableHead extends React.Component {
  componentDidMount = async () => {
    await this.props.getOrderList();
  };

  createSortHandler = (property) => (event) => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;
    if(!this.props.getOrderListResponse.data) return ''
    return (
      <TableHead>
        <TableRow>
          {Object.values(this.props.getOrderListResponse.data.table_down).map((key, value) => ( 
            <TableCell
              key={key}
              align="left"
              // padding={headCell.disablePadding ? "none" : "default"}
              // sortDirection={orderBy === value ? order : false}
            >
              <TableSortLabel
                active={orderBy === key}
                direction={orderBy === key ? order : "asc"}
                // onClick={this.createSortHandler(headCell.id)}
              >
                {key}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
}
function mapStateToProps(state) {
  return {
    getOrderListResponse: state.liveOrder.getOrderListResponse,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getOrderList,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DownTableHead);
DownTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
