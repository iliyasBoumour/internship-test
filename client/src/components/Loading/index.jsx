import React from "react";

const index = ({ message }) => {
  return (
    <div style={{ paddingTop: "2rem" }}>
      <h1>{message || "Loading ..."}</h1>
    </div>
  );
};

export default index;
