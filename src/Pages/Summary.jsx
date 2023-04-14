import React, { useEffect, useState, useMemo } from "react";
import EditBurialRecord from "../Modal/EditBurialRecord";
import AddBurialRecord from "../Modal/AddBurialRecord";
import addBurialButton from "../img/AddRecordIcon.png";
import ReactPaginate from "react-paginate";
import { Table } from "react-bootstrap";

const Summary = ({ authenticated }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [updateItem, setUpdateItem] = useState([]);
  const [modalAddOpen, setModalAddOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [deleteFlag, setDeleteFlag] = useState(false);

  console.log(authenticated);

  const handleOpenModalAdd = () => {
    setModalAddOpen(true);
  };

  const handleCloseModalAdd = () => {
    setModalAddOpen(false);
    setCurrentPage(0);
  };

  const handleOpenModalEdit = (id) => {
    setModalEditOpen(true);
    const d = data.find((item) => item.id === id);
    const dJSON = JSON.parse(JSON.stringify(d));
    setUpdateItem(dJSON);
  };

  const handleCloseModalEdit = () => {
    setModalEditOpen(false);
    setCurrentPage(0);
  };

  const handleDelete = (id, data) => {
    const requestBody = {
      id: id,
    };

    fetch(
      "https://7o71cponk0.execute-api.us-west-1.amazonaws.com/data/delete",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        fetchData();
      })
      .catch((error) => {
        console.error("Error", error, data);
      });
    console.log(requestBody);
    setCurrentPage(1);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, deleteFlag]);

  useEffect(() => {
    if (!modalAddOpen) {
      setCurrentPage(1);
    }
  }, [modalAddOpen]);

  useEffect(() => {
    if (!modalEditOpen) {
      console.log("editUE");
      setCurrentPage(1);
    }
  }, [modalEditOpen]);

  const fetchData = () => {
    fetch("https://7o71cponk0.execute-api.us-west-1.amazonaws.com/data/all")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error", error));
  };

  const uniqueData = Array.from(new Set(data.map((item) => item.id))).map(
    (id) => {
      return data.find((item) => item.id === id);
    }
  );
  const pageCount = Math.ceil(uniqueData.length / itemsPerPage);

  const displayData = uniqueData
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    .map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td
          style={{ color: item.headdirection === null ? "lightgrey" : "black" }}
        >
          {item.headdirection || "N/A"}
        </td>
        <td style={{ color: item.sex === null ? "lightgrey" : "black" }}>
          {item.sex || "N/A"}
        </td>
        <td style={{ color: item.ageatdeath === null ? "lightgrey" : "black" }}>
          {item.ageatdeath || "N/A"}
        </td>
        <td
          style={{
            color: item.estimateStature === null ? "lightgrey" : "black",
          }}
        >
          {item.estimateStature || "N/A"}
        </td>
        <td style={{ color: item.haircolor === null ? "lightgrey" : "black" }}>
          {item.haircolor || "N/A"}
        </td>
        <td style={{ color: item.depth === null ? "lightgrey" : "black" }}>
          {item.depth || "N/A"}
        </td>
        <td style={{ color: item.burialid === null ? "lightgrey" : "black" }}>
          {item.burialid || "N/A"}
        </td>
        <td
          style={{ color: item.color_value === null ? "lightgrey" : "black" }}
        >
          {item.color_value || "N/A"}
        </td>
        <td
          style={{
            color: item.structure_value === null ? "lightgrey" : "black",
          }}
        >
          {item.structure_value || "N/A"}
        </td>
        <td
          style={{
            color: item.textilefunction_value === null ? "lightgrey" : "black",
          }}
        >
          {item.textilefunction_value || "N/A"}
        </td>
        <td>
          <button
            className="button"
            onClick={() => handleOpenModalEdit(item.id)}
          >
            Edit
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>
        </td>
        <td>
          <button
            className="button"
            onClick={() => handleDelete(item.id, data)}
          >
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

  return (
    <div style={{ width: "100%", overflowX: "auto", overflowY: "scroll" }}>
      <Table className="BurialTable" striped bordered hover>
        <thead className="BurialTableHead">
          <tr>
            <th style={{ width: "calc(0.9*100vw) !important" }}>
              ID<br></br>
            </th>
            <th style={{ width: "calc(0.6*100vw) !important" }}>
              Head Direction<br></br>
            </th>
            <th style={{ width: "calc(0.6*100vw) !important" }}>
              Sex<br></br>
            </th>
            <th style={{ width: "calc(0.6*100vw) !important" }}>
              Age at Death<br></br>
            </th>
            <th style={{ width: "calc(0.6*100vw) !important" }}>
              Estimated Stature<br></br>
            </th>
            <th style={{ width: "calc(0.6*100vw) !important" }}>
              Hair Color<br></br>
            </th>
            <th style={{ width: "calc(0.6*100vw) !important" }}>
              Depth<br></br>
            </th>
            <th style={{ width: "calc(0.6*100vw) !important" }}>
              Burial ID<br></br>
            </th>
            <th style={{ width: "calc(0.6*100vw) !important" }}>
              Color Value<br></br>
            </th>
            <th style={{ width: "calc(0.6*100vw) !important" }}>
              Texile Structure<br></br>
            </th>
            <th style={{ width: "calc(0.6*100vw) !important" }}>
              Textile Function<br></br>
            </th>
            <th className="editColumn">Edit</th>
            <th className="editColumn">Delete</th>
          </tr>
        </thead>
        <tbody className="BurialData">{displayData}</tbody>
      </Table>
      <ReactPaginate
        className="pagination"
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
      <button className="add button" onClick={handleOpenModalAdd}>
        Add Burial Record
        <div className="button__horizontal"></div>
        <div className="button__vertical"></div>
        <img src={addBurialButton}></img>
      </button>
      <br></br>
      <AddBurialRecord
        show={modalAddOpen}
        handleCloseAdd={handleCloseModalAdd}
      />
      <EditBurialRecord
        show={modalEditOpen}
        handleCloseEdit={handleCloseModalEdit}
        updateItem={updateItem}
      />
    </div>
  );
};

export default Summary;
