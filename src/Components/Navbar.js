import React from "react";
import LOGO from "../Assets/Images/Logo.png";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="bg-[#FFF7E2]">
      <div className=" mx-5 md:flex justify-between items-center p-3 mb-5 ">
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center w-full md:w-1/3">
          <img src={LOGO} alt="AMRUTAM" className="w-20 md:w-40" />
        </div>

        <div className="flex justify-between items-center w-full my-2 md:w-1/4">
          <Link to="/" className="text-lg font-semibold text-[#3A643B]">
            Home
          </Link>
          <Link to="/finddoc" className="text-lg font-semibold text-[#3A643B]">
            Find Doctors
          </Link>
          <Link to="/aboutus" className="text-lg font-semibold text-[#3A643B]">
            About Us
          </Link>
        </div>
        <div className="md:flex justify-center md:justify-end gap-5 items-center w-full md:w-1/3 md:mr-5 hidden">
          <Button
            color={"#3A643B"}
            textColor={"#3A643B"}
            outlineColor={"#3A643B"}
            variant="outline"
            _hover={{
              bgColor: "none",
              opacity: "0.8",
            }}
          >
            Login
          </Button>
          <Button
            bgColor={"#3A643B"}
            textColor={"#FFFFFF"}
            _hover={{
              bgColor: "#3A643B",
              opacity: "0.8",
            }}
          >
            Sign-up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
