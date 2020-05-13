
import React from 'react';
import { Modal } from 'react-bootstrap';

class MainModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}> 
                <Modal.Header closeButton>
                    <Modal.Title>
                        <a href="">Заказы</a>
                        <a href="">GPS</a>
                        <a href="">Платёж</a>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
               
                </Modal.Footer>
            </Modal>
        )
    }
}
export default MainModal;