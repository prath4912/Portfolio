import React, { useState } from 'react'
import i1 from '../images/cpp.png'
export default function Skills() {



  const [skills , setskills] = useState(obj) ;


  return (
    <div className=' pt-12'  id='skills'>
        <div className=' container bg-dark text-start py-3 rounded-3 pb-5'>
        <h1 className='text-light ms-4 mb-3 my-4 '>Tecnical Skills</h1>

          <div className='grd1 text-light '>
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
  img : i1
},
{
  title : "HTML" ,
  img : i1
},{
  title : "CSS" ,
  img : i1
},{
  title : "BOOTSTRAP" ,
  img : i1
},{
  title : "TailWind CSS" ,
  img : i1
},{
  title : "JavaScript" ,
  img : i1
},{
  title : "TypeScript" ,
  img : i1
},{
  title : "AWS" ,
  img : i1
},{
  title : "FireBase" ,
  img : i1
},{
  title : "NodeJS" ,
  img : i1
},{
  title : "MongoDB" ,
  img : i1
},
{
  title : "ExpreeJS" ,
  img : i1
},{
  title : "Redux" ,
  img : i1
},{
  title : "Postman" ,
  img : i1
},{
  title : "Mysql" ,
  img : i1
}
// ,{
//   title : "Java" ,
//   img : i1
// },
] ;
