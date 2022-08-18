import React from "react";

const NotFround = () => {
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
      <div className="mx-48 my-20 h-full flex justify-center items-center">
        <img
          style={{ width: "100px" }}
          src="https://cdn-icons-png.flaticon.com/512/6537/6537649.png"
          alt=""
        />
        <p className="ml-5">| 404Not Found </p>
      </div>
    </div>
  );
};

export default NotFround;
