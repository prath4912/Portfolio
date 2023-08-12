import React, { useState } from 'react'
import Project from '../components/project'
import pj1 from '../images/ORGABIC.png'


export default function Projects() {

  const obj =[ {
    title : "Ecommerce Website" ,
    Descrption : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum tempora explicabo soluta quisquam velit quod, facilis unde recusandae minus maiores nulla culpa eum inventore quidem consequuntur rem modi? Corporis, numquam nulla. Hic, asperiores ut! Dolorem, pariatur beatae autem aperiam omnis neque blanditiis consequuntur cum officiis incidunt numquam exercitationem ea amet.." ,
    Repo_Link : "https://github.com/Prathmesh-Pawar/Organic_Bananas" ,
    Url : "https://prathmesh-pawar.github.io/Portfolio/" ,
    img : pj1
  },
  {
    title : "Bailgada Website" ,
    Descrption : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum tempora explicabo soluta quisquam velit quod, facilis unde recusandae minus maiores nulla culpa eum inventore quidem consequuntur rem modi? Corporis, numquam nulla. Hic, asperiores ut! Dolorem, pariatur beatae autem aperiam omnis neque blanditiis consequuntur cum officiis incidunt numquam exercitationem ea amet.." ,
    Repo_Link : "https://github.com/Prathmesh-Pawar/Organic_Bananas" ,
    Url : "https://prathmesh-pawar.github.io/Portfolio/" ,
    img : pj1
  },
  {
    title : "Portfolio" ,
    Descrption : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum tempora explicabo soluta quisquam velit quod, facilis unde recusandae minus maiores nulla culpa eum inventore quidem consequuntur rem modi? Corporis, numquam nulla. Hic, asperiores ut! Dolorem, pariatur beatae autem aperiam omnis neque blanditiis consequuntur cum officiis incidunt numquam exercitationem ea amet.." ,
    Repo_Link : "https://github.com/Prathmesh-Pawar/Organic_Bananas" ,
    Url : "https://prathmesh-pawar.github.io/Portfolio/" ,
    img : pj1
  }] ;
  const[projects ,setp] = useState(obj) ;


  return (
    <div className='pt-12' id='projects'>
    <div className=' container bg-dark text-light  p-3 rounded-3 px-5 '>
    <div  className=' '>
    <h1 className='text-start ms-2 my-4' >Projects</h1>
    <div className='d-flex flex-column justify-content-center
 align-items-center '>
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
