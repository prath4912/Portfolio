import React, { useState } from "react";
import Project from "../components/Project";
import pj1 from "../images/ORGABIC.png";
import port from "../images/portfolio.jpg";
import Bailgada_Live_Logo from "../images/Logo.png";

export default function Projects() {
  const obj = [
    {
      title: "Organic Bananas (Ecommerce Website)",
      descarr: [
        "Built responsive and user-friendly front-end interface using ReactJs and Tailwind CSS",
        "Employed NodeJs and ExpressJs to develop the back-end API, implementing authentication middleware for enhanced security",
        "Tech Stack- ReactJS, NodeJS, ExpressJ",
        "Razorpay payment gateway integration",
        "Database - MongoDB Atlas Cloud Database",
      ],
      Repo_Link: "https://github.com/prath4912/Organic_Bananas",
      Url: "https://organicbananas.netlify.app",
      img: pj1,
    },
    {
      title: "Bailgada Live (Sport Update Website",
      descarr: [
        "Innovative and Interactive web app in Marathi for Bailgada Sharyat which is a popular sport in Maharashtra",
        "Tech Stack- ReactJS, NodeJS, ExpressJS",
        "Google Analytics is used for analysis",
        "Deployed frontend on Netlify and Backend on Heroku",
        "Database - MongoDB Atlas Cloud Database",
      ],
      Url: "https://bailgada.live/",
      img: Bailgada_Live_Logo,
    },
    {
      title: "Portfolio",
      descarr: [
        "Developed a responsive and visually appealing website using ReactJS and Bootstrap",
        "Tech Stack- ReactJS, Bootstrap",
      ],
      Repo_Link: "https://github.com/prath4912/Portfolio",
      Url: "https://pawarprathmesh.netlify.app/",
      img: port,
    },
  ];

  const [projects, setp] = useState(obj);

  return (
    <div className="pt-12" id="projects">
      <div className=" container bg-dark text-light  p-3 rounded-3   pp1">
        <div>
          <h1 className="text-start ms-2 my-4">Projects</h1>
          <div className="d-flex flex-column justify-content-center mx-3 ">
            {projects.map((item) => {
              return <Project item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
