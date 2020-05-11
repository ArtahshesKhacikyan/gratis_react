import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import AnaliticsChart from './AnaliticsChart';

class Orders extends React.Component {
    render() {
        return (
            <div className="orders-header">
                <div className="tab-history">
                    <div >
                        <Tabs>
                            <Tab eventKey="clinet" title='Клиент'
                            >
                                <div>
                                    <AnaliticsChart />
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

export default Orders;