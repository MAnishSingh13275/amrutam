import React, { useState, useEffect } from "react";

const TimeSlots = ({ Slots }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [morningTimes, setMorningTimes] = useState([]);
  const [eveningTimes, setEveningTimes] = useState([]);

  useEffect(() => {
    const generateTimes = (startHour, endHour, count) => {
      const times = Array.from({ length: count }, () => getRandomTime(startHour, endHour));
      return times;
    };

    // Generate morning and evening times when Slots prop changes
    if (Slots !== null) {
      const morningCount = Math.ceil(Slots / 2);
      const eveningCount = Slots - morningCount;

      setMorningTimes(generateTimes(9, 12, morningCount));
      setEveningTimes(generateTimes(13, 17, eveningCount));
    }
  }, [Slots]);

  const getRandomTime = (startHour, endHour) => {
    const hours = String(Math.floor(Math.random() * (endHour - startHour) + startHour)).padStart(2, "0");
    const minutes = String(Math.floor(Math.random() * 60)).padStart(2, "0");
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours}:${minutes} ${period}`;
  };

  const morningSlots = morningTimes.map((time, index) => (
    <button
      onClick={() => setSelectedTime(index)}
      key={index}
      className={`flex justify-center items-center p-3 mx-1 border border-[#EAF2EA] rounded-3xl my-2 
        ${index === selectedTime ? "bg-[#3A643B] text-white" : ""}
        lg:p-5 lg:mx-2`}
    >
      {time}
    </button>
  ));

  const eveningSlots = eveningTimes.map((time, index) => (
    <button
      onClick={() => setSelectedTime(index + morningTimes.length)}
      key={index}
      className={`flex justify-center items-center p-3 mx-1 border border-[#EAF2EA] rounded-3xl my-2 
        ${index + morningTimes.length === selectedTime ? "bg-[#3A643B] text-white" : ""}
        lg:p-5 lg:mx-2`}
    >
      {time}
    </button>
  ));

  return (
    <div>
      {Slots !== null && (
        <div>
          <div className="flex flex-col">
            {/* Morning Slots */}
            <div className="flex-1 m-3 lg:m-5">
              <h3 className="text-lg font-semibold m-3 my-5 lg:m-5 lg:my-10">Morning</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">{morningSlots}</div>
            </div>

            {/* Evening Slots */}
            <div className="flex-1 m-3 lg:m-5">
              <h3 className="text-lg font-semibold m-3 my-5 lg:m-5 lg:my-10">Evening</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">{eveningSlots}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSlots;
