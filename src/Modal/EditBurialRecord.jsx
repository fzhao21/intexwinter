import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditBurialRecord = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose} backdrop="static">
            <Modal.Header className="ModalHeader">
            <Modal.Title>Edit Burial Record</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={props.handleCloseEdit}>Close</Button>
            <button class="button-paper" role="button">Save</button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditBurialRecord;