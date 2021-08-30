import React from "react";

const Data = ({ data }) => {
  return (
    <div>
      {data.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </div>
  );
};

export default Data;
