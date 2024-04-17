import React from "react";
import Fee from "./Appointment/Fee";
import Mode from "./Appointment/Mode";
import { BiCalendar } from "react-icons/bi";
import DateSlot from "./Appointment/DateSlot";
import { Button } from "@chakra-ui/react";

const Appointment = () => {
  return (
    <div className="mx-10 mt-5 border border-[#EAF2EA] rounded-xl ">
      <Fee />
      <div className="flex items-center justify-normal my-10 ml-5 gap-2">
        <h1 className="font-bold text-sm lg:text-sm xl:text-lg w-fit">
          Select Your mode of session
        </h1>
        <div className="bg-[#D4D4D4] w-[30%] md:w-[50%] xl:w-[50%] h-[1px] "></div>
      </div>
      <Mode />
      <div className="flex items-center justify-normal my-10 ml-5 gap-2">
        <h1 className="font-bold text-sm lg:text-sm xl:text-lg w-fit">
          Pick a Time slot
        </h1>
        <div className="bg-[#D4D4D4] w-[45%] md:w-[60%] xl:w-[60%] h-[1px] "></div>
        <div className="border border-[#D4D4D4] rounded-full p-1 ">
          <BiCalendar size={20} />
        </div>
      </div>
      <DateSlot />
      <div className=" flex justify-center items-center my-5">
        <Button
          className="w-[50%] py-7"
          bgColor={"#3A643B"}
          textColor={"#FFFFFF"}
          _hover={{
            bgColor: "#3A643B",
            opacity: "0.8",
          }}
        >
          Make an Appointment
        </Button>
      </div>
    </div>
  );
};

export default Appointment;
