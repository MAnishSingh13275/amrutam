import React from "react";

const Concerns = () => {
  const Treatments = [
    "Skin Treatment",
    "Hair Treatment",
    "Pregnancy Care",
    "Period Doubts",
    "Endometriosis",
    "PCOS",
    "Menopause",
    "Infertility",
    "Sexual Health",
    "Menstrual Disorders",
  ];
  return (
    <div className="mx-10 mt-5 border border-[#EAF2EA] rounded-xl">
      <div className="bg-gradient-to-r  to-[#FBFCFB] from-[#F4F7EC] rounded-t-xl">
        <div className="flex justify-between mx-5 p-2 ">
          <p className="text-2xl font-semibold ">The Concerns I Treat</p>
        </div>
      </div>

      <div className="grid grid-cols-3 my-5 justify-between items-center mx-5">
        {Treatments.map((treatments) => (
          <div className="bg-[#2E37A4]/[4%] px-5 py-1 m-2 rounded-lg">
            <p>{treatments}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Concerns;
