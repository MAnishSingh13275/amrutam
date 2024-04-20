import React, { useState, useRef, useEffect } from "react";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import TimeSlots from "./TimeSlots";

const DateSlot = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [slots, setSlots] = useState([]);
  const [slotStartIndex, setSlotStartIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const scrollRef = useRef(null);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const formattedDate = `${
      weekdays[date.getDay()]
    }, ${date.getDate()} ${date.toLocaleString("default", { month: "short" })}`;
    return formattedDate;
  });

  const visibleDates = dates.slice(startIndex, startIndex + 3);
  const visibleSlots = slots.slice(slotStartIndex, slotStartIndex + 3);

  const generateRandomSlots = () => {
    const newSlots = dates.map(() => Math.floor(Math.random() * 10) + 1);
    setSlots(newSlots);
  };

  useEffect(() => {
    generateRandomSlots();
  }, []);

  const getSlotColor = (slotCount) => {
    if (slotCount < 4) return "text-red-500";
    if (slotCount < 7) return "text-yellow-500";
    return "";
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedSlot(slots[dates.indexOf(date)]);
  };

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    setSlotStartIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) =>
      prevIndex === dates.length - 3 ? prevIndex : prevIndex + 1
    );
    setSlotStartIndex((prevIndex) =>
      prevIndex === slots.length - 3 ? prevIndex : prevIndex + 1
    );
  };

  console.log(slots);
// flex flex-col md:flex-row gap-4 md:gap-6 border border-[#EAF2EA] rounded-xl p-4 md:p-5 
  return (
    <div className="container w-full mx-auto px-4">
      <div className="flex w-full justify-between">
        <button onClick={handlePrevClick} className="py-2 px-3 md:px-4 w-[5 %]">
          <IoChevronBackCircleOutline size={20} />
        </button>

        <div className="flex flex-col justify-center items-center w-[90%]">
          <div
            className="flex justify-around overflow-x-auto md:overflow-hidden"
            ref={scrollRef}
          >
            {visibleDates.map((date, index) => (
              <button
                key={date}
                onClick={() => handleDateClick(date)}
                className={`flex flex-col justify-center items-center w-full m-1 xl:w-[50%] p-3 xl:px-4 rounded-xl  border border-[#EAF2EA] ${
                  date === selectedDate ? "bg-[#F2FBF2] border-[#3A643B]" : ""
                }`}
              >
                <p className="text-xs xl:text-sm font-semibold">{date}</p>
              </button>
            ))}
          </div>
          <div className="flex justify-around w-full lg:w-[70%]">
            {visibleSlots.map((slot, index) => (
              <div
                className={`text-[10px] xl:text-base mx-2 ${getSlotColor(slot)}`}
              >
                <h2 className="">{slot} Slots</h2>
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleNextClick} className="py-2 px-3 md:px-4 w-[5 %]">
          <IoChevronForwardCircleOutline size={20} />
        </button>
      </div>
      <TimeSlots Slots={selectedSlot} />
    </div>
  );
};

export default DateSlot;
