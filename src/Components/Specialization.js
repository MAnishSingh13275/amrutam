import React from "react";
import Women from "../Assets/Images/Women.png";
import Hair from "../Assets/Images/Hair.png";
import Skincare from "../Assets/Images/Skincare.png";
import Immunity from "../Assets/Images/Immunity.png";

const Specialization = () => {
  return (
    <div className="mx-10 mt-5 border border-[#EAF2EA] rounded-xl">
      <div className="bg-gradient-to-r  to-[#FBFCFB] from-[#F4F7EC] rounded-t-xl">
        <div className="flex justify-between mx-5 p-2 ">
          <p className="text-2xl font-semibold ">I Specialize In</p>
        </div>
      </div>

      <div className="flex justify-between w-[75%] my-10 mx-5 ">
        <div className="text-center">
          <div className="bg-[#FDF8E5] flex justify-center items-center p-3 mx-5 rounded-lg">
            <img src={Women} alt="" />
          </div>
          <p className="mt-3 text-md">Women's Health</p>
        </div>
        <div className="text-center">
          <div className="bg-[#FDF8E5] flex justify-center items-center p-3 mx-5 rounded-lg">
            <img src={Skincare} alt="" />
          </div>
          <p className="mt-3 text-md">Skin Care</p>
        </div>
        <div className="text-center">
          <div className="bg-[#FDF8E5] flex justify-center items-center p-3 mx-5 rounded-lg">
            <img src={Immunity} alt="" />
          </div>
          <p className="mt-3 text-md">Immunity</p>
        </div>
        <div className="text-center">
          <div className="bg-[#FDF8E5] flex justify-center items-center p-3 mx-5 rounded-lg">
            <img src={Hair} alt="" />
          </div>
          <p className="mt-3 text-md">Hair Care</p>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
