import React from "react";

const UnsupervisedAnalysis = (props) => {
  const path_to_html = "/public/arcGIS.html";
  return (
    <>
      <iframe
        src={process.env.PUBLIC_URL + path_to_html}
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
