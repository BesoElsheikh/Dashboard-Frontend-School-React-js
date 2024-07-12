import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
 import { useDispatch, useSelector } from "react-redux";
import './Header.css'

import { Link,useNavigate } from "react-router-dom";
import { getStudentSearch } from "../store/adminSlice";

const Navbar = () => {
  const navigate= useNavigate();
  const dispatch = useDispatch(); 

   
const handleChange = async(e) =>{
  await dispatch(getStudentSearch(e.target.value))
  navigate("/student")

   }
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  const logOut =() =>{
    localStorage.removeItem("user");
    localStorage.removeItem("token");
 window.location.reload();
 
 }
  return (
    <div className="navbar w-full mb-6 px-3  py-3 flex justify-between items-center bg-white ">
      <form>
        <div className="relative">
          <input
            type="text"
            onChange={handleChange}
            className="w-full    p-3 pl-10 text-sm   outline-none"
            placeholder="Search"
          />

          <span className="absolute inset-y-0 -start-1 grid place-content-center px-4">
            <IoIosSearch />
          </span>
        </div>


      </form>
      <div className=" ">
        <ul className="flex gap-x-2 items-center">
          <li>
            <MdOutlineEmail className="text-red-600" />
          </li>
          <li>
            <FaRegBell className="text-red-600" />
          </li>
          <span className="text-red-600 hidden sm:inline">|</span>

          <li className="relative flex items-center gap-x-1">
            <div className="bg-red-600 w-6 h-6 rounded-full"></div>
            <span onClick={toggleDropdown}>
              <IoIosArrowDown />
            </span>
            {openDropdown && (
              <div className="z-10 absolute top-10 right-0 w-48  bg-[#e6e6e7] shadow-md mt-1 rounded-md">
                {/* Dropdown Content */}
                <ul className="dropdown">
                  <Link to='/admin-profile'>
                  <li className="flex gap-x-2 items-center p-2 hover:bg-[#c1c1c1] cursor-pointer text-gray-700">
                    <IoIosArrowForward className=" text-gray-700" /> Profile
                  </li>
                  </Link>
                  <Link to='/setting'>
                  
                  <li className="flex gap-x-2 items-center p-2 hover:bg-[#c1c1c1] cursor-pointer text-gray-700">
                    <IoIosArrowForward className=" text-gray-700" /> Settings
                  </li>
                  </Link>
                  <li onClick={ () => logOut()} className="flex gap-x-2 items-center p-2 hover:bg-[#c1c1c1] cursor-pointer text-gray-700">
                    <IoIosArrowForward  className=" text-gray-700" />Logout
                  </li>
                  
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
