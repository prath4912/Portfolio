import React, { useEffect, useState } from "react";
import "./h1.css";

export default function Header() {
  const [sham, setsham] = useState(false);
  const[temp , settemp] = useState(false) ;

  const [hl , sethl] = useState("12vh") ;

  function closeMobileNavOnResize() {
    if (window.innerWidth < 768) {
      setsham(true);
    } else {
      setsham(false);
    }
  }
  window.onresize = closeMobileNavOnResize;

const tog = ()=>{
  if(temp)
  {
    settemp(false) ;
    sethl("12vh") ;
  }else{
    settemp(true) ;
    sethl("35vh") ;
  }
}

const tfal = ()=>{
  settemp(false) ;
  sethl("12vh") ;
}

useEffect(()=>{
    closeMobileNavOnResize() ;
} , [])

  return (
    <>
      {sham == false ? (
        <div className="dh1 " style={{height : "12vh"}}>

        <div className="container d-flex justify-content-center" >
          <a className="a1" href="#bg">Home</a>
          <a className="a1" href="#projects">Projects</a>
          <a className="a1" href="#skills">Skills</a>
          <a className="a1" href="#hobbies">Hobbies</a>
          <a className="a1" href="#home">About Me</a>{" "}
        </div>
        </div>

      ) : (
        <div className="dh1 " style={{height : hl}}>

        <div className="hw1 text-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            color="white"
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "white" }}
            onClick={tog}
          >
            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
          </svg>

          {temp ? <div className="container d-flex flex-column justify-content-center">
            <div className="mt-3" onClick={tfal}  > <a href="#bg">Home</a></div>
            <div className="my-1"  onClick={tfal} > <a href="#projects">Projects</a></div>
            <div className="my-1" onClick={tfal} > <a href="#skills">Skills</a></div>
            <div className="my-1" onClick={tfal} > <a href="#hobbies">Hobbies</a></div>
            <div className="my-1" onClick={tfal} > <a href="#home">About Me</a>{" "}</div>
          </div> : <></>}
        </div>
        </div>

      )}
      </>
  );
}
