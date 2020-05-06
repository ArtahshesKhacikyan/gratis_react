import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core'
import SearchBoxInput from '../SearchBoxInput';
import FormInput from '../FormInput';

class OrdersHistory extends React.Component {
    render() {
        return (
            <div className="live-tab-section">
                <div className="tab-history">
                    <div >
                        <Tabs>
                            <Tab eventKey="clinet" title='Клиент'
                            >
                                <div>
                                    <FormInput />
                                    <SearchBoxInput />
                                    <FormInput />
                                    <FormInput />
                                    <FormInput />
                                </div>
                            </Tab>
                            <Tab
                                eventKey="driver"
                                title='Водитель'>
                                <div>
                                    <FormInput />
                                    <SearchBoxInput />
                                    <FormInput />
                                    <FormInput />
                                    <FormInput />
                                </div>
                            </Tab>
                        </Tabs>
                        <div className="history-orders-chackbox">
                            <FormGroup row className="checbox-section">
                                <FormControlLabel
                                    control={<Checkbox name="checkedA" style={{ color: '#00b63d' }} />}
                                    label="Сгруппировать"
                                />
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default OrdersHistory;