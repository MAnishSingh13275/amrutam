import React, { useState } from "react";
import Banner from "../Assets/Images/Banner.png";
import Profile from "../Assets/Images/Profile.png";
import { FaStar } from "react-icons/fa";
import { Radio, HStack, Box, Checkbox, Button } from "@chakra-ui/react";

const ProfileBar = () => {
  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState(0);

  return (
    <div className="mx-10">
      <div className="border border-[#EAF2EA] rounded-t-xl">
        <img src={Banner} className="w-full h-[15vh] rounded-t-xl" alt="" />
        <div className="w-full justify-between h-[20vh] bg-[#FFFBF2] flex">
          <div className="flex w-1/3">
            <div className="relative top-[-25%] mx-5">
              <img src={Profile} alt="" />
            </div>
            <div className="mt-5">
              <h1 className="text-left text-2xl font-semibold">Dr. John Doe</h1>
              <p className="text-left text-lg font-semibold">Dentist</p>
              <div className="flex justify-left items-center mt-2">
                <p className="mx-2 font-bold">{rating}</p>
                <HStack className="" spacing={"2px"}>
                  {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                      <Box
                        as="label"
                        key={index}
                        color={
                          ratingValue <= (hover || rating)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      >
                        <Checkbox
                          name="rating"
                          onChange={() => setRating(ratingValue)}
                          value={ratingValue}
                          display={"none"}
                        ></Checkbox>

                        <FaStar
                          cursor={"pointer"}
                          size={20}
                          transition="color 200ms"
                        />
                      </Box>
                    );
                  })}
                </HStack>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-1/4">
            <div>
              <p className="text-center text-[#3A643B] mt-5">Followers</p>
              <p className="text-center text-[#212529] font-bold">850</p>
            </div>
            <div>
              <p className="text-center text-[#3A643B] mt-5">Following</p>
              <p className="text-center text-[#212529] font-bold">18K</p>
            </div>
            <div>
              <p className="text-center text-[#3A643B] mt-5">Posts</p>
              <p className="text-center text-[#212529] font-bold">250</p>
            </div>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <Button bgColor={"#3A643B"} textColor={"#FFFFFF"} >Book an Appointment</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;