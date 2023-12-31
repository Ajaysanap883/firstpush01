import React from 'react'
import Btn from './button'

const form = () => {
  return (
    <div>
      <form action='#' >

<label className='my-2 block opacity-75'>Fullname </label>
<input placeholder='Gautam' className='px-6 bg-[#153959] w-full rounded-[9.42px] h-[48px] ' type="text" required/>

<label className='my-2 block opacity-75'>Email </label>
<input placeholder='yourid@mail.com' className='peer px-6 bg-[#153959] w-full rounded-[9.42px] h-[48px]' type="email" required />

<label className='my-2 block opacity-75'>Mobile </label>
<input placeholder='000-000-0000' className=' px-6 bg-[#153959] w-full rounded-[9.42px] h-[48px]' type='tel' maxLength={10} required   autoSave=''/>
{/* pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" */}

<label className='my-2 block opacity-75'>Company Name </label>
<input placeholder='Alpha' className='px-6 bg-[#153959] w-full rounded-[9.42px] h-[48px]' type="text" />

<div className='w-full flex-col mt-3 '>
<span className='w-full flex justify-end'> 
<Btn/>
</span>
<div className='text-yellow w-full flex justify-end font-bolder pr-6'>No CC Required</div>
</div>




</form>    
    </div>
  )
}

export default form