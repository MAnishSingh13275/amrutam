import { Box, Checkbox, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const [hover, setHover] = useState(null);

  const Review = [
    {
      Profile: "https://www.w3schools.com/w3images/avatar2.png",
      Name: "John Doe",
      Concern: "Hair Treatment",
      rating: "5",
      Review:
        "Dr. John is a very good doctor. He is very polite and listens to the patient's problems very carefully. I had a very good reverience with him.",
      Date: "2022-02-02",
    },
    {
      Profile: "https://www.w3schools.com/w3images/avatar2.png",
      Name: "John Doe",
      Concern: "Hair Treatment",
      rating: "3",
      Review:
        "Dr. John is a very good doctor. He is very polite and listens to the patient's problems very carefully. I had a very good reverience with him.",
      Date: "2022-02-02",
    },
  ];

  return (
    <div className="mx-10 mt-5 border border-[#EAF2EA] rounded-xl">
      <div className="bg-gradient-to-r  to-[#FBFCFB] from-[#F4F7EC] rounded-t-xl">
        <div className="flex justify-between mx-5 p-2 ">
          <p className="text-2xl font-semibold ">Featured Reviews (102)</p>
        </div>
      </div>

      <div className="flex flex-col justify-center my-5 mx-10">
        {Review.map((rev) => (
          <div className="bg-[#FAFAFA] p-5 my-2 rounded-lg">
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-5 justify-center items-center">
                <img
                  src={rev.Profile}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />

                <div>
                  <p className="text-xl">{rev.Name}</p>
                  <p className="text-sm font-semibold text-gray-400">
                    {rev.Concern}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-400">
                  {rev.Date}
                </p>
              </div>
            </div>
            <div className="my-5">
              <HStack className="" spacing={"2px"}>
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <Box
                      as="label"
                      key={index}
                      color={ratingValue <= rev.rating ? "#ffc107" : "#e4e5e9"}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    >
                      <Checkbox
                        name="rating"
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

              <div>
                <p className="text-sm my-2 font-semibold text-gray-400">
                  {rev.Review}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
