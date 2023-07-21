import React from 'react'
import './footer.css'
import p3 from './th.jpg'

export default function footer() {
  return (
    <>
    <div className='df1'>
        <div className='df2'>
      <img src={p3} alt="" width='25px' /><li><a href="">Instagram</a></li></div>
      <div className='df2'>
      <img src={p3} alt="" width='25px' /><li><a href="">Linkdin</a></li></div>      <div className='df2'>
      <img src={p3} alt="" width='25px' /><li><a href="">Github</a></li></div>   
      <div className='df2'>
      <img src={p3} alt="" width='25px' /><li><a href="">Medium</a></li></div>    </div>
    <div className='fp12'>Developed By Prathmesh</div>
    </>
  )
}
