import React from "react";
import Navbar from "../Components/Navbar";
import ProfileBar from "../Components/ProfileBar";
import Aboutme from "../Components/Aboutme";
import Specialization from "../Components/Specialization";
import Concerns from "../Components/Concerns";
import Experience from "../Components/Experience";
import Reviews from "../Components/Reviews";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <ProfileBar />
      <div className="flex">
        <div className="w-1/2">
          <Aboutme />
          <Specialization />
          <Concerns />
          <Experience />
          <Reviews />
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default Homepage;
