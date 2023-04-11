import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddUserRecord = (props) => {

    return (
        <Modal show={props.show} onHide={props.handleClose} backdrop="static">
            <Modal.Header>
            <Modal.Title>Add User Record</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <form class="form__group field">
                <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                <label for="name" class="form__label">Name</label>
            </form>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={props.handleCloseAdd}>Close</Button>
            <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddUserRecord;