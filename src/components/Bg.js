import React from 'react'
import Typewriter from 'typewriter-effect'

export default function Bg() {
  return (
    <div id='bg' className='bd1'>
     <h1 className='fw-bold  text text-light '>Prathmesh Pawar</h1>
     <p className='text-light fs-4 fw-bold'><Typewriter
  options={{
    strings: ['Computer Engineer Student', 'Passionate Full Stack Developer'],
    autoStart: true,
    loop: true,
    deleteSpeed	:50 ,
    delay : 50
  }}
/></p>
     
    </div>
  )
}
