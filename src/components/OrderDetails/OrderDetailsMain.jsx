
import React from 'react';
import { withRouter } from 'react-router-dom';
import Payment from './Payment/Payment';
import _ from 'lodash';
import Orders from './Orders/Orders';

class OrderDetailsMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSection: {
                orders: true,
                gps: false,
                payment: false
            }
        }
    }

    setSection(name) {
        let newValue = _.mapValues(this.state.showSection, () => false);
        newValue[name] = true;
        this.setState({ showSection: newValue });
    }

    onSectionClick = (e) => {
        this.setSection(e.target.name);
    }

    render() {
        return (
            <div className='detail-order-main-model'>
                <div className='main-model-header'>
                    <a
                        onClick={this.onSectionClick}
                        name='orders'
                        className={
                            this.state.showSection.orders ?
                                'active' : 'section-link'}
                    >Заказы</a>
                    <a
                        className={
                            this.state.showSection.gps ?
                                'active' : 'section-link'}
                        onClick={this.onSectionClick}
                        name='gps'>GPS</a>
                    <a
                        className={
                            this.state.showSection.payment ?
                                'active' : 'section-link'}
                        onClick={this.onSectionClick}
                        name='payment'>Платёж</a>
                    {this.state.showSection.orders ?
                        <div className="orders-buton-section">
                            <button className="cancle">Oтменить </button>
                            <button className="in-place">на месте </button>
                            <button className="on-the-way">В пути </button>
                            <button className="on-the-way">Завершит</button>
                        </div> : ''}
                </div>
                <div>
                    {this.state.showSection.payment ?
                        <Payment /> : ""
                    }
                    {this.state.showSection.orders ?
                        <Orders /> : ''
                    }
                </div>
            </div>
        )
    }
}
export default withRouter(OrderDetailsMain);