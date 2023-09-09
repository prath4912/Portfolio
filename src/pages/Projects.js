import React, { useState } from 'react'
import Project from '../components/project'
import pj1 from '../images/ORGABIC.png'

export default function Projects() {

  const obj =[ {
    title : "Ecommerce Website - Organic Bananas" ,
    descarr : ["FullStack Project","Build using MERN Stack" , "MongoDB Atlas DataBase and Firebase used"  , "Payment Integration using Razorpay"] ,
    Repo_Link : "https://github.com/Prathmesh-Pawar/Organic_Bananas" ,
    Url : "https://organic-bananas.netlify.app/" ,
    img : pj1
  },
  {
    title : "TextUtils" ,
    descarr : ["Build using MERN Stack" , "We can manipulate text using various Features" ,"Simple Chatbot Added"] ,

    Repo_Link : "https://github.com/Prathmesh-Pawar/Portfolio" ,
    Url : "https://textedii.netlify.app/" ,
    img : pj1
  },
  // {
  //   title : "BailGada Sharyat" ,
  //   Descrption : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum tempora explicabo soluta quisquam velit quod, facilis unde recusandae minus maiores nulla culpa eum inventore quidem consequuntur rem mo" ,
  //   descarr : ["Build using MERN Stack" , "MongoDB DataBase used" , "Payment INtegration uisng Razorpay"] ,
  //   Repo_Link : "https://github.com/Prathmesh-Pawar/Organic_Bananas" ,
  //   Url : "https://prathmesh-pawar.github.io/Portfolio/" ,
  //   img : pj1
  // },
  {
    title : "Portfolio" ,
    descarr : ["FrontEnd Project","Build using MERN Stack ","Bootstrap used" ] ,
    Repo_Link : "https://github.com/Prathmesh-Pawar/Organic_Bananas" ,
    Url : "https://pawarprathmesh.netlify.app/" ,
    img : pj1
  }] ;

  const[projects ,setp] = useState(obj) ;


  return (
    <div className='pt-12' id='projects'>
    <div className=' container bg-dark text-light  p-3 rounded-3   pp1'>
    <div  className=' '>
    <h1 className='text-start ms-2 my-4' >Projects</h1>
    <div className='d-flex flex-column justify-content-center
 mx-3 '>
  {
    projects.map((item)=>{
      return <Project item = {item}/>
    })
  }

    </div>
    </div>
    </div>
    </div>
  )
}