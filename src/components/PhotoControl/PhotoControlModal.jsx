import React from 'react';
import { Modal } from 'react-bootstrap';

class PhotoControlModal extends React.Component {

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} >
                <Modal.Header closeButton>
                    <Modal.Title>
                       
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        )
    }
}
export default PhotoControlModal;