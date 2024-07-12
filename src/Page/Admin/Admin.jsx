import React, { useEffect, useState } from "react";
import { HiUsers } from "react-icons/hi";
import { GiTeacher } from "react-icons/gi";
import { IoSchool } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import Circul from "./Circul";
import Chart from "./Chart";
import ChartCol from "./ChartCol";
import Calendar from "./Calendar";
import Reminders from "./Reminders";
 import { useDispatch, useSelector } from "react-redux";
import { getParents, getStudents, getTeacer } from "../../store/adminSlice";
import { getExpenses } from "../../store/expensesSlice";
const Admin = () => {
  const dispatch = useDispatch();  
  useEffect(() => {
    const fetchData = async () => {
      try {
            await dispatch(getStudents());
            await dispatch(getParents());
            await dispatch(getTeacer());
            await dispatch(getExpenses({page:0,limit:100}));

            

      } catch (error) {
        console.error("Error fetching students:", error);
        
      }
    };

    fetchData();
  }, [dispatch]);

  const students = useSelector((state) => state.admin.students);
  const teacher = useSelector((state) => state.admin.teachers);
  const expenses = useSelector((state) => state.expenses.expenses);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (Array.isArray(expenses?.data)) {
      const calculatedTotal = expenses.data.reduce((acc, expense) => acc + expense.amount, 0);
      setTotal(calculatedTotal);
    }
  }, [expenses]);
 console.log(total)

  return (
    <div className="mb-5">
      <div className="">
        <h1 className="font-semibold text-2xl ml-3 my-5 "> Admin Dashboard</h1>
        <nav aria-label="Breadcrumb" className="flex mb-4 pl-3">
          <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
            <li className="flex items-center">
              <a
                href="#"
                className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>

                <span className="ms-1.5 text-xs font-medium"> Home </span>
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 p-4 ">
        <div className="h-32 rounded-lg bg-white shadow-lg">
          <div className="flex items-center justify-around h-full">
            <div className="bg-[#3CBB7B] w-20 h-20 flex items-center justify-center rounded-full ">
              <span className="text-[#D1F3E0]">
                <IoSchool className="size-8" />
              </span>
            </div>
            <div className="text-red-600 h-5">|</div>

            <div className="">
              <h1 className="text-gray-400 text-lg">Student</h1>
              <h1 className="font-semibold text-xl">{students?.total&& students.total} </h1>
            </div>
          </div>
        </div>

        <div className="h-32 rounded-lg bg-white shadow-lg">
          <div className="flex items-center justify-around h-full">
            <div className="bg-[#FFA002] w-20 h-20 flex items-center justify-center rounded-full ">
              <span className="text-[#FFF2D8]">
                <HiUsers className="size-8" />
              </span>
            </div>
            <div className="text-red-600 h-5">|</div>

            <div className="">
              <h1 className="text-gray-400 text-lg">Parents</h1>
              <h1 className="font-semibold text-xl"> {students?.total&& students.total}</h1>
            </div>
          </div>
        </div>

        <div className="h-32 rounded-lg bg-white shadow-lg">
          <div className="flex items-center justify-around h-full">
            <div className="bg-[#3F7AFC] w-20 h-20 flex items-center justify-center rounded-full ">
              <span className="text-[#E1F1FF]">
                <GiTeacher className="size-8" />
              </span>
            </div>
            <div className="text-red-600 h-5">|</div>

            <div className="">
              <h1 className="text-gray-400 text-lg">Teachers</h1>
              <h1 className="font-semibold text-xl">{teacher?.total&& teacher.total}</h1>
            </div>
          </div>
        </div>

        <div className="h-32 rounded-lg bg-white shadow-lg">
          <div className="flex items-center justify-around h-full">
            <div className="bg-[#FF0000] w-20 h-20 flex items-center justify-center rounded-full ">
              <span className="text-[#FFEAEA]">
                <MdOutlineAttachMoney className="size-8" />
              </span>
            </div>
            <div className="text-red-600 h-5">|</div>

            <div className="">
              <h1 className="text-gray-400 text-lg">Earnings</h1>
              <h1 className="font-semibold text-xl">${total}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-wrap md:flex-nowrap md:w-full gap-8">
      <Chart className="" />

        <ChartCol className="md:w-full" />
      </div>
      {/* Circul */}

      {/* <div className="flex items-center justify-center w-full md:w-2/5 mx-auto my-8">
        <Circul className="" />
      </div> */}

<div className="flex flex-col lg:flex-row gap-3 lg:gap-8 p-4 mb-4">
  <div className=" rounded-lg  w-full lg:w-1/2 mb-4 lg:mb-5">
 
    <Calendar />
  </div>
  <div className=" rounded-lg  w-full lg:w-1/2">
    
    <Reminders />
  </div>
</div>

      
    </div>
  );
};

export default Admin;
