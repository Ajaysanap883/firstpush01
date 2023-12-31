import React from 'react'
import setting from '../assets/setting.png'
import reload from '../assets/reload.png'
import tag from '../assets/tag.png'
import phone from '../assets/phone.png'
import contact from '../assets/contact.png'

const stwo = () => {
  return (
    <div>
      <div className='ml-6 w-screen mt-[120px] h-[160px] flex justify-center'>

<div className=' w-[153px]  text-center mx-[50px] ' >
  <img className='icons ml-12 mb-2' src={setting} />
  <span className=''>Create rules to automate pushing tickets</span>
</div>

<div className='   text-center px-[100px]   border-x-[1px] border-lightgray' >
  <img className='icons ml-11 mb-5 ' src={reload} />
  <span className='w-[141px] flex '>Seamlessly sync status in both systems</span>
</div>

<div className='  text-center  px-[100px] ' >
  <img className='icons ml-6 mb-3.5 ' src={tag} />
  <span className='w-[97px] flex '>Achieve field/object mapping</span>
</div>

<div className='  text-center px-[100px] border-l-[1px] border-lightgray ' >
  <img className='icons ml-12 mb-3 ' src={phone} />
  <span className='w-[158px] flex '>Respond to social
    media tickets from
    salesforce</span>
</div>

<div className='  text-center  px-[80px]  border-l-[1px] border-lightgray' >
  <img className='icons ml-11 mb-4 ' src={contact} />
  <span className='w-[145px] flex '>Send social media tickets & contacts to Salesforce</span>
</div>



 
</div>
    </div>
  )
}

export default stwo