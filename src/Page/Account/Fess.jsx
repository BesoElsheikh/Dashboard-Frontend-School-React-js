import React, { useEffect, useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { LuPenLine } from "react-icons/lu";
import {getFees,addFees,getFeeSearch} from '../../store/feesSlice'
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../Components/Pagination";
import { toast } from "react-toastify";

const InputField = ({ label, placeholder, set, val }) => {
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
const Fess = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescriptionl] = useState("");
  const [type, setType] = useState("");
  const [toggle, setToggle] = useState(true);
  const [word,setWord]=useState(null)

// =============================resetHsndle===============================
const resetHsndle =() =>{
  setName('');
setDescriptionl('');
setType('');
}

useEffect(() => {
  const fetchData = async () => {
    try {
      if( word === null)
         await dispatch(getFees());

      
    } catch (error) {
      console.error("Error fetching fees group:", error);
      
    }
  };

  fetchData();
}, [dispatch]);
   

  const addData = async () => {
    if(!name||
      !description||
      !type){
        toast.warn("Please complete your data");

      }else{
        await dispatch(
          addFees({
           name,
           description,
           feesType:type
    
          })
        );
        toast.success(" Fee added successfully ");

        resetHsndle();

      }
  
  };

  const feesGroup = useSelector((state) => state.fees.fees);
console.log(feesGroup)

 
//when click pagination
const onPress = async (page) => { 
  
  await dispatch(getFees(page))
}

  
const handleChange = async(e) =>{
  await dispatch(getFeeSearch(e.target.value))

   }
  return ( 
    <div className="mx-3">
      <div className="">
        <h1 className="font-semibold text-2xl ml-3 my-5 "> Account</h1>

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
                Fess Group
              </a>
            </li>
          </ol>
        </nav>
      </div>

      <div className="w-full bg-white mb-6 p-6 shadow-md rounded-md">
        <div className="flex items-center justify-between flex-wrap fees_group ">
          <div className="flex gap-x-6 fees_group ">
            <div className="flex items-center gap-x-2 cursor-pointer" onClick={() => setToggle(true)}>
              <TfiMenuAlt   className="" />
              <span className="font-semibold">Fess Group List</span>
            </div>
            <div className="flex items-center gap-x-2 cursor-pointer" onClick={() => setToggle(false)}>
              <LuPenLine  className="" />
              <span className="font-semibold">Add Fess Group</span>
            </div>
          </div>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search"
            className=" search w-30 md:w-auto rounded-lg bg-gray-200 p-3 text-sm shadow-md outline-none mb-2 md:mb-0"
          />
        </div>
      </div>
      { toggle ? (
        <>
   <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                id
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                Fees Type
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                Description
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {Array.isArray(feesGroup?.data) ?(
              feesGroup.data.map((fee,index) =>(
                <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                 {fee.name}
                </td>
                <td className="whitespace-normal break-all px-4 py-2 text-gray-700">
                 {fee.feesType}
                </td>
                <td className="whitespace-normal break-all px-4 py-2 text-gray-700">
                  {fee.description}
                 </td>
              </tr>
              ))
            ):(
              <p>No data available</p>
            )

            }
           
            
          </tbody>
        </table>
      </div> 
      {
  !feesGroup?.pagination === null && (
    <Pagination 
      pageCount={feesGroup?.pagination.pageCount} 
      onPress={onPress} 
    />
  )
}

      </>
      ) :(
        <div className="bg-white rounded-md p-5 mb-5 mx-2">
        <h1 className="font-semibold text-2xl">Add New Fess Group</h1>
        <form className="flex flex-wrap gap-4 pt-5">
          <InputField
           val={name}
           set={setName}
          label="Name Fess" placeholder="Name Fess" />
          <InputField 
           val={type}
           set={setType}
          label="Fess Type " placeholder="Fess Type" />
          <InputField
           val={description}
           set={setDescriptionl}
          label="Description" placeholder="Description" />
          
          
        
          

        </form>
        <div className="p-5 flex gap-6 bg-white btn_save">
          <button
          onClick={addData}
          className="px-7 py-2 bg-red-600 text-white rounded-md">
            Save
          </button>
          <button onClick={resetHsndle} className="px-7 py-2 bg-blue-700 text-white rounded-md">
            Reset
          </button>
        </div>
      </div>
      )}
     

    
    </div>
  );
};

export default Fess;
