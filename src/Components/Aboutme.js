import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { FiPlus } from "react-icons/fi";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";

const Aboutme = () => {
  const Language = ["English", "Hindi", "Telugu"];
  return (
    <div className="mx-10 mt-5 border border-[#EAF2EA] rounded-xl ">
      <div className="bg-gradient-to-r  to-[#FBFCFB] from-[#F4F7EC] rounded-t-xl">
        <div className="flex justify-between items-center mx-5 p-2 ">
          <p className="text-md md:text-xl lg:text-2xl font-semibold ">A Little About Me</p>
          <Button className="w-[20vw] md:w-[15vw]" bgColor={"#FFFFFF"} variant={"outline"}>
            <p className="flex text-sm md:text-lg justify-center items-center gap-2">
              Follow <FiPlus />
            </p>
          </Button>
        </div>
      </div>
      <div>
        <Accordion allowToggle>
          <AccordionItem border={"none"}>
            <h2>
              <Box className="m-5">
                <p className="text-sm md:text-lg text-[#333548]">
                  Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni
                  Hospital Surat. love to work with all my hospital staff and
                  seniour doctors. Completed my graduation in Gynaecologist
                  Medicine from the.....
                </p>
              </Box>
              <div className="flex justify-center items-center">
                <div className="bg-[#797979] w-[75%] h-[0.1px] my-2  "></div>
                <div>
                  <AccordionButton py={0} className="w-full h-full rounded-xl">
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-semibold text-xs lg:text-sm xl:text-lg">Read More</p>
                      <div className="bg-[#797979] w-full h-[1px]"></div>
                    </div>
                  </AccordionButton>
                </div>
              </div>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="md:flex mx-5 my-10">
        <div>
          <p>Language Spoken</p>
        </div>
        <div className="flex justify-between items-center md:mx-5 gap-3 my-2 md:my-0">
          {Language.map((lang) => (
            <div key={Math.random()} className="bg-[#2E37A4]/[4%] px-5 py-1 mb-2 rounded-lg">
              <p>{lang}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center md:justify-normal mx-5 gap-5 my-5 ">
        <div className="bg-[#2E37A4]/[4%] p-3 outline-[#8E8E8E] rounded-full">
          <SlSocialFacebook />
        </div>
        <div className="bg-[#2E37A4]/[4%] p-3 outline-[#8E8E8E] rounded-full">
          <SlSocialInstagram />
        </div>
        <div className="bg-[#2E37A4]/[4%] p-3 outline-[#8E8E8E] rounded-full">
          <SlSocialYoutube />
        </div>
        <div className="bg-[#2E37A4]/[4%] p-3 outline-[#8E8E8E] rounded-full">
          <SlSocialTwitter />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
