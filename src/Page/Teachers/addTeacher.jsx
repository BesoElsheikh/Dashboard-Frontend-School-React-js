import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubject } from "../../store/subjectSlice";
import { addTeacher } from "../../store/teacherSlice";
import { getClass } from "../../store/classSlice";
import { toast } from "react-toastify";

const InputField = ({ label, placeholder,set, val }) => {
  return (
    <div className="flex flex-col mb-4 w-full md:w-1/2 lg:w-1/3 ">
      <label className="mb-1 text-lg">{label}</label>
      <input
         value={val}
         onChange={(e) => set(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg bg-gray-200 p-3 text-sm shadow-md outline-none"
      />
    </div>
  );
};

const AddTeacher = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    const get = async() =>{
    await  dispatch(getSubject())
    await  dispatch(getClass())

    }
    get();
  },[dispatch])

  const classes = useSelector((state) => state.class.class)
  const subjects = useSelector((state) => state.subjects.subject)
  const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");
 const [address, setAddress] = useState("");
  const [className, setClassName] = useState("");
 const [religion, setReligion] = useState("");
  const [gender, setGender] = useState("");
   const [password, setPassword] = useState("");
   const [subject, setSubject] = useState("");
//  ====================resetHsndle===================
 const resetHsndle =()=>{
  setName("");
setEmail("");
setPhone("");
setAddress("");
setClassName("");
setReligion("");
setGender("");
setPassword("");
setSubject("");
 }
 const addData = async () => {
  if(name ===""||
    email ===""||
    phone ===""||
    address ===""||
    className ===""||
    religion ===""||
    gender ===""||
    password ===""||
    subject ===""){
      toast.warn("Please complete your data");

    }else{
      await dispatch(
        addTeacher({
          name,
          email,
          phone,
          address,
           classLevels:className,
           subject,
          religion,
           gender,
            password
        })
      );
      toast.success(" Teacher added successfully ");

      resetHsndle();

    }
 
 };
const handleSubject =(e) =>{
  setSubject(e.target.value)
 }
const handleClass =(e) =>{
  setClassName(e.target.value)
  }
  return (
    <div className="w-full p-5 mb-4 addStudent">
      <h1 className="font-semibold text-2xl my-4">Teachers</h1>

      <nav aria-label="Breadcrumb" className="flex mb-4">
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

          <li className="relative flex items-center">
            <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>
            <a
              href="#"
              className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition text-red-600 hover:text-red-500"
            >
              Add New Teachers
            </a>
          </li>
        </ol>
      </nav>

      <div className="bg-white rounded-md p-5 mb-5">
        <h1 className="font-semibold text-2xl">Add New Teachers</h1>
        <form className="flex flex-wrap gap-4 pt-5">
        <InputField
            val={name}
            set={setName}
            label="Name"
            placeholder="Name"
          />
 <InputField
            val={email}
            set={setEmail}
            label="Email"
            placeholder="Email"
          />
          <InputField
            val={password}
            set={setPassword}
            label="password"
            placeholder="password"
          />
          <InputField
            val={gender}
            set={setGender}
            label="Gender"
            placeholder="Please Select Gender"
          />
           {/* <InputField label="subject" placeholder="Please Select subject" /> */}
          <div className="flex flex-col mb-4 w-full md:w-1/2 lg:w-1/3 "> 
              <label className="mb-1 text-lg">Please Select subject </label>

              <select 
              onChange={handleSubject}
        className="w-full rounded-lg bg-gray-200 p-3 text-sm shadow-md outline-none"
        >

              <option value="" disabled selected hidden>
                Select subject
              </option>
              {subjects?.data && subjects.data.map((item, index) => (
  <option key={index} value={item._id}>{item.name}</option>
))}
              
            </select>
              </div>

              <div className="flex flex-col mb-4 w-full md:w-1/2 lg:w-1/3 "> 
              <label className="mb-1 text-lg">Please Select Class </label>

              <select 
              onChange={handleClass}
        className="w-full rounded-lg bg-gray-200 p-3 text-sm shadow-md outline-none"
        >

              <option value="" disabled selected hidden>
                Select Class
              </option>
              {classes && classes.map((item, index) => (
  <option key={index} value={item._id}>{item.name}</option>
))}
              
            </select>
              </div>
              <InputField val={phone} set={setPhone} label="Phone" placeholder="Phone" />
          {/* <InputField label="Blood Group" placeholder="" /> */}
          <InputField
            val={religion}
            set={setReligion}
            label="Religion"
            placeholder="Please Select Religion"
          />         
<InputField
            val={address}
            set={setAddress}
            label="Address"
            placeholder="Address"
          />          {/* <InputField label="Blood Group" placeholder="" />
          <InputField label="Blood Group" placeholder="" /> */}
        </form>

        {/* <div className="p-5 flex flex-col md:flex-row items-center md:items-start md:gap-10 bg-white">
          <div className="w-28 h-28 rounded-full bg-gray-200 mb-5 md:mb-0"></div>
          <div className="flex flex-col">
            <p className="mb-2">Upload Teacher Photo (150 * 150)</p>
            <input
              type="file"
              placeholder=""
              className="rounded-lg bg-gray-200 p-3 text-sm shadow-md outline-none"
            />
          </div>
        </div> */}

        <div className="p-5 flex gap-6 bg-white btn_save">
          <button onClick={addData} className="px-7 py-2 bg-red-600 text-white rounded-md">
            Save
          </button>
          <button onCanPlay={resetHsndle} className="px-7 py-2 bg-blue-700 text-white rounded-md">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
