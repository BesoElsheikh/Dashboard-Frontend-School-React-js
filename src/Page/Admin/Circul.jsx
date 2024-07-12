import React from "react";
import { IoIosMore } from "react-icons/io";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Circul = () => {
  return (
    <div className="shadow-lg p-3 bg-white rounded-md w-full">
      {/* Top */}
      <div className="flex items-center justify-between text-gray-600 ">
        <h1 className="text-xl font-semibold">Student</h1>
        <IoIosMore className="size-4" />
      </div>
      {/* Bottom */}
      <div className="p-3">
        <div className="w-full h-full">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={3} />
        </div>
        <div className="flex justify-between pt-4">
          <div className="flex flex-col gap-y-3">
            <hr className="bg-blue-600 h-1" />
            <p className="text-gray-500">Female</p>
            <p className="font-semibold text-lg">30,000</p>
          </div>
          <div className="flex items-center">|</div>
          <div className="flex flex-col gap-y-3">
            <hr className="bg-red-600 h-1" />
            <p className="text-gray-500">male</p>
            <p className="font-semibold text-lg">20,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circul;
