import React, { useState } from "react";

const SupervisedAnalysis = (props) => {
  //define all props
  const [depth, setDepth] = useState("");
  const [southtohead, setSouthToHead] = useState("");
  const [fieldbookpage, setFieldbookPage] = useState("");
  const [squareeastwest, setSquareEastWest] = useState("");
  const [westtohead, setWestToHead] = useState("");
  const [length, setLength] = useState("");
  const [burialnumber_x, setBurialNumber_x] = useState("");
  const [westtofeet, setWestToFeet] = useState("");
  const [southtofeet, setSouthToFeet] = useState("");
  const [clusternumber, setClusterNumber] = useState("");
  const [PreservationIndex, setPreservationIntex] = useState("");
  const [FemurLength, setFemurLength] = useState("");

  const [resultDisplay, setResultDisplay] = useState(null);

  const handleSubmit = (e, props) => {
    e.preventDefault();
    const requestBody = {
      data: [
        parseFloat(depth),
        parseFloat(southtohead),
        parseFloat(fieldbookpage),
        parseFloat(squareeastwest),
        parseFloat(westtohead),
        parseFloat(length),
        parseFloat(burialnumber_x),
        parseFloat(westtofeet),
        parseFloat(southtofeet),
        parseFloat(clusternumber),
        parseFloat(PreservationIndex),
        parseFloat(FemurLength),
      ],
    };

    const response = fetch("https://4-11modelapi.is404.net/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResultDisplay(data);
      })
      .catch((error) => {
        console.error("Error ", error);
      });
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    switch (name) {
      case "depth":
        setDepth(value);
        break;
      case "southtohead":
        setSouthToHead(value);
        break;
      case "fieldbookpage":
        setFieldbookPage(value);
        break;
      case "squareeastwest":
        setSquareEastWest(value);
        break;
      case "westtohead":
        setWestToHead(value);
        break;
      case "length":
        setLength(value);
        break;
      case "burialnumber_x":
        setBurialNumber_x(value);
        break;
      case "westtofeet":
        setWestToFeet(value);
        break;
      case "southtofeet":
        setSouthToFeet(value);
        break;
      case "clusternumber":
        setClusterNumber(value);
        break;
      case "PreservationIndex":
        setPreservationIntex(value);
        break;
      case "FemurLength":
        setFemurLength(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <form className="FilterForm" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="depth">Depth</label>
          <input
            type="number"
            value={depth}
            name="depth"
            id="depth"
            onChange={handleInputChange}
          />
          <div className="line"></div>
        </div>
        <div className="field">
          <label htmlFor="southtohead">South To End</label>
          <input
            type="number"
            value={southtohead}
            name="southtohead"
            id="southtohead"
            onChange={handleInputChange}
          />
          <div className="line"></div>
        </div>
        <div className="field">
          <label htmlFor="fieldbookpage">Fieldbook Page</label>
          <input
            type="number"
            value={fieldbookpage}
            name="fieldbookpage"
            id="fieldbookpage"
            onChange={handleInputChange}
          />
          <div className="line"></div>
        </div>
        <div className="field">
          <label htmlFor="squareeastwest">Square East West</label>
          <input
            type="number"
            value={squareeastwest}
            name="squareeastwest"
            id="squareeastwest"
            onChange={handleInputChange}
          />
          <div className="line"></div>
        </div>
        <div className="field">
          <label htmlFor="westtohead">West To Head</label>
          <input
            type="number"
            value={westtohead}
            name="westtohead"
            id="westtohead"
            onChange={handleInputChange}
          />
          <div className="line"></div>
        </div>
        <div className="field">
          <label htmlFor="length">Length</label>
          <input
            type="number"
            value={length}
            name="length"
            id="length"
            onChange={handleInputChange}
          />
          <div className="line"></div>
        </div>
        <div className="field">
          <label htmlFor="burialnumber_x">Burial Number</label>
          <input
            type="number"
            value={burialnumber_x}
            name="burialnumber_x"
            id="burialnumber_x"
            onChange={handleInputChange}
          />
          <div className="line"></div>
        </div>
        <div className="field">
          <label htmlFor="westtofeet">West To Feet</label>
          <input
            type="number"
            value={westtofeet}
            name="westtofeet"
            id="westtofeet"
            onChange={handleInputChange}
          />
          <div className="line"></div>
        </div>
        <div className="field">
          <label htmlFor="southtofeet">South To Feet</label>
          <input
            type="number"
            value={southtofeet}
            name="southtofeet"
            id="southtofeet"
            onChange={handleInputChange}
          />
          <div className="line"></div>
        </div>
        <div className="field">
          <label htmlFor="clusternumber">Cluster Number</label>
          <input
            type="number"
            value={clusternumber}
            name="clusternumber"
            id="clusternumber"
            onChange={handleInputChange}
          />
          <div className="line"></div>
        </div>
        <div className="field">
          <label htmlFor="PreservationIndex">Preservation Index</label>
          <input
            type="number"
            value={PreservationIndex}
            name="PreservationIndex"
            id="PreservationIndex"
            onChange={handleInputChange}
          />
          <div className="line"></div>
        </div>
        <div className="field">
          <label htmlFor="FemurLength">Femur Length</label>
          <input
            type="number"
            value={FemurLength}
            name="FemurLength"
            id="FemurLength"
            onChange={handleInputChange}
          />
          <div className="line"></div>
        </div>
        <br></br>
        <br></br>
        <button className="button" type="submit">
          Look up
          <div className="button__horizontal"></div>
          <div className="button__vertical"></div>
        </button>
      </form>
      <div className="result">
        {resultDisplay && (
          <div>
            <p>Result:</p>
            <pre>{resultDisplay.prediction}</pre>
          </div>
        )}
      </div>
    </>
  );
};

export default SupervisedAnalysis;
