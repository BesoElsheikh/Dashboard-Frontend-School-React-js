import React from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { IoIosMore } from "react-icons/io";

const ChartCol = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 1400,
    },
    
    
    
  ];

  return (
    <div className="w-full  bg-white shadow-lg py-4 ">
      <div className="flex items-center justify-between text-gray-600 px-3 mb-20">
        <h1 className="text-xl font-semibold text-gray-400">Expenses</h1>
        <IoIosMore className="size-4" />
      </div>
      
      <ResponsiveContainer width="100%"   aspect={2 / 1}>
        <BarChart     height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar barSize={40}    dataKey="uv" fill="#82ca9d" />
          <Bar barSize={40}   dataKey="pv" fill="blue" />
          <Bar barSize={40}  dataKey="amt" fill="red" />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCol;
