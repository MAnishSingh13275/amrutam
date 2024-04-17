import React from "react";
import { BiBuildingHouse } from "react-icons/bi";

const Experience = () => {
  const Experiences = [
    {
      place: "Sanjivni Hospital",
      title: "Hair Treatment",
      from: "2022",
      till: "present",
      id: 1,
    },
    {
      place: "Sanjivni Hospital",
      title: "senior Gynaecologist",
      from: "2018",
      till: "2022",
      id: 2,
    },
  ];

  return (
    <div className="mx-10 mt-5 border border-[#EAF2EA] rounded-xl">
      <div className="bg-gradient-to-r  to-[#FBFCFB] from-[#F4F7EC] rounded-t-xl">
        <div className="flex justify-between mx-5 p-2 ">
          <p className="text-2xl font-semibold ">My Work Experience</p>
        </div>
      </div>

      <div className="mt-10 mx-5 md:w-3/4">
        <h1 className="text-[#3A643B] lg:text-xl font-semibold">
          I have been in practice for : 7+ Years
        </h1>
        <div className="bg-[#3A643B] w-full h-[1px] mt-4"></div>
      </div>

      <div className="flex flex-col justify-center my-5 mx-5 md:w-3/4">
        {Experiences.map((exp) => (
          <div key={exp.id} className="flex justify-between items-center my-2">
            <div className="flex items-start md:items-center ">
              <div className="bg-[#2E37A4]/[4%] p-3 mx-2 md:m-2 rounded-lg">
                <BiBuildingHouse size={22} />
              </div>
              <div>
                <p className=" text-sm lg:text-xl">{exp.place}</p>
                <p className="text-sm font-semibold text-gray-400">
                  {exp.title}
                </p>
              </div>
            </div>
            <div className="">
              <p className="text-xs font-semibold text-gray-400">
                {exp.from}-{exp.till}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
