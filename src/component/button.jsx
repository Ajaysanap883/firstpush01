import React from 'react'

const button = () => {

  function freeTrail(){
    window.open('#') 
  }

  return (
    <div>
     <button onClick={freeTrail} className='  w-[170px] text-black items-center justify-center  py-2.5 bg-[#edcd54] rounded-[29.23px] my-3 font-semibold'>Get a Free Trail</button>
    </div>
  )
}

export default button