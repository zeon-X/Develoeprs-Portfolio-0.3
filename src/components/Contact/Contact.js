import React from "react";
import "./Contact.css";

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
      <div className="mx-48 my-20">
        <p>Contact Me</p>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 justify-center items-center ">
          <div className="rounded shadow-lg px-2 pb-10 flex flex-col justify-center items-center">
            <img
              className="p-14"
              src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
              alt=""
            />
            <p>+8809696349906</p>
          </div>
          <div className="rounded shadow-lg px-2 pb-10 flex flex-col justify-center items-center">
            <img
              className="p-10"
              src="https://cdn-icons.flaticon.com/png/512/4946/premium/4946005.png?token=exp=1660783522~hmac=8067ea7844ce8e52bd9bc79e067cdb6e"
              alt=""
            />
            <p>mdshefatzeon@gmail.com</p>
          </div>
          <div className="rounded shadow-lg px-2 pb-10 flex flex-col justify-center items-center">
            <img
              className="p-12"
              src="https://cdn-icons-png.flaticon.com/512/1384/1384030.png"
              alt=""
            />
            <p>linkedin.com/in/zeonx</p>
          </div>
          <div className="rounded shadow-lg px-2 pb-10 flex flex-col justify-center items-center">
            <img
              className="p-12"
              src="https://cdn-icons-png.flaticon.com/512/684/684850.png"
              alt=""
            />
            <p>Silicon valley, Rajshahi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
