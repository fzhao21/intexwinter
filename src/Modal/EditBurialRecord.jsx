import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditBurialRecord = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose} backdrop="static">
            <Modal.Header>
            <Modal.Title>Edit Burial Record</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={props.handleCloseEdit}>Close</Button>
            <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditBurialRecord;