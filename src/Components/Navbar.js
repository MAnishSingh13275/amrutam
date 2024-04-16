import React from "react";
import LOGO from "../Assets/Images/Logo.png";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="bg-[#FFF7E2]">
      <div className=" mx-5 flex justify-between items-center p-3 mb-5 ">
        <div className="flex justify-start items-center w-1/3">
          <img src={LOGO} alt="AMRUTAM" className="w-40" />
        </div>

        <div className="flex justify-between items-center w-1/4">
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
        <div className="flex justify-end gap-5 items-center w-1/3 mr-5">
          <Button
            color={"#3A643B"}
            textColor={"#3A643B"}
            outlineColor={"#3A643B"}
            variant="outline"
          >
            Login
          </Button>
          <Button bgColor={"#3A643B"} textColor={"#FFFFFF"}>
            Sign-up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
