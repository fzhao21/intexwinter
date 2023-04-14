import React from "react";

const UnsupervisedAnalysis = (props) => {
  const path_to_html = "/arcGIS.html";
  return (
    <>
      <iframe
        src={path_to_html}
        style={{ width: 1500, height: 700 }}
        title="GIS Map"
      ></iframe>
      <div
        id="viewDiv"
        style={{ padding: 0, margin: 0, height: "100%", width: "100%" }}
      ></div>
    </>
  );
};

export default UnsupervisedAnalysis;
