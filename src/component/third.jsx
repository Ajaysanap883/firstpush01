import React from "react";
import Tfooter from './tfooter'
import Thirdhead from './thirderhead'
import Thirdmid from "./thirdmid";

const third = () => {
  return (
    <div className="w-screen h-[85vh]">
      <Thirdhead/>
      <Thirdmid/>
      <Tfooter/>  
    </div>
  );
};

export default third;
