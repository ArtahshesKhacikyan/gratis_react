import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import LiveOrderTab from './LiveOrderTab';
import OrdersHistory from './OrdersHistory/OrdersHistory';


class TabsComponent extends React.Component {
    render() {
        return (
            <div className="tabs-section">
                <Tabs
                    id="controlled-tab-example"
                >
                    <Tab eventKey="live-order" title="ОНЛАЙН ЗАКАЗЫ" className='live-order'>
                       <LiveOrderTab/>
                    </Tab>
                    <Tab eventKey="live-history" title="ИСТОРИЯ ЗАКАЗОВ" className='live-history'>
                        <OrdersHistory/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default TabsComponent;