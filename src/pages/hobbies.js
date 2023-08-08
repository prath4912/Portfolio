import React from 'react'
import c1 from "./p2.jpg"
import c2 from "./p3.jpg"
import c3 from "./p6.jpg"


export default function hobbies() {
  return (
    <div id='hobbies'>
        <h1>Hobbies</h1>
    <div className='container  mb-3 d-flex flex-row justify-content-around'>
      {hob.map((ha)=>{
        return (
            <div className="cri1  card" style={{width: "18rem"}}>
    <img src={ha.link} className="card-img-top" alt="..."/>
    <div className="cri1 bg-dark-subtle bg-gradient card-body">
    <h5 className=" card-title">{ha.title}</h5>
  </div>
</div>
        );
      })}
    </div>
    </div>
  )
}


const hob =[
    {
        title : "cricket" ,
        link : c1 
    },
    {
        title : "Treking" ,
        link : c2
    },
    {
        title : "Cycling" ,
        link : c3
    }
]