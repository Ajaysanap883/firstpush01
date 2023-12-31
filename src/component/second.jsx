import React from "react";

import Sone from "./sone";
import Stwo from "./stwo";

import mess from "../assets/mess.png";
import appstore from "../assets/appstore.png";
import api from "../assets/api.png";
import Staiers from "../assets/staiers.png";
import whatsapp from "../assets/whatsapp.png";
import telegram from "../assets/telegram.png";
import v from "../assets/v.png";
import reddit from "../assets/reddit.png";
import rectangle from "../assets/rectangle.png";
import playstore from "../assets/playstore.png";
import googlehome from "../assets/googlehome.png";
import blog from "../assets/blog.png";
import world from "../assets/world.png";
import youtube from "../assets/youtube.png";

const second = () => {
  return (
    <div className=" relative w-screen h-[98.4vh] ">
      <Sone />
      <Stwo />
      <div className="button mt-16">
        <button className="btn  w-[300px] text-black items-center justify-center  py-2.5 bg-[#edcd54] rounded-[29.23px] my-3 font-bold">
          Get a Free Trail
        </button>
        <div className="font-semibold tracking-wider">NO CC REQUIRED</div>
      </div>
      <div className="icon w-screen absolute h-[24vh]  bottom-0 bg-[#f4f4f4]">
        <div className="flex justify-center  font-semibold text-[20px]">
          3000+ INTEGRATIONS & 100% DATA COVERAGE ACROSS THE INTERNET!
        </div>

        <div className=" flex justify-evenly overflow-auto">
          <img className="icons" src={youtube} />
          <img className="message" src={mess} />
          <img className="icons" src={appstore} />
          <img className="icons" src={playstore} />
          <img className="icons" src={googlehome} />
          <img className="icons" src={blog} />
          <img className="icons" src={whatsapp} />
          <img className="icons" src={world} />
          <img className="icons" src={v} />
          <img className="icons" src={Staiers} />
          <img className="icons" src={api} />
          <img className="icons" src={telegram} />
          <img className="icons" src={reddit} />
          <img className="icons" src={rectangle} />
        </div>
      </div>
    </div>
  );
};

export default second;
