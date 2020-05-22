import React from 'react';
import { withRouter } from 'react-router';
import {getOrderList} from './liveOrderstore/actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import logoGratis from '../../assets/images/gratisLogo.png';
import FormInput from './FormInput';
import CheckBoxInput from './CheckBoxInput';
import SearchBoxInput from './SearchBoxInput';
import TabsComponent from './TabsComponent';


class MainOrder extends React.Component {
    constructor(props){
        super(props);
    }

    // componentDidMount = async () =>  {
    //     await this.props.getOrderList()
    //     if(this.props.getOrderListResponse){
    //         console.log("this.props.getOrderListRespose", this.props.getOrderListResponse)
    //     }
    // }

    render() {
        return (
            <div className="main-order">
                <div className="online-order-section">
                    <img src={logoGratis} alt="" />
                    <FormInput label="Страна"/>
                    <FormInput label="Тарифные зоны"/>
                    <FormInput  label="Клиент"/>
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

function mapStateToProps(state) {
    return {
        getOrderListResponse: state.liveOrder.getOrderListResponse
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getOrderList
    }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainOrder))
