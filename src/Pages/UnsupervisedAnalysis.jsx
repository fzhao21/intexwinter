import React from "react";

const UnsupervisedAnalysis = (props) => {
  return (
    <>
      <iframe src="./arcGIS.html" style={{ width: 1500, height: 700 }}></iframe>
      <div
        id="viewDiv"
        style={{ padding: 0, margin: 0, height: "100%", width: "100%" }}
      ></div>
    </>
  );
};

export default UnsupervisedAnalysis;
