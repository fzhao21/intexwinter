import React, { useEffect, useState } from 'react'
import EditBurialRecord from '../Modal/EditBurialRecord';
import AddBurialRecord from '../Modal/AddBurialRecord';
import addBurialButton from '../img/AddRecordIcon.png'
import ReactPaginate from 'react-paginate';
import { Table } from 'react-bootstrap';


const Summary = () => {
      
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [item, setItem] = useState([]);
    const [id, setID] = useState('')

    
    // const pagesVisited = currentPage * itemsPerPage;
    
    const [modalAddOpen, setModalAddOpen] = useState(false);
    const [modalEditOpen, setModalEditOpen] = useState(false);

    const handleOpenModalAdd = () => {
        setModalAddOpen(true);
      };
    
    const handleCloseModalAdd = () => {
      setModalAddOpen(false);
      setCurrentPage(0)
    };
  
    const handleOpenModalEdit = () => {
      setModalEditOpen(true);
    };
  
    const handleCloseModalEdit = () => {
      setModalEditOpen(false);
      setCurrentPage(0)
    };

    const handleDelete = (id) => {
      const requestBody = {
        'id': id,
      };

      const response = fetch('https://7o71cponk0.execute-api.us-west-1.amazonaws.com/data/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      }).then(response =>response.json()).then(data => {
          console.log('Success:', data);
      })
      .catch((error) => {
          console.error('Error', error, data);
      });
      console.log(requestBody)
    };


    useEffect(() => {
      setData([])
      async function fetchData() {
        try {
          const response = await fetch('https://7o71cponk0.execute-api.us-west-1.amazonaws.com/data/all');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, [currentPage]);

    const uniqueData = Array.from(new Set(data.map((item) => item.id))).map(
      (id) => {
        return data.find((item) => item.id === id);
      }
    );

    const pageCount = Math.ceil(uniqueData.length / itemsPerPage);

    const displayData = uniqueData
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
        <td style={{ color: item.composite_ID === null ? 'lightgrey' : 'black' }}>{item.composite_ID || 'N/A'}</td>
        <td style={{ color: item.color_value === null ? 'lightgrey' : 'black' }}>{item.color_value || 'N/A'}</td>
        <td style={{ color: item.structure_value === null ? 'lightgrey' : 'black' }}>{item.structure_value || 'N/A'}</td>
        <td style={{ color: item.textilefunction_value === null ? 'lightgrey' : 'black' }}>{item.textilefunction_value || 'N/A'}</td>
        <td>
          <button className="button" onClick={handleOpenModalEdit}>
            Edit 
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>
        </td>
        <td>
          <button className="button" onClick={() => handleDelete(item.id)}>
            Delete 
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>
        </td>
      </tr>
    ));
    
    const handlePageClick = ({ selected }) => {
      const currentPage = selected + 1;
      setCurrentPage(currentPage);
    };

    return(
        <> 
          <Table className="BurialTable" striped bordered hover>
            <thead className="BurialTableHead">
              <tr>
                <th>ID</th>
                <th>Head Direction</th>
                <th>Sex</th>
                <th>Age at Death</th>
                <th>Estimated Stature</th>
                <th>Hair Color</th>
                <th>Depth</th>
                <th>Composite_ID</th>
                <th>Textile Value</th>
                <th>Texile Structure</th>
                <th>Textile Function</th>
                <th className="editColumn">Edit</th>
                <th className="editColumn">Delete</th>
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
            <button className="button" onClick={handleOpenModalAdd}>
                Add Burial Record
                <div className="button__horizontal"></div>
                <div className="button__vertical"></div>
                <img src={addBurialButton}></img>
            </button>
            <br></br>
            <AddBurialRecord show={modalAddOpen} handleCloseAdd={handleCloseModalAdd} />
            <EditBurialRecord show={modalEditOpen} handleCloseEdit={handleCloseModalEdit} />
        </>
    )
}

export default Summary;