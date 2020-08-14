import React from "react";
import DepositTable from "./DepositTable";

class Deposit extends React.Component {
  render() {
    return (
      <div className="balance-tabs">
        <DepositTable />
      </div>
    );
  }
}

export default Deposit;
