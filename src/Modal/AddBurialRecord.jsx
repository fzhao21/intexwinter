import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import test from './test'

const AddBurialRecord = (props) => {

    const {handleCloseAdd} = props;

    //define all props
    const[squarenorthsouth, setSquareNorthSouth] = useState('11')
    const[headdirection, setHeadDirection] = useState('1')
    const[sex, setSex] = useState('M')
    const[northsouth, setNorthSouth] = useState('111')
    const[depth, setDepth] = useState('111')
    const[eastwest, setEastWest] = useState('111')
    const[adultsubadult, setAdultSubAdult] = useState('Adult')
    const[facebundles, setFaceBundles] = useState('Yes')
    const[southtohead, setSouthToHead] = useState('111')
    const[preservation, setPreservation] = useState('111')
    const[fieldbookpage, setFieldbookPage] = useState('111')
    const[squareeastwest, setSquareEastWest] = useState('111')
    const[goods, setGoods] = useState('111')
    const[text, setText] = useState('111')
    const[wrapping, setWrapping] = useState('None')
    const[haircolor, setHairColor] = useState('Y')
    const[westtohead, setWestToHead] = useState('111')
    const[samplescollected, setSamplesCollected] = useState('Y')
    const[area, setArea] = useState('111')
    const[burialid, setBurialID] = useState('111')
    const[length, setLength] = useState('111')
    const[burialnumber, setBurialNumber] = useState('111')
    const[dataexpertinitials, setDataExpertInitials] = useState('111')
    const[westtofeet, setWestToFeet] = useState('111')
    const[ageatdeath, setAgeAtDeath] = useState('111')
    const[southtofeet, setSouthToFeet] = useState('111')
    const[excavationrecorder, setExcavationRecorder] = useState('111')
    const[photos, setPhotos] = useState('Yes')
    const[hair, setHair] = useState('Long')
    const[burialmaterials, setBurialMaterials] = useState('111')
    const[dateofexcavation, setDateOfExcavation] = useState('111')
    const[fieldbookexcavationyear, setFieldbookExcavationYear] = useState('')
    const[clusternumber, setClusterNumber] = useState('111')
    const[shaftnumber, setShaftNumber] = useState('111')

    //called to submit to API
    const handleSubmit = (e, props) => {
        e.preventDefault();
        const requestBody = {
          'squarenorthsouth': String(squarenorthsouth),
          'headdirection': String(headdirection),
          'sex': String(sex),
          'northsouth': String(northsouth),
          'depth': String(depth),
          'eastwest': String(eastwest),
          'adultsubadult': String(adultsubadult),
          'facebundles': String(facebundles),
          'southtohead': String(southtohead),
          'preservation': String(preservation),
          'fieldbookpage': String(fieldbookpage),
          'squareeastwest': String(squareeastwest),
          'goods': String(goods),
          'text': String(text),
          'wrapping': String(wrapping),
          'haircolor': String(haircolor),
          'westtohead': String(westtohead),
          'samplescollected': String(samplescollected),
          'area': String(area),
          'burialid': String(burialid),
          'length': String(length),
          'burialnumber':  String(burialnumber),
          'dataexpertinitials': String(dataexpertinitials),
          'westtofeet': String(westtofeet),
          'ageatdeath': String(ageatdeath),
          'southtofeet': String(southtofeet),
          'excavationrecorder': String(excavationrecorder),
          'photos': String(photos),
          'hair': String(hair),
          'burialmaterials': String(burialmaterials),
          'dateofexcavation': String(dateofexcavation),
          'fieldbookexcavationyear': String(fieldbookexcavationyear),
          'clusternumber': String(clusternumber),
          'shaftnumber': String(shaftnumber),
        };

        const response = fetch('https://7o71cponk0.execute-api.us-west-1.amazonaws.com/data/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        })
        .then(response =>response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error', error);
        });
        console.log(requestBody)

        handleCloseAdd(false)
      };

      //when user inputs into the fields
      const handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        switch (name) {
            case 'squarenorthsouth':
                setSquareNorthSouth(value);
                break;
            case 'headdirection':
                setHeadDirection(value);
                break;
            case 'sex':
                setSex(value);
                break;
            case 'northsouth':
                setNorthSouth(value);
                break;
            case 'depth':
                setDepth(value);
                break;
            case 'eastwest':
                setEastWest(value);
                break;
            case 'adultsubadult':
                setAdultSubAdult(value);
                break;          
            case 'facebundles':
                setFaceBundles(value);
                break;
            case 'southtohead':
                setSouthToHead(value);
                break;
            case 'preservation':
                setPreservation(value);
                break;
            case 'fieldbookpage':
                setFieldbookPage(value);
                break;
            case 'squareeastwest':
                setSquareEastWest(value);
                break;
            case 'goods':
                setGoods(value);
                break;
            case 'text':
                setText(value);
                break;
            case 'wrapping':
                setWrapping(value);
                break;
            case 'haircolor':
                setHairColor(value);
                break;
            case 'westtohead':
                setWestToHead(value);
                break;
            case 'samplescollected':
                setSamplesCollected(value);
                break;
            case 'area':
                setArea(value);
                break;
            case 'burialid':
                setBurialID(value);
                break;
            case 'length':
                setLength(value);
                break;
            case 'burialnumber':
                setBurialNumber(value);
                break;
            case 'dataexpertinitials':
                setDataExpertInitials(value);
                break;
            case 'westtofeet':
                setWestToFeet(value);
                break;
            case 'ageatdeath':
                setAgeAtDeath(value);
                break;
            case 'southtofeet':
                setSouthToFeet(value);
                break;
            case 'excavationrecorder':
                setExcavationRecorder(value);
                break;
            case 'photos':
                setPhotos(value);
                break;
            case 'hair':
                setHair(value);
                break;
            case 'burialmaterial':
                setBurialMaterials(value);
                break;
            case 'dateofexcavation':
                setDateOfExcavation(value);
                break;
            case 'fieldbookexcavationyear':
                setFieldbookExcavationYear(value);
                break;
            case 'clusternumber':
                setClusterNumber(value);
                break;
            case 'shaftnumber':
                setShaftNumber(value);
                break;
            default:
                break;
        }
    };

    return (
        <Modal show={props.show} onHide={props.handleClose} backdrop="static">
            <Modal.Header className="ModalHeader">
            <Modal.Title>Add Burial Record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="AddBurialForm" onSubmit={handleSubmit}>
                    <label htmlFor="squarenorthsouth">Square North South</label>
                    <input type="input" value={squarenorthsouth} placeholder="A2" name="squarenorthsouth" id='squarenorthsouth'  autoFocus onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="headdirection">Head Direction</label>
                    <input type="input" value={headdirection} placeholder="E" name="headdirection" id='headdirection'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="sex">Sex</label>
                    <input type="radio" checked={sex === 'M'} id="male" name="sex" value="M" onChange={handleInputChange}/>
                    <label htmlFor="male">M</label>
                    <input type="radio" checked={sex === 'F'} id="female" name="sex" value="F" onChange={handleInputChange}/>
                    <label htmlFor="female">F</label>
                    <br></br>
                    <br></br>

                    <label htmlFor="northsouth">North South</label>
                    <input type="input" value={northsouth} placeholder="44.568" name="northsouth" id='northsouth'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="depth">Depth</label>
                    <input type="input" value={depth} placeholder="10" name="depth" id='depth'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="eastwest">East West</label>
                    <input type="input" value={eastwest} placeholder="22.346" name="eastwest" id='eastwest'  onChange={handleInputChange} />
                    <br></br>
                    <br></br>

                    <label htmlFor="adultsubadult">Adult/Child</label>
                    <input type="radio" checked={adultsubadult === 'Adult'} id="adult" name="adultsubadult" value="Adult" onChange={handleInputChange}/>
                    <label htmlFor="adult">Adult</label>
                    <input type="radio" checked={adultsubadult === 'Child'} id="child" name="adultsubadult" value="Child" onChange={handleInputChange}/>
                    <label htmlFor="child">Child</label>
                    <br></br>
                    <br></br>

                    <label htmlFor="facebundles">Face Bundles</label>
                    <input type="radio" checked={facebundles === 'Yes'} id="Yes" name="facebundles" value="Yes" onChange={handleInputChange}/>
                    <label htmlFor="Yes">Yes</label>
                    <input type="radio" checked={facebundles === 'No'} id="No" name="facebundles" value="No" onChange={handleInputChange}/>
                    <label htmlFor="No">No</label>
                    <br></br>
                    <br></br>

                    <label htmlFor="southtohead">South To Head</label>
                    <input type="input" value={southtohead} placeholder="2.1" name="southtohead" id='southtohead'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="preservation">Preservation</label>
                    <input type="input" value={preservation} placeholder="Fair" name="preservation" id='preservation'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="fieldbookpage">Field Book Page</label>
                    <input type="input" value={fieldbookpage} placeholder="123" name="fieldbookpage" id='fieldbookpage'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="squareeastwest">Square East West</label>
                    <input type="input" value={squareeastwest} placeholder="B2" name="squareeastwest" id='squareeastwest'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="goods">Goods</label>
                    <input type="input" value={goods} placeholder="knife" name="goods" id='goods'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} placeholder="notes" id="text" name="text" size="50"  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="wrapping">Wrapping</label>
                    <br></br>
                    <input type="radio" checked={wrapping === 'W'} id="W" name="wrapping" value="W" onChange={handleInputChange}/>
                    <label htmlFor="W">W</label><br></br>
                    <input type="radio" checked={wrapping === 'B'} id="B" name="wrapping" value="B" onChange={handleInputChange}/>
                    <label htmlFor="B">B</label><br></br>
                    <input type="radio" checked={wrapping === 'S'} id="S" name="wrapping" value="S" onChange={handleInputChange}/>
                    <label htmlFor="S">S</label><br></br>
                    <input type="radio" checked={wrapping === 'H'} id="H" name="wrapping" value="H" onChange={handleInputChange}/>
                    <label htmlFor="H">H</label><br></br>                 
                    <input type="radio" checked={wrapping === 'None'} id="None" name="wrapping" value="None" onChange={handleInputChange}/>
                    <label htmlFor="None">None</label>
                    <br></br>
                    <br></br>

                    <label htmlFor="haircolor">Hair Color</label>
                    <br></br>
                    <input type="radio" checked={haircolor === 'Y'} id="Y" name="haircolor" value="Y" onChange={handleInputChange}/>
                    <label htmlFor="Y">Y</label><br></br> 
                    <input type="radio" checked={haircolor === 'B'} id="B" name="haircolor" value="B" onChange={handleInputChange}/>
                    <label htmlFor="B">B</label><br></br> 
                    <input type="radio" checked={haircolor === 'R'} id="R" name="haircolor" value="R" onChange={handleInputChange}/>
                    <label htmlFor="R">R</label><br></br> 
                    <input type="radio" checked={haircolor === 'D'} id="D" name="haircolor" value="D" onChange={handleInputChange}/>
                    <label htmlFor="D">D</label><br></br>               
                    <input type="radio" checked={haircolor === 'A'} id="A" name="haircolor" value="A" onChange={handleInputChange}/>
                    <label htmlFor="A">A</label><br></br>  
                    <input type="radio" checked={haircolor === 'K'} id="K" name="haircolor" value="K" onChange={handleInputChange}/>
                    <label htmlFor="K">K</label><br></br> 
                    <input type="radio" checked={haircolor === 'Blonde'} id="Blonde" name="haircolor" value="Blonde" onChange={handleInputChange}/>
                    <label htmlFor="Blonde">Blonde</label><br></br> 
                    <input type="radio" checked={haircolor === 'T'} id="T" name="haircolor" value="T" onChange={handleInputChange}/>
                    <label htmlFor="T">T</label>
                    <br></br>                
                    <br></br>

                    <label htmlFor="westtohead">West To Head</label>
                    <input type="input" value={westtohead} placeholder="1.8" name="westtohead" id='westtohead'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>


                    <label htmlFor="samplescollected">Samples Collected</label>
                    <br></br>
                    <input type="radio" checked={samplescollected === 'Y'} id="Y" name="samplescollected" value="Y" onChange={handleInputChange}/>
                    <label htmlFor="Y">Y</label><br></br> 
                    <input type="radio" checked={samplescollected === 'N'} id="N" name="samplescollected" value="N" onChange={handleInputChange}/>
                    <label htmlFor="N">N</label><br></br> 
                    <input type="radio" checked={samplescollected === 'U'} id="U" name="samplescollected" value="U" onChange={handleInputChange}/>
                    <label htmlFor="U">U</label><br></br>
                    <br></br>
                    <br></br>

                    <label htmlFor="area">Area</label>
                    <input type="input" value={area} placeholder="NW" name="area" id='area'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="burialid">Burial ID</label>
                    <input type="input" value={burialid} placeholder="12315654231" name="burialid" id='burialid'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="length">Length</label>
                    <input type="input" value={length} placeholder="170" name="length" id='length'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="burialnumber">Burial Number</label>
                    <input type="input" value={burialnumber} placeholder="1" name="burialnumber" id='burialnumber'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="dataexpertinitials">Data Expert Initials</label>
                    <input type="input" value={dataexpertinitials} placeholder="AB" name="dataexpertinitials" id='dataexpertinitials'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="westtofeet">West To Feet</label>
                    <input type="input" value={westtofeet} placeholder="3.5" name="westtofeet" id='westtofeet'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="ageatdeath">Age At Death</label>
                    <input type="input" value={ageatdeath} placeholder="35" name="ageatdeath" id='ageatdeath'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="southtofeet">South To Feet</label>
                    <input type="input" value={southtofeet} placeholder="1.2" name="southtofeet" id='southtofeet'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="excavationrecorder">Excavation Recorder</label>
                    <input type="input" value={excavationrecorder} placeholder="John" name="excavationrecorder" id='excavationrecorder'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="photos">Photos</label>
                    <br></br>
                    <input type="radio" checked={photos === 'Yes'} id="Yes" name="photos" value="Yes" onChange={handleInputChange}/>
                    <label htmlFor="Yes">Yes</label>
                    <input type="radio" checked={photos === 'No'} id="No" name="photos" value="No" onChange={handleInputChange}/>
                    <label htmlFor="No">No</label>                    
                    <br></br>
                    <br></br>

                    <label htmlFor="hair">Hair</label>
                    <br></br>
                    <input type="radio" checked={hair === 'Short'} id="Short" name="hair" value="Short" onChange={handleInputChange}/>
                    <label htmlFor="Short">Short</label><br></br> 
                    <input type="radio" checked={hair === 'Long'} id="Long" name="hair" value="Long" onChange={handleInputChange}/>
                    <label htmlFor="Long">Long</label><br></br> 
                    <input type="radio" checked={hair === 'None'} id="None" name="hair" value="None" onChange={handleInputChange}/>
                    <label htmlFor="None">None</label>
                    <br></br>                    
                    <br></br>

                    <label htmlFor="burialmaterials">Burial Materials</label>
                    <input type="input" value={burialmaterials} placeholder="Gold" name="burialmaterials" id='burialmaterials' onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="dateofexcavation">Date Of Excavation</label>
                    <input type="date" value={dateofexcavation} name="dateofexcavation" id='dateofexcavation'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="fieldbookexcavationyear">Fieldbook Excavation Year</label>
                    <input type="input" value={fieldbookexcavationyear} placeholder="2023" name="fieldbookexcavationyear" id='fieldbookexcavationyear'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="clusternumber">Cluster Number</label>
                    <input type="input" value={clusternumber} placeholder="C-1" name="clusternumber" id='clusternumber'  onChange={handleInputChange}/>
                    <br></br>
                    <br></br>

                    <label htmlFor="shaftnumber">Shaft Number</label>
                    <input type="input" value={shaftnumber} placeholder="S-1" name="shaftnumber" id='shaftnumber'  onChange={handleInputChange}/>
                    <br></br>
                    <Button className="modalButton" variant="secondary" onClick={props.handleCloseAdd}>Close</Button>
                    <button type="submit" className="button-paper">Create</button>
                </form>
            </Modal.Body>
        </Modal>

    );
}

export default AddBurialRecord;