import React from "react";
import mcd from '../assets/mcd.jpg'
import oppo from '../assets/oppo.png'
import air from '../assets/air.png'
import doo from '../assets/doo.png'
import ww from '../assets/ww.png'
import zomato from '../assets/zomato.png'
import honda from '../assets/honda.png'
import dec from '../assets/dec.png'



const footer = () => {
  return (
    <div className="relative top-[12vh] flex-col  ">

        <div className=" text-center  text-white tracking-[.3em]">TRUSTED BY 1000+ GLOBAL BRANDS</div>

        <div className="w-screen  flex justify-evenly box-border items-center mt-[6vh]   object-contain pl-3">

          <div  className="w-[120px] h-[38px] border-r-[1px] border-gray"><img   src={mcd} height={37} width={43} alt="macdonald" /></div> 
          <div className="w-[141px] h-[38px]   border-r-[1px] border-gray  "><img className="relative top-3" src={oppo} height={21} width={82} /></div>
          <div  className="w-[151px]  h-[38px]   border-r-[1px] border-gray"><img className="relative bottom-7 right-8"  src={air}  width={148}  /></div>
          <div  className="w-[151px]  h-[38px]   border-r-[1px] border-gray"><img  className="relative bottom-4 right-9" src={doo} height={26} width={150} /></div>
          <div  className="w-[145px]  h-[38px]   border-r-[1px] border-gray"><img className="relative left-3"  src={ww} height={26} width={39} /></div>
          <div  className="w-[151px]  h-[38px]   border-r-[1px] border-gray"><img className="relative right-2"  src={zomato} height={26} width={97}  /></div>
          <div  className="w-[131px]  h-[38px]   border-r-[1px] border-gray"><img  src={honda} height={44} width={67}  /></div>
          <div  className="w-[151px]  h-[38px]  "><img  src={dec} height={32} width={120} /></div>  
        </div>      
    </div>
  );
};

export default footer;
