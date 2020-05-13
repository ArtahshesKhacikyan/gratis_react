/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Modal } from 'react-bootstrap';
import Orders from './Payment/Orders';
import _ from 'lodash';

class MainModal extends React.Component {
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
            <Modal show={this.props.show} onHide={this.props.handleClose} className='detail-order-main-model'>
                <Modal.Header closeButton>
                    <Modal.Title>
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
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.showSection.payment ?
                        <Orders /> : ''
                    }
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        )
    }
}
export default MainModal;