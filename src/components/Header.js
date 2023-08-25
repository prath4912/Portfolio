import React , { useState } from 'react';
import "./h1.css" ;
import ham from "../images/ham.jpg"
import { AiOutlineMenu } from "react-icons/ai";
export default function Header() {

  const [sham, setsham] = useState(false)


 

  

  
    function closeMobileNavOnResize() {
      if (window.innerWidth < 768) {
        setsham(true) ;
      }else
      {
        setsham(false) ;
      }
    }
  window.onresize = closeMobileNavOnResize;

  return (
    <div className='dh1 '>

      { sham==false ?    <div className='container d-flex justify-content-center'>
      <a href="#bg">Home</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#hobbies">Hobbies</a>        
      <a href='#home'>About Me</a>      </div>
:
 <div className='hw1 text-center'>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="white" width="30" height="30" xmlns="http://www.w3.org/2000/svg" style={{color: "white"}}><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>        
      </div>
      
      }

    </div>
  )
} 
