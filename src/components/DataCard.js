import React from "react";

const DataCard = ({ props }) => {
  const { img, title, details } = props;
  return (
    <div className="bg-white  transition-all ease-in-out  flex flex-col justify-center items-center border p-8 border-gray-400 border-dashed rounded shadow-lg">
      <img className="h-28 w-28" src={img ? img : ""} alt="" />
      <p className="text-xs font-semibold text-center my-3">
        {title ? title : ""}
      </p>
      <p className="text-xs text-center">{details ? details : ""}</p>
    </div>
  );
};

export default DataCard;
