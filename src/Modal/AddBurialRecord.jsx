import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddBurialRecord = (props) => {

    return (
        <Modal show={props.show} onHide={props.handleClose} backdrop="static">
            <Modal.Header className="ModalHeader">
            <Modal.Title>Add Burial Record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form class="AddBurialForm">
                    <label for="textileColor">Textile Color</label>
                    <input type="input" placeholder="Textile Color" name="textileColor" id='textileColor' required />
                    <br></br>
                    <label for="textileStructure">Textile Structure</label>
                    <input type="input" placeholder="Textile Structure" name="textileStructure" id='textileStructure' required />
                    <br></br>
                    <label for="sex">Sex</label>
                    <input type="radio" id="male" name="sex" value="male"/>
                        <label for="male">Male</label>
                    <input type="radio" id="female" name="sex" value="female"/>
                    <label for="female">Female</label>
                    <br></br>
                    <label for="burialDepth">Burial Depth</label>
                    <input type="input" placeholder="Burial Depth" name="burialDepth" id='burialDepth' required />
                    <br></br>
                    <label for="estimatedStature">Estimated Stature</label>
                    <input type="input" placeholder="Estimated Stature" name="estimatedStature" id='estimatedStature' required />
                    <br></br>
                    <label for="ageAtDeath">Age at Death</label>
                    <input type="input" placeholder="Age at Death" name="ageAtDeath" id='ageAtDeath' required />
                    <br></br>
                    <label for="headDirection">Head Direction</label>
                    <input type="input" placeholder="Head Direction" name="headDirection" id='headDirection' required />
                    <br></br>
                    <label for="burialID">Burial ID</label>
                    <input type="input" placeholder="Textile Color" name="burialID" id='burialID' required />
                    <br></br>
                    <label for="textileFunction">Textile Function</label>
                    <input type="input" placeholder="Textile Function" name="textileFunction" id='textileFunction' required />
                    <br></br>
                    <label for="hairColor">Hair Color</label>
                    <input type="input" placeholder="Hair Color" name="hairColor" id='hairColor' required />
                    <br></br>
                </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.handleCloseAdd}>Close</Button>
            <button class="button-paper" role="button">Save</button>
            </Modal.Footer>
        </Modal>

    );
}

export default AddBurialRecord;