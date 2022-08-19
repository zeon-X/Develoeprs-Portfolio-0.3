import React from "react";
import "./Contact.css";
import p1 from "../../assets/597177.png";
import p2 from "../../assets/4946005.png";
import p3 from "../../assets/1384030.png";
import p4 from "../../assets/684850.png";

const Contact = () => {
  return (
    <div className="bg-white rounded-xl pb-10 shadow-2xl ">
      <div className="flex justify-between items-center p-10 lg:shadow-lg">
        <p className="text-sm font-semibold">
          Muhammad Shefat Zeon |
          <span className="text-gray-400 ml-1">CEO MealGrid</span>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </div>

      {/* START */}
      <div className="lg:mx-48 sm:mx-28 my-20">
        <p>Contact Me</p>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-5 justify-center items-center ">
          <div className="rounded shadow-lg px-2 pb-10 flex flex-col justify-center items-center">
            <img className="p-12" src={p1} alt="" />
            <p>+8809696349906</p>
          </div>
          <div className="rounded shadow-lg px-2 pb-10 flex flex-col justify-center items-center">
            <img className="p-12" src={p2} alt="" />
            <p>mdshefatzeon@gmail.com</p>
          </div>
          <div className="rounded shadow-lg px-2 pb-10 flex flex-col justify-center items-center">
            <img className="p-12" src={p3} alt="" />
            <p>linkedin.com/in/zeonx</p>
          </div>
          <div className="rounded shadow-lg px-2 pb-10 flex flex-col justify-center items-center">
            <img className="p-12" src={p4} alt="" />
            <p>Silicon valley, Rajshahi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
