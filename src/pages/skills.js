import React, { useState } from 'react'
import i1 from '../images/cpp.png'
import reacti from "../images/react.png" ;
import html from "../images/html.png" ;
import css from "../images/css.png" ;
import bootstrap from "../images/bootstrap.png" ;
import tailwind from "../images/tailwind.png" ;
import javas from "../images/javas.png" ;
import types from "../images/types.png" ;
import aws from "../images/aws.png" ;

import firebase from "../images/firebase.png" ;

import node from "../images/node.png" ;

import mongo from "../images/mongo.png" ;
import expressjs from "../images/expressjs.png" ;
import redux from "../images/redux.png" ;
import postman from "../images/postman.svg" ;
import mysql from "../images/mysql.png" ;



export default function Skills() {



  const [skills , setskills] = useState(obj) ;


  return (
    <div className=' pt-12'  id='skills'>
        <div className=' container bg-dark text-start py-3 rounded-3 pb-5'>
        <h1 className='text-light ms-4 mb-3 my-4 '>Tecnical Skills</h1>

          <div className='grd1 text-light mx-1 '>
            {
              skills.map((item)=>{
                return       <div className=' my-2 d-flex align-items-center '><img className='iw1 m-2' src={item.img} alt=""  />{item.title}</div>

              })
            }
     
      </div>
      </div>
      
      
    </div>
  )
}


const obj = [{
  title : "C++", 
  img : i1
},
{
  title : "ReactJS" ,
  img : reacti
},
{
  title : "HTML" ,
  img : html
},{
  title : "CSS" ,
  img : css
},{
  title : "BOOTSTRAP" ,
  img : bootstrap
},{
  title : "TailWind CSS" ,
  img : tailwind
},{
  title : "JavaScript" ,
  img : javas
},{
  title : "TypeScript" ,
  img : types
},{
  title : "AWS" ,
  img : aws
},{
  title : "FireBase" ,
  img : firebase
},{
  title : "NodeJS" ,
  img : node
},{
  title : "MongoDB" ,
  img : mongo
},
{
  title : "ExpreeJS" ,
  img : expressjs
},{
  title : "Redux" ,
  img : redux
},{
  title : "Postman" ,
  img : postman
},{
  title : "Mysql" ,
  img : mysql
}
// ,{
//   title : "Java" ,
//   img : i1
// },
] ;