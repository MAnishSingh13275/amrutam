import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import {
  Box,
  Select,
  Icon,
  InputLeftElement,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import FindDocFilter from "../Components/FindDoc/FindDocFilter";
import FilteredDoc from "../Components/FindDoc/FilteredDoc";

const locations = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
];

const FindDoc = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangeLocation = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <Box className="bg-Banner w-full h-[30vh] bg-cover flex flex-col justify-center items-center capitalize gap-5 px-4 md:px-10 lg:px-20">
        <h2 className="font-bold text-2xl xl:text-4xl text-center">
          Find expert Doctors for an In-clinic session here
        </h2>
        <Box className="flex md:w-[60%] flex-col md:flex-row w-full justify-center items-center gap-5 mt-5">
          <InputGroup
            w={{
              base: "100%",
              md: "50%",
            }}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaMapMarkerAlt} />}
              bg={"#FFFFFF"}
              borderRadius={"0.375rem 0 0 0.375rem"}
              
            />
            <Select
              placeholder="Select location"
              value={selectedLocation}
              onChange={handleChangeLocation}
              variant="filled"
              pl={6}
              
              bgColor={"white"}
              _hover={{
                bgColor: "white",
              }}
              _focus={{
                bgColor: "white",
              }}
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          </InputGroup>
          <Box
            w={{
              base: "100%",
              md: "50%",
            }}
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={FaSearch} color="gray.300" />}
              />
              <Input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChangeSearch}
                variant="filled"
                px={2}
                bgColor="white"
                _hover={{
                  bgColor: "white",
                }}
                _focus={{
                  bgColor: "white",
                }}
              />
            </InputGroup>
          </Box>
        </Box>
      </Box>
      <FindDocFilter />
      <FilteredDoc />
    </div>
  );
};

export default FindDoc;
