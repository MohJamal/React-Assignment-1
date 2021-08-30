import React from "react";

const List = ({ list }) => {
  return (
    <div>
      {list.map((e, i) => (
        <div key={i}>{e.name}</div>
      ))}
    </div>
  );
};

export default List;
