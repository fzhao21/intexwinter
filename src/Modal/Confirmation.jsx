import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteConfirmationModal =(props) => {
    const { toggleConfirmation, selectedId, handleDeleteConfirmation } = props;


    const handleDeleteConfirm = () => {
        // Perform your delete operation using the selectedId
        // ...
        handleDeleteConfirmation(selectedId);
        toggleConfirmation();
      };
    
      const handleDeleteCancel = () => {
        toggleConfirmation();
      };
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} backdrop="static">
        <Modal.Header closeButton className="ModalHeader">
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteConfirm}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteCancel}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteConfirmationModal;