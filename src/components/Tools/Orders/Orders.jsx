import React from "react";
import AnaliticsChart from "./AnaliticsChart";
import { withRouter } from "react-router-dom";
import { routePaths } from "../../../router";
import MainModal from "../../OrderDetails/MainModal";
import OrdersTable from "./OrdersTable";
import OrdersTab from "./OrdersTab";

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetailsOrderShow: false,
      showSection: {
        client: true,
        driver: false,
      },
    };
  }

  setSection(name) {
    let newValue = _.mapValues(this.state.showSection, () => false);
    newValue[name] = true;
    this.setState({ showSection: newValue });
  }

  onSectionClick = (e) => {
    this.setSection(e.target.name);
  };

  orderDetailsClick = () => {
    window.open(routePaths.DETAILS_ORDERS, "", "height=950,width=1200");
  };

  handleClose = () => {
    this.setState({
      isDetailsOrderShow: false,
    });
  };

  render() {
    return (
      <div className="orders-header">
        <MainModal
          show={this.state.isDetailsOrderShow}
          onHide={this.handleClose}
        />
        <div className="orders-table">
          <button onClick={this.orderDetailsClick}>Order Details</button>
        </div>
        <OrdersTab />
      </div>
    );
  }
}

export default withRouter(Orders);
