import React from "react";
import "./Complex.css";

const Complex = ({ complex }) => {
  return (
    <div className="Complex">
      {complex.map((e, i) => {
        return (
          <div key={i}>
            <p>{e.company}</p>
            <p>{e.jobs.join(" , ")}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Complex;
