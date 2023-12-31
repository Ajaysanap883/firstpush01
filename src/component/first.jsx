import React from 'react'
import Navbar from './navbar'
import Fmid from './fmid'
import Footer from './footer'

const first = () => {
  return (
  <>
    <div className='first relative w-screen h-screen [background:linear-gradient(180deg,rgb(29.2,48.83,72.25)_0%,rgb(18,24,38)_100%)] '>
      <Navbar/>
      <Fmid/>
      <Footer/>
      
    </div>
  </>
    
  )
}

export default first