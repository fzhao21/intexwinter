import React, { useState } from "react";

function ColumnFilterButton({ filterFunction, columnName }) {
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleFilterClick = () => {
    filterFunction(filterValue, columnName);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={`Filter ${columnName}`}
        value={filterValue}
        onChange={handleFilterChange}
      />
      <button onClick={handleFilterClick}>Filter</button>
    </div>
  );
}

export default ColumnFilterButton;