import React from "react";
import c1 from "../images/p2.jpg";
import c2 from "../images/p3.jpg";
import c3 from "../images/p6.jpg";

export default function Hobbies() {
  return (
    <div id="hobbies" className="pt-12 ">
      <div className=" container bg-dark p-3 rounded-3 pb-5">
        <h1 className="text-light text-start ms-3  my-4 ">Hobbies</h1>
        <div className="  mb-3 d-flex flex-row flex-wrap justify-content-around">
          {hob.map((ha) => {
            return (
              <div className="my-3 card" style={{ width: "18rem" }}>
                <img src={ha.link} className="card-img-top" alt="..." />
                <div className=" bg-dark-subtle bg-gradient card-body">
                  <h5 className=" card-title fw-bold">{ha.title}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const hob = [
  {
    title: "Cricket",
    link: c1,
  },
  {
    title: "Travling",
    link: c2,
  },
  {
    title: "Cycling",
    link: c3,
  },
];
