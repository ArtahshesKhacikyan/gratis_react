import React from "react";
import AllBalanceTable from "./AllBalanceTable";
import AllBalanceFormSection from "./AllBalanceFormSection";

class AllBalance extends React.Component {
  render() {
    return (
      <div className="balance-tabs">
        {/* <AllBalanceFormSection /> */}
        <div className='balance-button-section'>
          <button className='add-money-button'>Пополнить</button>
          <button className='money-out-buuton'>Списать</button>
        </div>

        <AllBalanceTable />
      </div>
    );
  }
}

export default AllBalance;
