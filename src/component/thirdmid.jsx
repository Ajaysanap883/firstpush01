import React from 'react'
import filter from "../assets/filter.png";
import chat from "../assets/chat.png";
import website from "../assets/website.png";

const thirdmid = () => {
  return (
    <div>
      <div className="flex justify-center  tracking-wide mt-[13vh] h-[123px]">
        <div className=" box w-[313px] flex  justify-evenly items-center bg-[#F3F3F3]  rounded-lg">
          <div>
            <img className=" pr-5 border-r-2 border-lightgray" src={website} />
          </div>

          <div className="w-[163px] px-5 ">
            <span className="font-bold ">One-View</span> of the customer in{" "}
            <span className="font-bold">Salesforce</span>
          </div>
        </div>

        <div className="box w-[400px] rounded-lg   bg-[#F3F3F3] mx-[5vw] flex justify-evenly items-center">
          <div>
            <img className="  pr-5 border-r-2 border-lightgray" src={chat} />
          </div>
          <div className="w-[203px]">
            Empowers agents with <span>real-time</span> access to{" "}
            <span className="font-bold">social media conversations</span>
          </div>
        </div>

        <div className=" box w-[376px] flex justify-evenly  bg-[#F3F3F3] items-center rounded-lg ">
          <div>
            <img className=" px-5 border-r-2 border-lightgray" src={filter} />
          </div>

          <div className="w-[210px]">
            <span className="font-bold">Lead generation </span> from social
            media created as opportunities in{" "}
            <span className="font-bold">SFDC</span>
          </div>
        </div>
      </div>
      
      <div className="button mt-16">
        <button className="btn  w-[230px] text-black items-center justify-center  py-3 bg-[#edcd54] rounded-[29.23px] my-3 font-bold">
          Get a Free Trail
        </button>
        <div className="font-semibold tracking-wider">
          <a href="#">NO CC REQUIRED</a>
        </div>
      </div>
    </div>
  )
}

export default thirdmid