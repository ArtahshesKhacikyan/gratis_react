import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";

class ConfirmModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <div>
                <Modal 
                show={this.props.show} 
                onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Вы уверены</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onHide}>
                            Hет
          </Button>
                        <Button variant="primary" onClick={this.props.onHide}>
                            ДА
          </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ConfirmModal