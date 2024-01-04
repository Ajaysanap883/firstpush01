import React from 'react'
import Logo from '../assets/logo.png'
import Btn from './button'

const navbar = () => {

 

  return (
    <div className='relative px-[10vw]  w-screen flex justify-between items-center border-b-[3px] border-[hsl(208,60%,22%)]'>
     <a href="# "><img className='logo w-[230px] h-[55px]' src={Logo}  /></a>

    <Btn />
     
     {/* <button onClick={freeTrail} className=' btn w-[200px]   items-center justify-center gap-[6.8px] py-2.5 bg-[#edcd54] rounded-[29.23px] my-4 font-semibold'>Get a Free Trail</button> */}

    </div>
  )
}

export default navbar