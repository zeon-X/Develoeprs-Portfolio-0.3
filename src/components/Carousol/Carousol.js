import React, { useEffect, useState } from "react";
import "./Carousol.css";
import photo1 from "../../assets/298982613_814451246237691_8450290546213441421_n.jpg";
import photo2 from "../../assets/299517345_584749976464677_1711544112452045763_n.jpg";
import Work from "../works/Work";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

const Carousol = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("works.json")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  const m = 70;
  const e = 87;
  const r = 95;
  const n = 90;

  // console.log(data);
  return (
    <div className="bg-white rounded-xl pb-10 shadow-2xl ">
      <div className="flex justify-between items-center p-10 lg:shadow-lg">
        <p className="text-sm font-semibold">
          Muhammad Shefat Zeon |{" "}
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

      {/* !!!!!!!!!!!!!!!!!!!!!!!! INTRO PART 1 !!!!! */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 lg:mt-10 sm:mt-0 lg:pl-40 lg:p-0  sm:p-10 items-center">
        <div className="lg:pr-28 sm:pr-10 sm:mt-10 lg:mt-auto sm:order-2 lg:order-1">
          <p className="font-bold" style={{ fontSize: "50px" }}>
            Full-Stack
          </p>
          <p className="font-bold uppercase" style={{ fontSize: "30px" }}>
            Web Application Developer
          </p>

          <p className="mt-5 mb-1">@ Muhammad Shefat Zeon</p>
          <p className="" style={{ fontSize: "12px" }}>
            I am a person who is positive about every aspect of life. There are
            many things I like to do, to see, and to experience. I like to read,
            I like to write; I like ...
          </p>

          <button
            onClick={() => {
              navigate("/contact");
            }}
            type=""
            className="mt-10 px-10 py-5 bg-black text-white hover:bg-white hover:text-black border border-black ease-in-out duration-200"
          >
            Contact Me
          </button>
        </div>
        <img
          className="sm:order-1 lg:order-2 shadow-lg lg:rounded-none  sm:rounded-lg"
          src="https://i.ibb.co/bQq6r8k/IMG-20200606-003931-670-1.jpg"
          alt=""
        />
      </div>

      {/* !!!!!!!!!!!!!!!!!!!!!!!! INTRO PART 2 !!!!! */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 mt-20 lg:p-0 sm:p-10 lg:pr-40  items-center">
        <img
          className="shadow-lg lg:rounded-none sm:rounded-lg"
          src={photo1}
          alt=""
        />
        <div className="lg:pl-28">
          <p className="font-bold" style={{ fontSize: "22px" }}>
            I have transform your ideas into remarkable digital Products
          </p>
          <p className="mt-5" style={{ fontSize: "12px" }}>
            I have transform your ideas into remarkable digital Products. I am a
            person who is positive about every aspect of life.I have transform
            your ideas into remarkable digital Products. I am a person who is
            positive about every aspect of life. There are many things I like to
            do, to see There are aspect of life. There are many things I like to
            do, to see There are many things I like to do, to see, and to
            experience. I like to read, I like to write; I like ...
          </p>
          <p className="my-5" style={{ fontSize: "12px" }}>
            I have transform your ideas into remarkable digital Products. I am a
            person who is positive about ever ideas into remarkable digital
            Products. I am a person who is positive about every aspect of life.I
            have transform your ideas into remarkable digital Products. I am a
            person who is positive about evany things I liky aspect of life.
            There are many things I like to do, to see, and to experience. I
            like to read, I like to write; I like ...
          </p>
          <button className="font-bold" style={{ fontSize: "14px" }}>
            Download My Resume
          </button>
        </div>
      </div>

      {/* Expert In */}
      <div className="lg:px-48 sm:px-10 my-24 flex flex-col justify-center items-center">
        <p className="text-3xl mb-10 font-light">Experts In</p>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center p-8 shadow-lg rounded-lg border  exp_card">
            <CircularProgressbar
              value={m}
              text={`${m}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `black`,
                textColor: "black",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
            <p className="mt-5">MongoDB</p>
          </div>
          <div className="flex flex-col justify-center items-center p-8 shadow-lg rounded-lg border exp_card">
            <CircularProgressbar
              value={e}
              text={`${e}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `black`,
                textColor: "black",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
            <p className="mt-5">Express</p>
          </div>
          <div className="flex flex-col justify-center items-center p-8 shadow-lg rounded-lg border exp_card">
            <CircularProgressbar
              value={r}
              text={`${r}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `black`,
                textColor: "black",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
            <p className="mt-5">React</p>
          </div>
          <div className="flex flex-col justify-center items-center p-8 shadow-lg rounded-lg border exp_card">
            <CircularProgressbar
              value={n}
              text={`${n}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `black`,
                textColor: "black",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
            <p className="mt-5">Node.js</p>
          </div>
        </div>
      </div>

      {/* WORKD  */}
      <div className="lg:px-48 sm:p-10 ">
        <p className="text-3xl mb-10 font-light text-center">My Recent Works</p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
          {data.map((x) => (
            <Work id={x.id} x={x}></Work>
          ))}
        </div>

        <div className="flex justify-center items-center mt-10">
          <button
            onClick={() => {
              window.location.href = "https://github.com/zeon-X";
            }}
            className="flex justify-center items-center px-10 py-4 bg-black text-white hover:bg-white hover:text-black border border-black ease-in-out duration-300 shadow-lg"
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              class="text-purple-600 mr-3 text-opacity-50 transform"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
              ></path>
            </svg>
            <p className="">Check Github</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousol;
