import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditBurialRecord = (props) => {
  const { updateItem } = props;

  const [id, setID] = useState(0);
  const [squarenorthsouth, setSquareNorthSouth] = useState("");
  const [headdirection, setHeadDirection] = useState("");
  const [sex, setSex] = useState("");
  const [northsouth, setNorthSouth] = useState("");
  const [depth, setDepth] = useState("");
  const [eastwest, setEastWest] = useState("");
  const [adultsubadult, setAdultSubAdult] = useState("");
  const [facebundles, setFaceBundles] = useState("");
  const [southtohead, setSouthToHead] = useState("");
  const [preservation, setPreservation] = useState("");
  const [fieldbookpage, setFieldbookPage] = useState("");
  const [squareeastwest, setSquareEastWest] = useState("");
  const [goods, setGoods] = useState("");
  const [text, setText] = useState("");
  const [wrapping, setWrapping] = useState("");
  const [haircolor, setHairColor] = useState("");
  const [westtohead, setWestToHead] = useState("");
  const [samplescollected, setSamplesCollected] = useState("");
  const [area, setArea] = useState("");
  const [burialid, setBurialID] = useState("");
  const [length, setLength] = useState("");
  const [burialnumber, setBurialNumber] = useState("");
  const [dataexpertinitials, setDataExpertInitials] = useState("");
  const [westtofeet, setWestToFeet] = useState("");
  const [ageatdeath, setAgeAtDeath] = useState("");
  const [southtofeet, setSouthToFeet] = useState("");
  const [excavationrecorder, setExcavationRecorder] = useState("");
  const [photos, setPhotos] = useState("");
  const [hair, setHair] = useState("");
  const [burialmaterials, setBurialMaterials] = useState("");
  const [dateofexcavation, setDateOfExcavation] = useState(new Date());
  const [fieldbookexcavationyear, setFieldbookExcavationYear] = useState("");
  const [clusternumber, setClusterNumber] = useState("");
  const [shaftnumber, setShaftNumber] = useState("");

  // useEffect(() => {
  //     fetchData();
  //   }, []);

  // const fetchData = async () => {
  //     const response = await fetch('https://7o71cponk0.execute-api.us-west-1.amazonaws.com/data/all');
  //     const json = await response.json();
  //     setNewData(json);
  // };

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    switch (name) {
      case "squarenorthsouth":
        setSquareNorthSouth(value);
        break;
      case "headdirection":
        setHeadDirection(value);
        break;
      case "sex":
        setSex(value);
        break;
      case "northsouth":
        setNorthSouth(value);
        break;
      case "depth":
        setDepth(value);
        break;
      case "eastwest":
        setEastWest(value);
        break;
      case "adultsubadult":
        setAdultSubAdult(value);
        break;
      case "facebundles":
        setFaceBundles(value);
        break;
      case "southtohead":
        setSouthToHead(value);
        break;
      case "preservation":
        setPreservation(value);
        break;
      case "fieldbookpage":
        setFieldbookPage(value);
        break;
      case "squareeastwest":
        setSquareEastWest(value);
        break;
      case "goods":
        setGoods(value);
        break;
      case "text":
        setText(value);
        break;
      case "wrapping":
        setWrapping(value);
        break;
      case "haircolor":
        setHairColor(value);
        break;
      case "westtohead":
        setWestToHead(value);
        break;
      case "samplescollected":
        setSamplesCollected(value);
        break;
      case "area":
        setArea(value);
        break;
      case "burialid":
        setBurialID(value);
        break;
      case "length":
        setLength(value);
        break;
      case "burialnumber":
        setBurialNumber(value);
        break;
      case "dataexpertinitials":
        setDataExpertInitials(value);
        break;
      case "westtofeet":
        setWestToFeet(value);
        break;
      case "ageatdeath":
        setAgeAtDeath(value);
        break;
      case "southtofeet":
        setSouthToFeet(value);
        break;
      case "excavationrecorder":
        setExcavationRecorder(value);
        break;
      case "photos":
        setPhotos(value);
        break;
      case "hair":
        setHair(value);
        break;
      case "burialmaterial":
        setBurialMaterials(value);
        break;
      case "dateofexcavation":
        setDateOfExcavation(value);
        break;
      case "fieldbookexcavationyear":
        setFieldbookExcavationYear(value);
        break;
      case "clusternumber":
        setClusterNumber(value);
        break;
      case "shaftnumber":
        setShaftNumber(value);
        break;
      default:
        break;
    }
  };

  //called to submit to API
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      id: id,
      squarenorthsouth: String(squarenorthsouth),
      headdirection: String(headdirection),
      sex: String(sex),
      northsouth: String(northsouth),
      depth: String(depth),
      eastwest: String(eastwest),
      adultsubadult: String(adultsubadult),
      facebundles: String(facebundles),
      southtohead: String(southtohead),
      preservation: String(preservation),
      fieldbookpage: String(fieldbookpage),
      squareeastwest: String(squareeastwest),
      goods: String(goods),
      text: String(text),
      wrapping: String(wrapping),
      haircolor: String(haircolor),
      westtohead: String(westtohead),
      samplescollected: String(samplescollected),
      area: String(area),
      burialid: String(burialid),
      length: String(length),
      burialnumber: String(burialnumber),
      dataexpertinitials: String(dataexpertinitials),
      westtofeet: String(westtofeet),
      ageatdeath: String(ageatdeath),
      southtofeet: String(southtofeet),
      excavationrecorder: String(excavationrecorder),
      photos: String(photos),
      hair: String(hair),
      burialmaterials: String(burialmaterials),
      dateofexcavation: dateofexcavation,
      fieldbookexcavationyear: String(fieldbookexcavationyear),
      clusternumber: String(clusternumber),
      shaftnumber: String(shaftnumber),
      updatedBurial: "",
    };

    const response = fetch(
      "https://7o71cponk0.execute-api.us-west-1.amazonaws.com/data/update",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error", error);
      });

    // if (response) {
    //     fetchData();
    //     onUpdate({newData});
    // } else {
    //     // handle error
    // }
    {
      props.handleCloseEdit();
    }
  };

  useEffect(() => {
    if (props.show) {
      setID(updateItem.id);
      setSquareNorthSouth(updateItem.squarenorthsouth);
      setHeadDirection(updateItem.headdirection);
      setSex(updateItem.sex);
      setNorthSouth(updateItem.northsouth);
      setDepth(updateItem.depth);
      setEastWest(updateItem.eastwest);
      setAdultSubAdult(updateItem.adultsubadult);
      setFaceBundles(updateItem.facebundles);
      setSouthToHead(updateItem.southtohead);
      setPreservation(updateItem.preservation);
      setFieldbookPage(updateItem.fieldbookpage);
      setSquareEastWest(updateItem.squareeastwest);
      setGoods(updateItem.goods);
      setText(updateItem.text);
      setWrapping(updateItem.wrapping);
      setHairColor(updateItem.haircolor);
      setWestToHead(updateItem.westtohead);
      setSamplesCollected(updateItem.samplescollected);
      setArea(updateItem.area);
      setBurialID(updateItem.burialid);
      setLength(updateItem.length);
      setBurialNumber(updateItem.burialnumber);
      setDataExpertInitials(updateItem.dataexpertinitials);
      setWestToFeet(updateItem.westtofeet);
      setAgeAtDeath(updateItem.ageatdeath);
      setSouthToFeet(updateItem.southtofeet);
      setExcavationRecorder(updateItem.excavationrecorder);
      setPhotos(updateItem.photos);
      setHair(updateItem.hair);
      setBurialMaterials(updateItem.burialmaterials);
      setDateOfExcavation(new Date(updateItem.dateofexcavation));
      setFieldbookExcavationYear(updateItem.fieldbookexcavationyear);
      setClusterNumber(updateItem.clusternumber);
      setShaftNumber(updateItem.shaftnumber);
    }
  }, [props.show]);
  // , squarenorthsouth, headdirection, sex, northsouth, depth, eastwest,
  // adultsubadult, facebundles, southtohead, preservation, fieldbookpage, squareeastwest, goods, text,
  // wrapping, haircolor, westtohead, samplescollected, area, burialid, length,
  // burialnumber, dataexpertinitials, westtofeet, ageatdeath, southtofeet, excavationrecorder,
  // photos, hair, burialmaterials, dateofexcavation, fieldbookexcavationyear,
  // clusternumber,shaftnumber]);

  return (
    <Modal show={props.show} onHide={props.handleClose} backdrop="static">
      <Modal.Header className="ModalHeader">
        <Modal.Title>Edit Burial Record</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form className="AddBurialForm" onSubmit={handleSubmit}>
          <input type="hidden" name="id" value={id} />
          <label htmlFor="squarenorthsouth">Square North South</label>
          <input
            type="input"
            value={squarenorthsouth}
            placeholder="A2"
            name="squarenorthsouth"
            id="squarenorthsouth"
            autoFocus
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="headdirection">Head Direction</label>
          <input
            type="input"
            value={headdirection}
            placeholder="E"
            name="headdirection"
            id="headdirection"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="sex">Sex</label>
          <input
            type="radio"
            checked={sex === "M"}
            id="male"
            name="sex"
            value="M"
            onChange={handleInputChange}
          />
          <label htmlFor="male">M</label>
          <input
            type="radio"
            checked={sex === "F"}
            id="female"
            name="sex"
            value="F"
            onChange={handleInputChange}
          />
          <label htmlFor="female">F</label>
          <br></br>
          <br></br>

          <label htmlFor="northsouth">North South</label>
          <input
            type="input"
            value={northsouth}
            placeholder="44.568"
            name="northsouth"
            id="northsouth"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="depth">Depth</label>
          <input
            type="input"
            value={depth}
            placeholder="10"
            name="depth"
            id="depth"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="eastwest">East West</label>
          <input
            type="input"
            value={eastwest}
            placeholder="22.346"
            name="eastwest"
            id="eastwest"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="adultsubadult">Adult/Child</label>
          <input
            type="radio"
            checked={adultsubadult === "Adult"}
            id="adult"
            name="adultsubadult"
            value="Adult"
            onChange={handleInputChange}
          />
          <label htmlFor="adult">Adult</label>
          <input
            type="radio"
            checked={adultsubadult === "Child"}
            id="child"
            name="adultsubadult"
            value="Child"
            onChange={handleInputChange}
          />
          <label htmlFor="child">Child</label>
          <br></br>
          <br></br>

          <label htmlFor="facebundles">Face Bundles</label>
          <input
            type="radio"
            checked={facebundles === "Yes"}
            id="Yes"
            name="facebundles"
            value="Yes"
            onChange={handleInputChange}
          />
          <label htmlFor="Yes">Yes</label>
          <input
            type="radio"
            checked={facebundles === "No"}
            id="No"
            name="facebundles"
            value="No"
            onChange={handleInputChange}
          />
          <label htmlFor="No">No</label>
          <br></br>
          <br></br>

          <label htmlFor="southtohead">South To Head</label>
          <input
            type="input"
            value={southtohead}
            placeholder="2.1"
            name="southtohead"
            id="southtohead"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="preservation">Preservation</label>
          <input
            type="input"
            value={preservation}
            placeholder="Fair"
            name="preservation"
            id="preservation"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="fieldbookpage">Field Book Page</label>
          <input
            type="input"
            value={fieldbookpage}
            placeholder="123"
            name="fieldbookpage"
            id="fieldbookpage"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="squareeastwest">Square East West</label>
          <input
            type="input"
            value={squareeastwest}
            placeholder="B2"
            name="squareeastwest"
            id="squareeastwest"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="goods">Goods</label>
          <input
            type="input"
            value={goods}
            placeholder="knife"
            name="goods"
            id="goods"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            placeholder="notes"
            id="text"
            name="text"
            size="50"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="wrapping">Wrapping</label>
          <br></br>
          <input
            type="radio"
            checked={wrapping === "W"}
            id="W"
            name="wrapping"
            value="W"
            onChange={handleInputChange}
          />
          <label htmlFor="W">W</label>
          <br></br>
          <input
            type="radio"
            checked={wrapping === "B"}
            id="B"
            name="wrapping"
            value="B"
            onChange={handleInputChange}
          />
          <label htmlFor="B">B</label>
          <br></br>
          <input
            type="radio"
            checked={wrapping === "S"}
            id="S"
            name="wrapping"
            value="S"
            onChange={handleInputChange}
          />
          <label htmlFor="S">S</label>
          <br></br>
          <input
            type="radio"
            checked={wrapping === "H"}
            id="H"
            name="wrapping"
            value="H"
            onChange={handleInputChange}
          />
          <label htmlFor="H">H</label>
          <br></br>
          <input
            type="radio"
            checked={wrapping === "None"}
            id="None"
            name="wrapping"
            value="None"
            onChange={handleInputChange}
          />
          <label htmlFor="None">None</label>
          <br></br>
          <br></br>

          <label htmlFor="haircolor">Hair Color</label>
          <br></br>
          <input
            type="radio"
            checked={haircolor === "Y"}
            id="Y"
            name="haircolor"
            value="Y"
            onChange={handleInputChange}
          />
          <label htmlFor="Y">Y</label>
          <br></br>
          <input
            type="radio"
            checked={haircolor === "B"}
            id="B"
            name="haircolor"
            value="B"
            onChange={handleInputChange}
          />
          <label htmlFor="B">B</label>
          <br></br>
          <input
            type="radio"
            checked={haircolor === "R"}
            id="R"
            name="haircolor"
            value="R"
            onChange={handleInputChange}
          />
          <label htmlFor="R">R</label>
          <br></br>
          <input
            type="radio"
            checked={haircolor === "D"}
            id="D"
            name="haircolor"
            value="D"
            onChange={handleInputChange}
          />
          <label htmlFor="D">D</label>
          <br></br>
          <input
            type="radio"
            checked={haircolor === "A"}
            id="A"
            name="haircolor"
            value="A"
            onChange={handleInputChange}
          />
          <label htmlFor="A">A</label>
          <br></br>
          <input
            type="radio"
            checked={haircolor === "K"}
            id="K"
            name="haircolor"
            value="K"
            onChange={handleInputChange}
          />
          <label htmlFor="K">K</label>
          <br></br>
          <input
            type="radio"
            checked={haircolor === "Blonde"}
            id="Blonde"
            name="haircolor"
            value="Blonde"
            onChange={handleInputChange}
          />
          <label htmlFor="Blonde">Blonde</label>
          <br></br>
          <input
            type="radio"
            checked={haircolor === "T"}
            id="T"
            name="haircolor"
            value="T"
            onChange={handleInputChange}
          />
          <label htmlFor="T">T</label>
          <br></br>
          <br></br>

          <label htmlFor="westtohead">West To Head</label>
          <input
            type="input"
            value={westtohead}
            placeholder="1.8"
            name="westtohead"
            id="westtohead"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="samplescollected">Samples Collected</label>
          <br></br>
          <input
            type="radio"
            checked={samplescollected === "Y"}
            id="Y"
            name="samplescollected"
            value="Y"
            onChange={handleInputChange}
          />
          <label htmlFor="Y">Y</label>
          <br></br>
          <input
            type="radio"
            checked={samplescollected === "N"}
            id="N"
            name="samplescollected"
            value="N"
            onChange={handleInputChange}
          />
          <label htmlFor="N">N</label>
          <br></br>
          <input
            type="radio"
            checked={samplescollected === "U"}
            id="U"
            name="samplescollected"
            value="U"
            onChange={handleInputChange}
          />
          <label htmlFor="U">U</label>
          <br></br>
          <br></br>
          <br></br>

          <label htmlFor="area">Area</label>
          <input
            type="input"
            value={area}
            placeholder="NW"
            name="area"
            id="area"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="burialid">Burial ID</label>
          <input
            type="input"
            value={burialid}
            placeholder="12315654231"
            name="burialid"
            id="burialid"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="length">Length</label>
          <input
            type="input"
            value={length}
            placeholder="170"
            name="length"
            id="length"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="burialnumber">Burial Number</label>
          <input
            type="input"
            value={burialnumber}
            placeholder="1"
            name="burialnumber"
            id="burialnumber"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="dataexpertinitials">Data Expert Initials</label>
          <input
            type="input"
            value={dataexpertinitials}
            placeholder="AB"
            name="dataexpertinitials"
            id="dataexpertinitials"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="westtofeet">West To Feet</label>
          <input
            type="input"
            value={westtofeet}
            placeholder="3.5"
            name="westtofeet"
            id="westtofeet"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="ageatdeath">Age At Death</label>
          <input
            type="input"
            value={ageatdeath}
            placeholder="35"
            name="ageatdeath"
            id="ageatdeath"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="southtofeet">South To Feet</label>
          <input
            type="input"
            value={southtofeet}
            placeholder="1.2"
            name="southtofeet"
            id="southtofeet"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="excavationrecorder">Excavation Recorder</label>
          <input
            type="input"
            value={excavationrecorder}
            placeholder="John"
            name="excavationrecorder"
            id="excavationrecorder"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="photos">Photos</label>
          <br></br>
          <input
            type="radio"
            checked={photos === "Yes"}
            id="Yes"
            name="photos"
            value="Yes"
            onChange={handleInputChange}
          />
          <label htmlFor="Yes">Yes</label>
          <input
            type="radio"
            checked={photos === "No"}
            id="No"
            name="photos"
            value="No"
            onChange={handleInputChange}
          />
          <label htmlFor="No">No</label>
          <br></br>
          <br></br>

          <label htmlFor="hair">Hair</label>
          <br></br>
          <input
            type="radio"
            checked={hair === "Short"}
            id="Short"
            name="hair"
            value="Short"
            onChange={handleInputChange}
          />
          <label htmlFor="Short">Short</label>
          <br></br>
          <input
            type="radio"
            checked={hair === "Long"}
            id="Long"
            name="hair"
            value="Long"
            onChange={handleInputChange}
          />
          <label htmlFor="Long">Long</label>
          <br></br>
          <input
            type="radio"
            checked={hair === "None"}
            id="None"
            name="hair"
            value="None"
            onChange={handleInputChange}
          />
          <label htmlFor="None">None</label>
          <br></br>
          <br></br>

          <label htmlFor="burialmaterials">Burial Materials</label>
          <input
            type="input"
            value={burialmaterials}
            placeholder="Gold"
            name="burialmaterials"
            id="burialmaterials"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="dateofexcavation">Date Of Excavation</label>
          <input
            type="date"
            value={dateofexcavation.toISOString().substr(0, 10)}
            name="dateofexcavation"
            id="dateofexcavation"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="fieldbookexcavationyear">
            Fieldbook Excavation Year
          </label>
          <input
            type="input"
            value={fieldbookexcavationyear}
            placeholder="2023"
            name="fieldbookexcavationyear"
            id="fieldbookexcavationyear"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="clusternumber">Cluster Number</label>
          <input
            type="input"
            value={clusternumber}
            placeholder="C-1"
            name="clusternumber"
            id="clusternumber"
            onChange={handleInputChange}
          />
          <br></br>
          <br></br>

          <label htmlFor="shaftnumber">Shaft Number</label>
          <input
            type="input"
            value={shaftnumber}
            placeholder="S-1"
            name="shaftnumber"
            id="shaftnumber"
            onChange={handleInputChange}
          />
          <br></br>
          <Button variant="secondary" onClick={props.handleCloseEdit}>
            Close
          </Button>
          <button type="submit" className="button-paper">
            Save
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditBurialRecord;
