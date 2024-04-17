import React from "react";
import Navbar from "../Components/Navbar";
import ProfileBar from "../Components/ProfileBar";
import Aboutme from "../Components/Aboutme";
import Specialization from "../Components/Specialization";
import Concerns from "../Components/Concerns";
import Experience from "../Components/Experience";
import Reviews from "../Components/Reviews";
import Appointment from "../Components/Appointment";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <ProfileBar />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Aboutme />
          <Specialization />
          <Concerns />
          <Experience />
          <Reviews />
        </div>
        <div className="w-full md:w-1/2">
          <Appointment />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
