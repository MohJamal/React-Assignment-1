import React from "react";

const List = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((e, i) => (
          <li key={i}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
