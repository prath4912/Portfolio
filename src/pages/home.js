import React from "react";
import "./home.css";
import Gmail from "../images/Gmail.png";
import Piee from "../components/Piee";

export default function home(props) {
  return (
    <div className="pt-12 bg-white" id="home">
      <div className="bg-dark container-fluid p51">
        <h1 className="tc  mt-2 mb-4  text-light">About Me</h1>

        <div className="dh2  ">
          <div
            className=" card text-center rounded-5 m-2"
            style={{ width: "100%" }}
          >
            <div className="card-body text-start p5">
              <p className="fs-5 fw-medium p-0 m-0">HI I am ,</p>
              <h3 className="card-title fw-bold f-1">Prathmesh Sunil Pawar</h3>
              <p className="p-0 m-0 mt-2 fs-5 fw-medium">
                Computer Engineering Student and Software Developer
              </p>
              <span className="fs-6 fw-medium">CGPA : 9.26 / 10</span>
              <p className="mt-2 card-text par">
                I am in Pre-Final Year pursuing B.E. (Computer Engineering)
                Learning from Pune Institute of Computer Technology, India. My
                main interests are Web Development , Cloud Computing. I am
                passionate about making use of technology to solve real-world
                problems.
              </p>
            </div>
            <div className="d-flex justify-content-between ">
              <div
                className="mb-4 d-flex justify-content-around ms-5 my-3 "
                style={{ width: "10vw" }}
              >
                <a href="https://www.linkedin.com/in/prathmesh-pawar-17b929229/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-linkedin mx-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                <a className="mx-1" href="mailto: prathmeshpawaru@gmail.com" target="_blank" rel="noreferrer">
                  <img src={Gmail} width={"30px"} alt="" />
                </a>
                <a href="https://github.com/Prathmesh-Pawar" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="black"
                    className="bi bi-github mx-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
              <span>
                <a
                  href="https://drive.google.com/file/d/1eKwymLOdPnuAEzvhU0aHLS4IWIv7rnxk/view?usp=sharing"
                  rel="external"
                  target="_blank"
                  className=" btn btn-sm bsm  m-3 me-5 btn-dark "
                >
                  Resume{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class=" mb-1 bi bi-link"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                    <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="img-fluid dh5 rounded-5">
            <img className="rounded-circle" src={props.p1} alt="" />
          </div>
        </div>
        {/* <div className="d-flex justify-content-around align-items-center p-3">
          <div><h5 className="mb-3 text-light">Programming</h5><Piee/></div>
          <div><h5 className="mb-3 text-light">Programming</h5><Piee/></div>
          <div><h5 className="mb-3 text-light">Programming</h5><Piee/></div>
        </div> */}
      </div>
    </div>
  );
}
