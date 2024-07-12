import React, { useEffect, useState } from "react";
import {getStudent,updatePromotion} from '../../store/studentSlice'
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import { getClass } from "../../store/classSlice";
import { toast } from "react-toastify";

const InputField = ({ label, placeholder, set, val }) => {
  return (
    <div className="flex flex-col mb-4 w-full md:w-1/2 lg:w-1/3 ">
      <label className="mb-1 text-lg">{label}</label>
      <input
       value={val}
      //  onChange={(e) => set(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg bg-gray-200 p-3 text-sm shadow-md outline-none"
      />
    </div>
  );
};

const StudentPromotion = () => {
  const navigate= useNavigate();
  const dispatch = useDispatch(); 
 
  const {id} = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getStudent(id));
        await  dispatch(getClass())

      } catch (error) {
        console.error("Error fetching student:", error);
        
      }
    };

    fetchData();
  }, [dispatch]);

  const student = useSelector((state) => state.students.oneStudent);
  const classes = useSelector((state) => state.class.class)


  const [name, setName] = useState(student?.name);
  const [currentClass, setCurrentClass] = useState(student?.classLevels[0]?.name);
  const [toClass, setToClass] = useState("");
// =======================resetHsndle==================
const resetHsndle =()=>{
  setName("");
setCurrentClass("");
setToClass("");
}
 const updateStudent=async() =>{
  if (!name || !currentClass ||!toClass ){
    toast.warn("Please complete your data");
    return;
  } 
  await dispatch(updatePromotion({id,formData:{classLevels:toClass}}));
  resetHsndle();
  navigate('/student');
  toast.success(" student update successfully ");

 
 }
 const handleClass =(e) =>{
  setToClass(e.target.value)
  console.log(toClass)
 }
  return (
    <div>
      <div className="">
        <h1 className="font-semibold text-2xl ml-3 my-5 "> Students</h1>

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

            <li className="relative flex items-center">
              <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

              <a
                href="#"
                className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition text-red-600 hover:text-red-500"
              >
                Student Adnit Form
              </a>
            </li>
          </ol>
        </nav>
      </div>

      <div className="bg-white rounded-md p-5 mb-5 mx-2">
        <h1 className="font-semibold text-2xl">Add Promotion</h1>
        <form className="flex flex-wrap gap-4 pt-5">
          <InputField label="Name" placeholder="" val={name} set={setName}  />
          {/* <InputField label="Gender" placeholder="" /> */}
          <InputField label="Promotion From Class " placeholder="" val={currentClass} set={setCurrentClass} />
          {/* <InputField label="Promotion To Class " placeholder="" val={toClass} set={setToClass} /> */}
          <div className="flex flex-col mb-4 w-full md:w-1/2 lg:w-1/3 "> 
              <label className="mb-1 text-lg">Promotion To Class </label>

              <select 
              onChange={handleClass}
        className="w-full rounded-lg bg-gray-200 p-3 text-sm shadow-md outline-none"
        >

              <option value="" disabled selected hidden>
              Please Select Class
              </option>
              {classes && classes.map((item, index) => (
  <option key={index} value={item._id}>{item.name}</option>
))}
              
            </select>
              </div>
        </form>
        <div className="p-5 flex gap-6 bg-white btn_save">
          <button onClick={updateStudent} className="px-7 py-2 bg-red-600 text-white rounded-md">
            Save
          </button>
          <button onClick={resetHsndle} className="px-7 py-2 bg-blue-700 text-white rounded-md">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentPromotion;
