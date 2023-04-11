import React, { useState } from 'react'
import EditBurialRecord from '../Modal/EditBurialRecord';
import AddBurialRecord from '../Modal/AddBurialRecord';
import addBurialButton from '../img/AddRecordIcon.png'
import editBurialButton from '../img/EditRecordIcon.png'


const Summary = () => {
    
    const [modalAddOpen, setModalAddOpen] = useState(false);
    const [modalEditOpen, setModalEditOpen] = useState(false);

    const handleOpenModalAdd = () => {
        setModalAddOpen(true);
      };
    
      const handleCloseModalAdd = () => {
        setModalAddOpen(false);
      };
    
      const handleOpenModalEdit = () => {
        setModalEditOpen(true);
      };
    
      const handleCloseModalEdit = () => {
        setModalEditOpen(false);
      };

    return(
        <>  
            <button class="button" onClick={handleOpenModalAdd}>
                Add Burial Record
                <div class="button__horizontal"></div>
                <div class="button__vertical"></div>
                <img src={addBurialButton}></img>
            </button>
            <br></br>
            <button class="button" onClick={handleOpenModalEdit}>
                Edit Burial Record
                <div class="button__horizontal"></div>
                <div class="button__vertical"></div>
                <img src={editBurialButton}></img>
            </button>
    
            <AddBurialRecord show={modalAddOpen} handleCloseAdd={handleCloseModalAdd} />
            <EditBurialRecord show={modalEditOpen} handleCloseEdit={handleCloseModalEdit} />
        </>
    )
}

export default Summary;