import React from "react";
import userImage from "../../assets/images/userimage.jpg";
class ToolsHeader extends React.Component {
  render() {
    return (
      <div className="tools-header-section">
        <div>
          <img src={userImage} alt="Avatar" className="user-avatar-img" />
          <label className="user-info-section">
            Артак Матевосян
            <br />
            ID: AB025605
            <br />
            O.H: 9
          </label>
        </div>
        <div className="status-section">
          <label htmlFor="">
            Статус <br />
            На заказе
          </label>
        </div>
        <div className="status-section">
          <label htmlFor="" className='balance-lable'>
            Баланс <br />
            120
          </label>
        </div>
        <div className="status-section">
          <label htmlFor="" className='balance-lable'>
            Доступная сумма <br />
            500
          </label>
        </div>
        <div className="photocontrol-status-section">
          <p>Фотоконтроль нe пройдено</p>
        </div>
        <div className="car-and-phone-section">
          <label htmlFor="">Телефон: (+994544545)</label>
          <label htmlFor="">Раб. телефон: (+994544545)</label>
          <label htmlFor="">Автомобиль : Mercedes Benz C-class</label>
          <label htmlFor="">Номер машины: 77 LL 777</label>

        </div>
      </div>
    );
  }
}
export default ToolsHeader;
