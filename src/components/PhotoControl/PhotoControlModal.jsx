import React from 'react';
import { Modal } from 'react-bootstrap';
// import { TextField } from '@material-ui/core'
import PhotoControlFormSection from './PhotoControlFormSection';
import PhotoControlGalary from './PhotoControlGalary';
class PhotoControlModal extends React.Component {

    render() {
        const { userid } = this.props
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                className='photocantrol-main-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-section-row">
                        <PhotoControlFormSection  selectUserId={userid}  show={this.props.show} onHide={this.props.onHide}/>
                        <PhotoControlGalary selectUserId={userid} />
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}
export default PhotoControlModal;