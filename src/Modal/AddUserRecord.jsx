import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddUserRecord = (props) => {

    return (
        <Modal show={props.show} onHide={props.handleClose} backdrop="static">
            <Modal.Header className="ModalHeader">
            <Modal.Title>Add User Record</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <form className="form__group field">
                <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
                <label for="name" className="form__label">Name</label>
            </form>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={props.handleCloseAdd}>Close</Button>
            <button class="button-paper" role="button">Save</button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddUserRecord;