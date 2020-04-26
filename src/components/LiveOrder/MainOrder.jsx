import React from 'react';
import { withRouter } from 'react-router';
import logoGratis from '../../assets/images/gratisLogo.png';
import FormInput from './FormInput';
import CheckBoxInput from './CheckBoxInput';
import SearchBoxInput from './SearchBoxInput';
import TabsComponent from './TabsComponent';


class MainOrder extends React.Component {
    render() {
        return (
            <div className="main-order">
                <div className="online-order-section">
                    <img src={logoGratis} alt="" />
                    <FormInput label="Страна"/>
                    <FormInput label="Тарифные зоны"/>
                    <FormInput  label="Клиент"/>
                    <FormInput label="Смена"/>
                    <CheckBoxInput />
                    <SearchBoxInput />
                    <div className='total-information'>
                        <p>Итого на смене: <span>300</span></p>
                        <p>Занят: <span>204[52%]</span></p>
                        <p>На заказе: <span>80[20%]</span></p>
                        <p>Свободен: <span>110[28%]</span></p>
                    </div>
                </div>
                <div className="table-section">
                    <TabsComponent />
                </div>
            </div>
        )
    }
}

export default withRouter(MainOrder)
