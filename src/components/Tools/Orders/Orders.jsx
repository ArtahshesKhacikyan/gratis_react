import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import AnaliticsChart from './AnaliticsChart';
import { withRouter } from 'react-router-dom';
import { routePaths } from '../../../router';
import MainModal from '../../OrderDetails/MainModal';

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDetailsOrderShow: false,
        }
    }

    orderDetailsClick = () => {
        window.open('/details-order','','height=950,width=1200');
    }

    handleClose =()=>{
        this.setState({
            isDetailsOrderShow: false
        })
    }

    render() {
        return (
            <div className="orders-header">
                <MainModal show={this.state.isDetailsOrderShow} onHide={this.handleClose} />

                <div className="tab-history">
                    <div >
                        <Tabs>
                            <Tab eventKey="clinet" title='Клиент'
                            >
                                <div>
                                    <AnaliticsChart />
                                    <button onClick={this.orderDetailsClick}>Order Details</button>
                                </div>
                            </Tab>
                            <Tab
                                eventKey="driver"
                                title='Водитель'>
                                <div>
                                    <AnaliticsChart />

                                </div>
                            </Tab>
                        </Tabs>
                        <div className="history-orders-chackbox">

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default withRouter(Orders);