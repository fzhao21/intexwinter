import React, { useState } from 'react'
import EditUserRecord from '../Modal/EditUserRecord';
import AddUserRecord from '../Modal/AddUserRecord';
import addUserButton from '../img/AddUserIcon.png'
import editUserButton from '../img/EditUserIcon.png'


const Admin = () => {
    
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
            
            <button className="button" onClick={handleOpenModalAdd}>
                Add User
                <div className="button__horizontal"></div>
                <div className="button__vertical"></div>
                <img src={addUserButton}></img>
            </button>
            <br></br>
            <button className="button" onClick={handleOpenModalEdit}>
                Edit User
                <div className="button__horizontal"></div>
                <div className="button__vertical"></div>
                <img src={editUserButton}></img>
            </button>
    
            <AddUserRecord show={modalAddOpen} handleCloseAdd={handleCloseModalAdd} />
            <EditUserRecord show={modalEditOpen} handleCloseEdit={handleCloseModalEdit} />
        </>
    )
}

export default Admin;