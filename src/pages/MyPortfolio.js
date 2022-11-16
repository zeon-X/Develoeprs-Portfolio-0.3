import React from "react";
import img from "../assets/1903147P.jpg";
import DataCard from "../components/DataCard";
import ProjectCard from "../components/ProjectCard";
const MyPortfolio = () => {
  const skilldata = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/8915/8915829.png",
      title: "Problem Solving",
      details: "Overall Solved problem: 500+",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/7991/7991055.png",
      title: "Web Development",
      details:
        "MongoDB, Mongoose, Express.JS, Node.JS, React.JS, React Tailwind, React Bootstrap, html, CSS, ES6.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/365/365779.png",
      title: "Language",
      details: "C, C++, JavaScript, Node.js, Java, Python",
    },

    {
      img: "https://cdn-icons-png.flaticon.com/512/2808/2808331.png",
      title: "Internet of Things",
      details: "I'm working on sevarel projects on IoT",
    },
  ];
  const projectdata = [
    {
      img: "https://i.ibb.co/8X5jJnD/Screenshot-2022-11-14-at-18-59-01-Menufacturer-Tools.png",
      title: "full stack development of an menufacturer website",
      details:
        "website has to be a tools manufacturer. The tool manufacturers could manufacture carpentry tools, masonry tools, electric tools, metalwork tools, or any tool. ",
      githubLink: "https://github.com/zeon-X/manufacture-client",
      link: "https://manufacture-web-app.web.app",
    },
    {
      img: "https://user-images.githubusercontent.com/73699852/193410165-c775f462-d784-4159-8eda-270d04a95bee.png",
      title: "Pocket-Money-Manager-Android-App",
      details:
        "It's an Life-style App that tracks notes on daily transactions & presents reports on Daily/Weekly/Monthly basis. This app become too popular as there are many people who can't track their daily expense/income money. This app provides that facilities in a more easy & sophisticated way. ",
      githubLink: "https://github.com/zeon-X/Pocket-Money-Manager-Android-App",
      link: "https://github.com/zeon-X/Pocket-Money-Manager-Android-App",
    },
    {
      img: "https://i.ibb.co/JQ0hXs9/Screenshot-2022-11-14-at-18-55-27-Isbaah-com-Inventory.png",
      title: "Book-wear-house-management-dashboard",
      details:
        "Programming Hero Course Assignment No 11. This repo contains the client side of a book wearhouse management system.",
      githubLink:
        "https://github.com/zeon-X/book-wear-house-management-dashboard",
      link: "isbaah-book-wearhouse.web.app/",
    },
    {
      img: "https://i.ibb.co/Bg6FN5H/170592940-8452b121-19b7-48af-ae49-bdcc5c5d7986.png",
      title: "Weeding-Art-Photography-Booking-Site ",
      details:
        "E-commerce & Landing page for an Photography Team. Project was done with React.JS, Firebase, React-Tailwind. Site is responsive for large screens/laptop or monitor & small screen/sm mobile ",
      githubLink:
        "https://github.com/zeon-X/Weeding-Art-Photography-Booking-Site",
      link: "weeding-art-bd-zeonx.firebaseapp.com/ ",
    },
  ];
  const awarddata = [
    {
      img: "data:image/png;base64,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",
      title: "Joining bdapps national Hackathon program",
      details:
        "I joined with one of my start-up idea & presented my idea & business models",
    },
    {
      img: "https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/306796631_108480718676711_1970927754756576090_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGjslc_TMkAD_a5CSmrw_EXgBs5cwB0FwOAGzlzAHQXAxYIPamBI5rGNo2Ep1_KjUU0vVdGjx4qgSPpsGbhJQ6m&_nc_ohc=PDuaC_JoyHQAX_IVzWI&tn=7pGCAFdT9yUT0N3E&_nc_ht=scontent.fdac22-1.fna&oh=00_AfANZQlKDZFkHHU3dqjmdAXJk7RC4qWDNSnVgoTqLCBSsA&oe=6376A8AE",
      title: "RUET IoT Club",
      details:
        "The Internet of Things is a revolutionary aspect of the Internet since it is thought to be responsible for developing all future technologies. Researchers are working very hard to develop this technology",
    },
  ];
  const hobbydata = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/2821/2821715.png",
      title: "Developing Business Ideas",
      details: "I love to do that",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2516/2516644.png",
      title: "Agro Firming Development with IoT",
      details: "I love to do that",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1027/1027179.png",
      title: "Cooking",
      details: "I love to do that",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2491/2491931.png",
      title: "Travelling",
      details: "I love to do that",
    },
  ];
  return (
    <div className="w-full mb-16 flex flex-col justify-center items-center lg:px-20 py-16 sm:px-8">
      {/* starting */}
      <div className="flex lg:flex-row sm:flex-col lg:justify-between md:justify-between sm:justify-center w-full">
        <div className="text-sm lg:order-1 md:order-1 sm:order-2">
          <p className="text-3xl font-bold text-black">Md. Shefat Zeon</p>
          <p className="text-lg font-semibold text-blue-800">
            FULL-STACK DEVELOPER | MERN
          </p>
          <div className="flex badge mt-3 mb-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>
            <p className="ml-1 ">Phone: +8801402-199906</p>
          </div>
          <div className="flex badge">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <p className="ml-1 ">Email: mdshefatzeon@gmail.com</p>
          </div>
          {/* social */}
          <div className="flex gap-3 mt-4">
            <a
              target="_blank"
              className="w-10 h-10 hover:scale-90 transition-all ease-in-out"
              href="https://github.com/zeon-X"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/4494/4494749.png"
                alt=""
              />
            </a>
            <a
              target="_blank"
              className="w-10 h-10 hover:scale-90 transition-all ease-in-out"
              href="https://www.linkedin.com/in/zeonx/"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                alt=""
              />
            </a>
            <a
              target="_blank"
              className="w-10 h-10 hover:scale-90 transition-all ease-in-out"
              href="https://twitter.com/ShefatZeon"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
                alt=""
              />
            </a>
            <a
              target="_blank"
              className="w-10 h-10 hover:scale-90 transition-all ease-in-out"
              href="https://www.facebook.com/shefat.zeon.1"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <img
          className="w-44 h-44  lg:order-2 md:order-2 sm:order-1"
          src={img}
          alt=""
        />
      </div>

      <p className="bg-white p-4 text-sm my-6 rounded shadow">
        As a Full Stack Developer, my work with application and technical
        architects to translate a business need into a robust and integrated
        technology solution. I work in a fast-paced environment solving unique
        and challenging software problems and developing innovative solutions.
        My objective is simply to be the best web developer that I can be and to
        contribute to the technology industry all that I know and can do. I am
        dedicated to perfecting my craft by learning from more seasoned
        developers, remaining humble, and continuously making strides to learn
        all that I can about development.
      </p>
      <div className="border w-full border-gray-200 my-3 p-2 flex justify-between items-center">
        <p className="font-bold">Education</p>
      </div>
      <table className="rounded w-full text-sm border-collapse p-2  border border-gray-300">
        <thead>
          <tr>
            <th className=" p-2  border border-gray-300 w-3/12">Time</th>
            <th className=" p-2  border border-gray-300 w-9/12">Institute</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" p-2  border border-gray-300">2020.01 - Present </td>
            <td className=" p-2  border border-gray-300">
              BSc. in Computer Science & Engineering (CSE) <br /> Rajshahi
              University of Engineering & University (RUET), Rajshahi,
              Bangladesh <br /> Major: Computer Programing, Problem Solving,
              Object Oriented Programming, Data Structure, Numerical Methods,
              Discrete Mathematics, C, C++, Java <br /> Minor: Differential
              Calculus, Integral Calculus, Physics, Functional English,
              Economics, Accounting, Management, Chemistry, Analog Electronics,
              Basic Electronics. <br /> Session: 2020-2025 <br />
              Semester Completed: 1-2 <br /> Result: CGPA 3.48
            </td>
          </tr>
          <tr>
            <td className=" p-2  border border-gray-300">2017.06 – 2019.04 </td>
            <td className=" p-2  border border-gray-300">
              Higher Secondary in Science (HSC) <br /> Dhaka College, Dhaka,
              Bangladesh <br />
              Major: Mathematics, Physics, Chemistry, Biology, ICT <br />{" "}
              Session: 2017-2018 <br /> Result: GPA 5.00
            </td>
          </tr>
          <tr>
            <td className=" p-2  border border-gray-300">2015.01 – 2017.02 </td>
            <td className=" p-2  border border-gray-300">
              Secondary in Science (SSC) <br /> Bhuapur Pilot High School,
              Bhuapur, Tangail, Bangladesh <br /> Major: Mathematics, Physics,
              Chemistry, Biology, ICT <br />
              Session: 2012-2017 <br />
              Result: GPA 5.00
            </td>
          </tr>
        </tbody>
      </table>

      {/* skill */}
      <div className=" w-full border border-gray-200 mt-16 mb-5 p-2 flex justify-between items-center">
        <p className="font-bold">Skills</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
        {skilldata.map((x, index) => {
          return <DataCard key={index} props={x}></DataCard>;
        })}
      </div>

      {/* project */}
      <div className=" w-full border border-gray-200 mt-16 mb-5 p-2 flex justify-between items-center">
        <p className="font-bold">Best 4 of My Projects</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
        {projectdata.map((x, index) => {
          return <ProjectCard key={index} props={x}></ProjectCard>;
        })}
      </div>

      {/* award */}
      <div className=" w-full border border-gray-200 mt-16 mb-5 p-2 flex justify-between items-center">
        <p className="font-bold">
          Competitive Program & Other Program attended
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
        {awarddata.map((x, index) => {
          return <DataCard key={index} props={x}></DataCard>;
        })}
      </div>

      {/* hobby */}
      <div className=" w-full border border-gray-200 mt-16 mb-5 p-2 flex justify-between items-center">
        <p className="font-bold">Hobby</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 w-full">
        {hobbydata.map((x, index) => {
          return <DataCard key={index} props={x}></DataCard>;
        })}
      </div>
    </div>
  );
};

export default MyPortfolio;
