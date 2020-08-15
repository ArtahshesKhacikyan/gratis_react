import React from "react";
import DepositTable from "./DepositTable";

class Deposit extends React.Component {
  render() {
    return (
      <div className="balance-tabs">
         <div className='balance-button-section'>
          <button className='add-money-button'>Пополнить</button>
          <button className='money-out-buuton'>Списать</button>
        </div>
        <DepositTable />
      </div>
    );
  }
}

export default Deposit;
