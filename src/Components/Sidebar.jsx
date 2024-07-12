import React, { useEffect, useState } from "react";
import logo from "../image/logo.png";
import "./Header.css";
import { IoMdTimer } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { SlBookOpen } from "react-icons/sl";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { GiTeacher } from "react-icons/gi";
import { IoSchool } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const [opendrop, setOpendrop] = useState(false);

  const toggleDropdown = () => {
    setOpendrop(!opendrop);
  };

  useEffect(() => {
    if (window.screen.width < 992) {
      setOpen(false);
    }
  }, []);
  const handleClick = () => {
    if (window.screen.width < 992) {
      setOpen(false);
    } else {
      setOpen(!open);
    }
  };
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [openDropdown3, setOpenDropdown3] = useState(false);

  const toggleDropdown1 = () => {
    setOpenDropdown1(!openDropdown1);
    setOpenDropdown2(false);
    setOpenDropdown3(false);
  };

  const toggleDropdown2 = () => {
    setOpenDropdown2(!openDropdown2);
    setOpenDropdown1(false);
    setOpenDropdown3(false);
  };

  const toggleDropdown3 = () => {
    setOpenDropdown3(!openDropdown3);
    setOpenDropdown1(false);
    setOpenDropdown2(false);
  };

  return (
    <div className=" sidebar sticky top-0 h-screen">
      <div
        className={`${
          open ? "w-52" : "w-20"
        } duration-300 h-screen bg-[#14238A] relative overflow-y-auto overflow-x-hidden sidebar`}
      >
        <div className="logo bg-[#D60A0B] flex justify-between mx-auto items-center py-3 px-3">
          {open ? (
            <img src={logo} alt="error" className="logo_img" />
          ) : (
            <i
              onClick={handleClick}
              className="cursor-pointer  pl-1 text-2xl text-white mx-auto "
            >
              <IoMdClose className="size-7  hide_icon " />
            </i>
          )}
          <h1
            className={`text-white font-medium text-xl duration-300 ${
              open ? "" : "scale-0"
            }`}
          >
            <HiMenuAlt3 className="font-bold show_icon" onClick={handleClick} />
            <IoMdClose className="size-7  hides_icon " />
          </h1>
        </div>
        <ul className="pt-5 p-4">
          <li className="flex items-center gap-x-2 my-4 p-2 hover:bg-[#1c30b5] rounded-md cursor-pointer">
            <i className="text-white">
              <IoMdTimer
                onClick={() => navigate("/")}
                className={`${open ? "size-6 " : "size-7"}`}
              />
            </i>
            <Link to="/" className={` ${open ? "" : "scale-0"}`}>
              <span className={`text-gray-300 text-lg ele_hide `}>
                Dashboard
              </span>
            </Link>
          </li>

          <li className="flex items-center justify-between my-4 p-2 hover:bg-[#1c30b5] rounded-md cursor-pointer relative">
            <div className="flex items-center gap-x-2 duration-300">
              <i className="text-white">
                <IoSchool
                  onClick={() => navigate("/student")}
                  className={`${openDropdown1 ? "size-6" : "size-7"}`}
                />
              </i>
              <span
                className={`text-gray-300 text-lg ele_hide ${
                  open ? "" : "scale-0"
                }`}
              >
                Students
              </span>
            </div>
            <button onClick={toggleDropdown1}>
              <IoIosArrowForward
                className={`text-right ele_hide transform transition duration-300 text-white ${
                  openDropdown1 ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>
            {openDropdown1 && (
              <div className="z-10 absolute top-full left-0 w-44 bg-[#17226d] shadow-md mt-1 rounded-md">
                <ul className="dropdown">
                  <Link to="/student">
                    <li className="flex gap-x-2 items-center p-2 hover:bg-[#202f8f] cursor-pointer text-white">
                      <IoIosArrowForward className="text-white" /> All Students
                    </li>
                  </Link>

                  <Link to="/addstudent">
                    <li className="flex gap-x-2 items-center p-2 hover:bg-[#202f8f] cursor-pointer text-white">
                      <IoIosArrowForward className="text-white" /> Add Students
                    </li>
                  </Link>

                  {/* <Link to='/promotion'> <li className="flex gap-x-2 items-center p-2 hover:bg-[#202f8f] cursor-pointer text-white">
                    <IoIosArrowForward className="text-white" /> Promotion
                  </li></Link> */}
                </ul>
              </div>
            )}
          </li>

          <li className="flex items-center gap-x-2 my-4 p-2 hover:bg-[#1c30b5] rounded-md cursor-pointer">
            <i className="text-white">
              <HiUsers
                onClick={() => navigate("/parent")}
                className={`${open ? "size-6 " : "size-7"}`}
              />
            </i>
            <Link to="/parent" className={` ${open ? "" : "scale-0"}`}>
              {" "}
              <span
                className={`text-gray-300 ele_hide text-lg ${
                  open ? "" : "scale-0"
                }`}
              >
                Parents
              </span>
            </Link>
          </li>

          <li className="flex items-center justify-between my-4 p-2 hover:bg-[#1c30b5] rounded-md cursor-pointer relative">
            <div className="flex items-center gap-x-2 duration-300">
              <i className="text-white">
                <GiTeacher
                  onClick={() => navigate("/teacher")}
                  className={`${open ? "size-6" : "size-7"}`}
                />
              </i>

              <span
                className={`text-gray-300 text-lg ele_hide ${
                  open ? "" : "scale-0"
                }`}
              >
                Teachers
              </span>
            </div>
            <button onClick={toggleDropdown2}>
              <IoIosArrowForward
                className={`text-right ele_hide transform transition duration-300 text-white ${
                  openDropdown2 ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>
            {openDropdown2 && (
              <div className="z-10 absolute top-full left-0 w-44 bg-[#17226d] shadow-md mt-1 rounded-md">
                <ul className="dropdown">
                  <Link to="/teacher">
                    <li className="flex gap-x-2 items-center p-2 hover:bg-[#202f8f] cursor-pointer text-white">
                      <IoIosArrowForward className="text-white" /> All Teachers
                    </li>
                  </Link>

                  <Link to="/addteacher">
                    <li className="flex gap-x-2 items-center p-2 hover:bg-[#202f8f] cursor-pointer text-white">
                      <IoIosArrowForward className="text-white" /> Add Teachers
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </li>

          <li className="flex items-center justify-between my-4 p-2 hover:bg-[#1c30b5] rounded-md cursor-pointer relative">
            <div className="flex items-center gap-x-2 duration-300">
              <i className="text-white">
                <MdOutlineAccountBalanceWallet
                  onClick={() => navigate("/fess")}
                  className={`${open ? "size-6" : "size-7"}`}
                />
              </i>
              <span
                className={`text-gray-300 text-lg ele_hide ${
                  open ? "" : "scale-0"
                }`}
              >
                Account
              </span>
            </div>
            <button onClick={toggleDropdown3}>
              <IoIosArrowForward
                className={`text-right ele_hide transform transition duration-300 text-white ${
                  openDropdown3 ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>
            {openDropdown3 && (
              <div className="z-10 absolute top-full left-0 w-44 bg-[#17226d] shadow-md mt-1 rounded-md">
                <ul className="dropdown">
                  <Link to="/fess">
                    <li className="flex gap-x-2 items-center p-2 hover:bg-[#202f8f] cursor-pointer text-white">
                      <IoIosArrowForward className="text-white" /> Fees Group
                    </li>
                  </Link>

                  <Link to="/account">
                    <li className="flex gap-x-2 items-center p-2 hover:bg-[#202f8f] cursor-pointer text-white">
                      <IoIosArrowForward className="text-white" /> Students Fees
                    </li>
                  </Link>

                  <Link to="/account-expenses">
                    <li className="flex gap-x-2 items-center p-2 hover:bg-[#202f8f] cursor-pointer text-white">
                      <IoIosArrowForward className="text-white" /> Expenses
                    </li>
                  </Link>

                  <Link to="/addexpenses">
                    {" "}
                    <li className="flex gap-x-2 items-center p-2 hover:bg-[#202f8f] cursor-pointer text-white">
                      <IoIosArrowForward className="text-white" /> Add Expenses
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </li>

          <li className="flex items-center gap-x-2 my-4 p-2 hover:bg-[#1c30b5] rounded-md cursor-pointer">
            <i className="text-white">
              <SlBookOpen
                onClick={() => navigate("/subject")}
                className={`${open ? "size-6 " : "size-7"}`}
              />
            </i>
            <Link to="/subject" className={` ${open ? "" : "scale-0"}`}>
              <span
                className={`text-gray-300 ele_hide text-lg ${
                  open ? "" : "scale-0"
                }`}
              >
                Subject
              </span>
            </Link>
          </li>

          <li className="flex items-center gap-x-2 my-4 p-2 hover:bg-[#1c30b5] rounded-md cursor-pointer">
            <i className="text-white">
              <IoMdSettings
                onClick={() => navigate("/setting")}
                className={`${open ? "size-6 " : "size-7"}`}
              />
            </i>
            <Link to="/setting" className={` ${open ? "" : "scale-0"}`}>
              <span
                className={`text-gray-300 text-lg ele_hide ${
                  open ? "" : "scale-0"
                }`}
              >
                Setting
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
