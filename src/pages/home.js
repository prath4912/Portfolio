import React from 'react'
import "./home.css" 
export default function home(props) {
  return (
    <div className='dh4'>
    <div  className='dh2'>
      <div className='dh3'>
      <h4 className='hh1'>Prathmesh Sunil Pawar</h4>
      <p className='ph1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quaerat, asperiores magnam eius ipsam expedita saepe ut nemo ex ratione illo placeat a, doloribus aut perspiciatis impedit dolores blanditiis temporibus exercitationem. Doloremque nulla corporis totam. Quam corrupti modi magni labore minima culpa itaque dolorum doloremque sapiente eaque. Officia, rem nam!</p>
      </div>
      <div><img src={props.p1} alt=""  /></div>
      </div>
      </div>
  )
}
