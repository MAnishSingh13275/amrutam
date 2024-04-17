import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Mode = () => {
  const [mode, setMode] = useState("");
  const Modes = [
    {
      name: "In-Clinic",
      duration: "30 mins",
      id: "1",
    },
    {
      name: "Video",
      duration: "30 mins",
      id: "2",
    },
    {
      name: "Chat",
      duration: "30 mins",
      id: "3",
    },
  ];
  console.log(mode);

  return (
    <div className="flex flex-col justify-center items-center lg:flex-row gap-5 mx-5">
      {Modes.map((Sessionmode) => (
        <div
          key={Sessionmode.id}
          className={`mx-5 h-[5vh] md:h-[12vh] w-full flex border border-[#EAF2EA] rounded-xl ${
            Sessionmode.id === mode ? "bg-[#F2FBF2] border-[#3A643B]/[52%]" : ""
          } `}
        >
          <button
            onClick={() => {
              setMode(Sessionmode.id);
            }}
            className="rounded-xl md:text-lg w-full flex flex-col justify-center items-center"
          >
            <div className="flex items-center justify-center gap-3">
              <p className="text-xs lg:text-xl font-semibold">
                {Sessionmode.name}
              </p>
              <FaCheckCircle className={`${Sessionmode.id === mode ? "":"hidden"}`} color="#3A643B" />
            </div>
            <p className="text-xs lg:text-lg">{Sessionmode.duration}</p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Mode;
