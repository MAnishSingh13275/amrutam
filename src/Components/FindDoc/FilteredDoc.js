import React from "react";
import Profile from "../../Assets/Images/Profile.png";
import { TbBandage } from "react-icons/tb";
import { SlGraduation } from "react-icons/sl";
import { MdOutlineMessage } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { Img, Box, Flex, Grid, GridItem, Text, Button } from "@chakra-ui/react";

const doctors = [
  {
    profilePicture: Profile,
    name: "Dr. John Doe 1",
    expertise: "Male-Female Infertility",
    experience: "5 years of experience",
    speaks: "English, Hindi, French",
    videoFee: 600,
    chatFee: 400,
  },
  {
    profilePicture: Profile,
    name: "Dr. Jane Doe 2",
    expertise: "Male-Female Infertility",
    experience: "10 years of experience",
    speaks: "English, Hindi, French",
    videoFee: 800,
    chatFee: 500,
  },
  {
    profilePicture: Profile,
    name: "Dr. John Doe 3",
    expertise: "Male-Female Infertility",
    experience: "5 years of experience",
    speaks: "English, Hindi, French",
    videoFee: 600,
    chatFee: 400,
  },
];

const FilteredDoc = () => {
  return (
    <Box className="h-full my-5 px-4 lg:px-0">
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="center"
        alignItems="center"
        gap={4}
      >
        {doctors.map((doctor) => (
          <Box
            key={doctor.name}
            flex={{ base: 1, lg: 1 / 3 }}
            maxWidth={{ base: "100%", lg: "30%" }}
            className="mx-5 flex flex-col items-center justify-center bg-[#FFF7E2] py-5 px-5 rounded-3xl border border-[#E3E3E3] text-[#646665]"
          >
            <Img src={doctor.profilePicture} w={120} h={120} alt="doctor" />
            <Box className="bg-black text-white p-1 px-3 rounded-3xl relative top-[-5%]">
              4.5 ⭐
            </Box>
            <Text className="text-3xl my-2 font-semibold text-[#2E2F2E]">
              {doctor.name}
            </Text>
            <Box className="w-full flex flex-col gap-5 items-end">
              <Box className="w-[90%]">
                <Flex justify="start" align="center" gap={2}>
                  <TbBandage color="#3A643B" />
                  <Text>{doctor.expertise}</Text>
                </Flex>
                <Flex justify="start" align="center" gap={2}>
                  <SlGraduation color="#3A643B" />
                  <Text>{doctor.experience}</Text>
                </Flex>
                <Flex justify="start" align="center" gap={2}>
                  <MdOutlineMessage color="#3A643B" />
                  <Text>Speaks: {doctor.speaks}</Text>
                </Flex>
              </Box>
              <Flex justify={"center"} w="full" gap={2}>
                <Box className="flex flex-col justify-center items-center p-1 px-2 border border-[#3A643B] rounded-xl">
                  <Text fontSize="sm">Video Consultation</Text>
                  <Flex justify="center" align="center">
                    <BiRupee color="#3A643B" />
                    <Text className="text-[#3A643B] text-sm font-semibold">
                      {doctor.videoFee}
                    </Text>
                  </Flex>
                </Box>
                <Box className="flex flex-col justify-center items-center p-1 px-2 border border-[#3A643B] rounded-xl">
                  <Text fontSize="sm">Chat Consultation</Text>
                  <Flex justify="center" align="center">
                    <BiRupee color="#3A643B" />
                    <Text className="text-[#3A643B] text-sm font-semibold">
                      {doctor.chatFee}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box className="flex flex-col w-full">
              <button className="text-[#3A643B] font-semibold bg-white border border-[#3A643B] px-5 py-2 rounded-lg mt-5">
                View Profile
              </button>
              <button className="bg-[#3A643B] font-semibold text-white px-5 py-2 rounded-lg mt-5">
                Book a Consultation
              </button>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default FilteredDoc;
