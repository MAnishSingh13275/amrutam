import React, { useState } from "react";
import {
  Box,
  Select,
  FormControl,
  FormLabel,
  Center,
  VStack,
  InputGroup,
  InputLeftElement,
  Icon,
  CloseButton,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const expertiseOptions = ["Beginner", "Intermediate", "Advanced"];
const genderOptions = ["Male", "Female", "Other"];
const feesOptions = ["Free", "₹600", "₹800", "₹900"];
const languagesOptions = ["English", "Hindi", "French", "German", "Other"];

const FindDocFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    expertise: "",
    gender: "",
    fees: "",
    languages: "",
  });

  const handleChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const removeFilter = (filterType) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: "",
    }));
  };

  return (
    <div>
      <div className="w-full">
        <Box className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 xl:w-[70%] mx-5 md:mx-10 xl:mx-auto my-5">
          <Select
            placeholder="Expertise"
            value={selectedFilters.expertise}
            onChange={(e) => handleChange("expertise", e.target.value)}
            bg={"#F3F3F3"}
          >
            {expertiseOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>

          <Select
            placeholder="Gender"
            value={selectedFilters.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
            bg={"#F3F3F3"}
          >
            {genderOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>

          <Select
            placeholder="Fees"
            value={selectedFilters.fees}
            onChange={(e) => handleChange("fees", e.target.value)}
            bg={"#F3F3F3"}
          >
            {feesOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>

          <Select
            placeholder="Languages"
            value={selectedFilters.languages}
            onChange={(e) => handleChange("languages", e.target.value)}
            bg={"#F3F3F3"}
          >
            {languagesOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>

          <Select placeholder="All Filters" isDisabled>
            {/* Add options if needed */}
          </Select>
        </Box>
      </div>
      <div className="flex w-full justify-end">
        <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-2 mx-auto md:mr-10">
          {Object.entries(selectedFilters).map(
            ([key, value]) =>
              value && (
                <div
                  key={key}
                  className="bg-[#EAF2EA] w-full flex justify-center items-center rounded-3xl px-3 gap-2"
                >
                  <p className="text-gray-500 font-semibold">{value}</p>

                  {value && <CloseButton onClick={() => removeFilter(key)} />}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default FindDocFilter;
