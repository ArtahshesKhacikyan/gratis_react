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


class UpTableHead extends React.Component {
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
          {Object.values(this.props.getOrderListResponse.data.table_up).map((key, value) => ( 
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

export default connect(mapStateToProps, mapDispatchToProps)(UpTableHead);

UpTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
