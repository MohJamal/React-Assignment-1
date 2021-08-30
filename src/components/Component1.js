import React from "react";
import Complex from "./Complex";
import "./Component1.css";
import Data from "./Data";
import List from "./List";
import Name from "./Name";
import Obj from "./Obj";

const Component1 = () => {
  const name = "Hello World";
  const obj = { name: "Hello World Object" };

  //Show these in seperate tags
  const data = ["We", "are", "United"];

  //Show these in seperate tags
  const list = [
    { name: "Hello World 1" },
    { name: "Hello World 2" },
    { name: "Hello World 3" },
  ];

  const complex = [
    { company: "XYZ", jobs: ["Javascript", "React"] },
    { company: "ABC", jobs: ["AngularJs", "Ionic"] },
  ];

  return (
    <div className="Comp1">
      <Name name={name} />
      <Obj name={obj.name} />
      <Data data={data} />
      <List list={list} />
      <Complex complex={complex} />
    </div>
  );
};

export default Component1;
