import React from "react";
import WriteOffTable from "./WriteOffTable";

class WriteOff extends React.Component {
  render() {
    return (
      <div className="balance-tabs">
         <div className='balance-button-section'>
          <button className='add-money-button'>Пополнить</button>
          <button className='money-out-buuton'>Списать</button>
        </div>
        <WriteOffTable />
      </div>
    );
  }
}

export default WriteOff;
