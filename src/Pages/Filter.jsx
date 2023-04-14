import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import { Table } from 'react-bootstrap';

const Filter = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [tableDisplayData, SetTableDisplayData] = useState([])
  const [pageCountDisplay, setPageCountDisplay] = useState(0)
  const [filters, setFilters] = useState({
    id: '',
    headdirection: '',
    sex: '',
    ageatdeath: '',
    estimatedStature: '',
    haircolor: '',
    depth: '',
    burialid: '',
    color_value: '',
    structure_value: '',
    textilefunction_value: '',
  });

  // useEffect(() => {
  //   fetchData()
  // }, []);

  const fetchData =  () => {
    fetch('https://7o71cponk0.execute-api.us-west-1.amazonaws.com/data/all')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error', error));
  };

  const handlePageClick = ({ selected }) => {
    const currentPage = selected + 1;
    setCurrentPage(currentPage);
  };

  const handleFilterChange = (event, columnName) => {
    const newFilters = { ...filters };
    newFilters[columnName] = event.target.value;
    setFilters(newFilters);
  };

  const handleFilterSubmit = () => {
    fetchData();
  };

  const uniqueData = Array.from(new Set(data.map((item) => item.id))).map(
    (id) => {
      return data.find((item) => item.id === id);
    }
  );

  const newFilteredData = uniqueData.filter((item) => {
    let includeItem = true;
    Object.keys(filters).forEach((columnName) => {
      const filterValue = filters[columnName];
      if (filterValue.trim() !== "" && item[columnName] !== filterValue) {
        includeItem = false;
      }
    });
    return includeItem;
  });

  const pageCount = Math.ceil(newFilteredData.length / itemsPerPage);


  const displayData = newFilteredData
  .slice((currentPage-1)*itemsPerPage, currentPage * itemsPerPage)
  .map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td style={{ color: item.headdirection === null ? 'lightgrey' : 'black' }}>{item.headdirection || 'N/A'}</td>
      <td style={{ color: item.sex === null ? 'lightgrey' : 'black' }}>{item.sex || 'N/A'}</td>
      <td style={{ color: item.ageatdeath === null ? 'lightgrey' : 'black' }}>{item.ageatdeath || 'N/A'}</td>
      <td style={{ color: item.estimateStature === null ? 'lightgrey' : 'black' }}>{item.estimateStature || 'N/A'}</td>
      <td style={{ color: item.haircolor === null ? 'lightgrey' : 'black' }}>{item.haircolor || 'N/A'}</td>
      <td style={{ color: item.depth === null ? 'lightgrey' : 'black' }}>{item.depth || 'N/A'}</td>
      <td style={{ color: item.burialid === null ? 'lightgrey' : 'black' }}>{item.burialid || 'N/A'}</td>
      <td style={{ color: item.color_value === null ? 'lightgrey' : 'black' }}>{item.color_value || 'N/A'}</td>
      <td style={{ color: item.structure_value === null ? 'lightgrey' : 'black' }}>{item.structure_value || 'N/A'}</td>
      <td style={{ color: item.textilefunction_value === null ? 'lightgrey' : 'black' }}>{item.textilefunction_value || 'N/A'}</td>
    </tr>
  ));

  return (
    <div className="scroll">
      <div className="FilterForm">
        <div className="field">
          <input
            type="text"
            value={filters.id}
            placeholder="ID"
            onChange={(event) => handleFilterChange(event, "id")}
          />
          <div className="line"></div>
          <button className="button" onClick={handleFilterSubmit}>
            Filter ID 
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Head Direction"
            value={filters.headdirection}
            onChange={(event) => handleFilterChange(event, "headdirection")}
          />
          <div className="line"></div>
          <button className="button" onClick={handleFilterSubmit}>
            Filter Head Direction 
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Sex"
            value={filters.sex}
            onChange={(event) => handleFilterChange(event, "sex")}
          />
          <div className="line"></div>
          <button className="button" onClick={handleFilterSubmit}>
            Filter Sex 
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>        
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Age at Death"
            value={filters.ageatdeath}
            onChange={(event) => handleFilterChange(event, "ageatdeath")}
          />
          <div className="line"></div>
          <button className="button" onClick={handleFilterSubmit}>
            Filter Age at Death 
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button> 
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Estimated Stature"
            value={filters.estimatedStature}
            onChange={(event) => handleFilterChange(event, "estimatedStature")}
          />
          <div className="line"></div>
          <button className="button" onClick={handleFilterSubmit}>
            Filter Estimated Stature 
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>         
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Hair Color"
            value={filters.haircolor}
            onChange={(event) => handleFilterChange(event, "haircolor")}
          />
          <div className="line"></div>
          <button className="button" onClick={handleFilterSubmit}>
            Filter Hair Color 
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button> 
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Depth"
            value={filters.depth}
            onChange={(event) => handleFilterChange(event, "depth")}
          />
          <div className="line"></div>
          <button className="button" onClick={handleFilterSubmit}>
            Filter Depth 
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button> 
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Burial ID"
            value={filters.burialid}
            onChange={(event) => handleFilterChange(event, "burialid")}
          />
          <div className="line"></div>
          <button className="button" onClick={handleFilterSubmit}>
            Filter Burial ID 
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button> 
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Color Value"
            value={filters.color_value}
            onChange={(event) => handleFilterChange(event, "color_value")}
          />
          <div className="line"></div>
          <button className="button" onClick={handleFilterSubmit}>
            Filter Color Value 
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button> 
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Textile Structure"
            value={filters.structure_value}
            onChange={(event) => handleFilterChange(event, "structure_value")}
          />
          <div className="line"></div>
          <button className="button" onClick={handleFilterSubmit}>
            Filter Textile Structure
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button> 
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Textile Function"
            value={filters.textilefunction_value}
            onChange={(event) => handleFilterChange(event, "textilefunction_value")}
          />
          <div className="line"></div>
          <button className="button" onClick={handleFilterSubmit}>
            Filter Textile Function 
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button> 
        </div>
      </div>
      <div style={{ width: "100%", overflowX: "auto", overflowY: "scroll" }} className="FilterTable"> 
          <Table className="BurialTable" striped bordered hover>
            <thead className="BurialTableHead">
              <tr>
                <th style={{ width: "calc(0.9*100vw) !important"}}>
                  ID<br></br>
                </th>
                <th style={{ width: "calc(0.9*100vw) !important"}}>
                  Head Direction<br></br>
                </th>
                <th style={{ width: "calc(0.6*100vw) !important"}}>
                  Sex<br></br>
                </th>
                <th style={{ width: "calc(0.8*100vw) !important"}}>
                  Age at Death<br></br>
                </th>
                <th style={{ width: "calc(0.8*100vw) !important"}}>
                  Estimated Stature<br></br>
                </th>
                <th style={{ width: "calc(0.8*100vw) !important"}}>
                  Hair Color<br></br>
                </th>
                <th style={{ width: "calc(0.8*100vw) !important"}}>
                  Depth<br></br>
                </th>
                <th style={{ width: "calc(0.8*100vw) !important"}}>
                  Burial ID<br></br>
                </th>
                <th style={{ width: "calc(0.8*100vw) !important"}}>
                  Color Value<br></br>
                </th>
                <th style={{ width: "calc(0.8*100vw) !important"}}>
                  Texile Structure<br></br>
                </th>
                <th style={{ width: "calc(0.8*100vw) !important"}}>
                  Textile Function<br></br>
                </th>
              </tr>
            </thead>
            <tbody className="BurialData">{displayData}</tbody>
          </Table>
          <ReactPaginate
            className='pagination'
            previousLabel="Previous"
            nextLabel="Next"
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            previousClassName="pagination__prev"
            nextClassName="pagination__next"
            disabledClassName="pagination__disabled"
            activeClassName="pagination__active"
            marginPagesDisplayed={5}
            pageRangeDisplayed={2}
          />
        </div>
    </div>
  );
};

export default Filter;
