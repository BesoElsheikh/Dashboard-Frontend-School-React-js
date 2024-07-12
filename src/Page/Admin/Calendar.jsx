import React from "react";
import { IoIosMore } from "react-icons/io";
import './Admin.css';
const Calendar = () => {
  const daysInMonth = [
    28, 29, 30, 1, 2, 3, 4, 5, 28, 29, 30, 1, 2, 3, 4, 5, 28, 29, 30, 1, 2, 3,
    4, 5,
  ];

  return (
    <div className="bg-white shadow-lg py-9  mb-10">
      <div className="flex items-center justify-between text-gray-600 px-3 mb-4">
        <h1 className="text-md font-semibold text-gray-900">Event Calender</h1>
        <IoIosMore className="size-4" />
      </div>
      <div className="flex items-center justify-between text-gray-600 px-3 mb-10">
        <h1 className="text-md font-semibold text-blue-900">June 2024</h1>
        <IoIosMore className="size-4" />
      </div>
      <div className="grid grid-cols-7 gap-4 px-5 rounded-md ">
        <div className="text-gray-700 calendar">Sun</div>
        <div className="text-gray-700 calendar">Mon</div>
        <div className="text-gray-700 calendar">Tue</div>
        <div className="text-gray-700 calendar">Wed</div>
        <div className="text-gray-700 calendar">Thu</div>
        <div className="text-gray-700 calendar">Fri</div>
        <div className="text-gray-700 calendar">Sat</div>

        {daysInMonth.map((day, index) => (
          <div key={index} className="text-gray-700 calendar_num ">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
