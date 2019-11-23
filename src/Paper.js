import React from "react";
import Card from "./Card";
import "./Paper.css";

const Paper = ({ data, paperType }) => {
  return (
    <div className={paperType}>
      {data.map(data => (
        <Card {...data} key={data.id}></Card>
      ))}
    </div>
  );
};

export default Paper;
