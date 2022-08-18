import React from "react";
import "./Work.css";

const Work = ({ x }) => {
  return (
    <div className="flex flex-col items-center rounded-lg shadow-xl work">
      <p className="m-2">{x?.id}</p>
      <div>
        <img className="grayscale hover:grayscale-0" src={x?.img} alt="" />

        <p className="mt-1 p-5" style={{ fontSize: "12px" }}>
          {x?.des}
        </p>
      </div>
    </div>
  );
};

export default Work;
