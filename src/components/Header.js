import React, { useEffect, useState } from "react";
import "./h1.css";

export default function Header() {
  const [sham, setsham] = useState(false);
  const[temp , settemp] = useState(false) ;
  const [hn , sethn]=useState("12vh") ;

  const [hl , sethl] = useState("12vh") ;


  function closeMobileNavOnResize() {
   
    if(window.innerWidth < 430)
  {
    sethn("8vh")
    sethl("8vh") ;

  }

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
    sethl(hn) ;
  }else{
    settemp(true) ;
    sethl("35vh") ;
  }
}

const tfal = ()=>{
  settemp(false) ;
  sethl(hn) ;
}

useEffect(()=>{
  
    closeMobileNavOnResize() ;
} , [])

  return (
    <>
      {sham === false ? (
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
        {!temp ? 
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
          :
          <svg             onClick={tog}
          xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg> 
        }

          {temp ? <div className="container d-flex flex-column justify-content-center">
            <div className="mt-3"  > <a onClick={tfal}  href="#bg">Home</a></div>
            <div className="my-1"  > <a onClick={tfal} href="#projects">Projects</a></div>
            <div className="my-1" > <a onClick={tfal} href="#skills">Skills</a></div>
            <div className="my-1" > <a onClick={tfal} href="#hobbies">Hobbies</a></div>
            <div className="my-1" > <a onClick={tfal} href="#home">About Me</a>{" "}</div>
          </div> : <></>}
        </div>
        </div>

      )}
      </>
  );
}
