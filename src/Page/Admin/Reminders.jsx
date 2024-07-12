import React from "react";
import { IoIosMore } from "react-icons/io";

const Reminders = () => {
  return (
    <article className="bg-white  overflow-hidden    p-5">
      <div className="flex items-center justify-between text-gray-600 px-3 mb-4">
        <h1 className="text-xl font-semibold text-gray-400">Expenses</h1>
        <IoIosMore className="size-4" />
      </div>
      <div className="py-3">
        <button className="rounded bg-[#40DFCD] px-6 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#48c9ba]">15 Jun, 2024</button>
        <p className="my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="py-3">
        <button className="rounded bg-[#FBD540] px-6 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#efcd47]">15 Jun, 2024</button>
        <p className="my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="py-3">
        <button className="rounded bg-[#F939A1] px-6 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#f049a2]">15 Jun, 2024</button>
        <p className="my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </article>
  );
};

export default Reminders;
