import React from "react";
import "./Complex.css";

const Complex = ({ complex }) => {
  return (
    <div className="Complex">
      <ul>
        {complex.map((e, i) => {
          return (
            <li key={i}>
              <p>{e.company}</p>
              <p>{e.jobs.join(" , ")}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Complex;
