import React from "react";

const Data = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
