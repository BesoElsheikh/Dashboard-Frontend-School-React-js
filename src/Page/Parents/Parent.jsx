import React, { useEffect, useState } from "react";
import {getStudentSearch, getStudents} from '../../store/adminSlice'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../../Components/Pagination";
const Parent = () => {
  const dispatch = useDispatch(); 
  const [word,setWord]=useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if( word === null) 
        await dispatch(getStudents());
      } catch (error) {
        console.error("Error fetching parents:", error);
        
      }
    };

    fetchData();
  }, [dispatch]);

  const parents = useSelector((state) => state.admin.students);

 //when click pagination
 const onPress = async (page) => { 
  
  await dispatch(getStudents(page))
}

const handleSearch = async() =>{
  await dispatch(getStudentSearch(word))

   }

     
const handleChange = async(e) =>{
  await dispatch(getStudentSearch(e.target.value))

   }
  return (
    <div className="overflow-x-hidden ">
      <div className="rounded-lg border border-gray-200 mx-2">
        <div className="">
          <h1 className="font-semibold text-2xl ml-3 my-5 "> Parents</h1>

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
                  All Parents
                </a>
              </li>
            </ol>
          </nav>
        </div>

        <div className="w-full bg-white mb-6 p-6 shadow-md rounded-md">
          <div className=" flex items-center justify-between flex-wrap"> 
          <div>
          <p className="font-semibold text-2xl mb-3"> All Parents Data</p>
          </div>
          <div>
          <input
              type="text"
              placeholder="Search by name"
               onChange={handleChange}
              className="w-24 md:w-auto rounded-lg bg-gray-200 p-3 text-sm shadow-md outline-none mb-2 md:mb-0"
            />
          </div>
          {/* <div>
          <button  onClick={handleSearch}  className="bg-red-500 px-10 py-1 rounded-md text-white">
              Search
            </button>
          </div> */}
          </div>
          
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  ID
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  Gender
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  Occupation
                </th>
                
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  Address
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  E-mail
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  Phone
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  Son
                </th>
              </tr>
            </thead>

            <tbody className="divide-y text-center divide-gray-200">
            {
  Array.isArray(parents?.data) ? (
    parents.data.map((parent, index) => (
      <tr key={index} className="text-center">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {index + 1} 
        </td>
        <Link to={`/parentdetalis/${parent._id}`}>

        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
           {parent.fatherName}
        </td>
        </Link>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {parent.gender}
        </td>
         <td className="whitespace-nowrap px-4 py-2 text-gray-700">
           {parent.fatherOccupation}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {parent.address}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
           {parent.fatherEmail}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {parent.phone}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {parent.name}
        </td>
      </tr>
    ))
  ) : (
     <p className="text-center p-6">No parents Found!</p>

   )
}
         
            </tbody>
          </table>
        </div>

        {/* <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
          <ol className="flex justify-end gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                1
              </a>
            </li>

            <li className="block size-8 rounded border-blue-600 bg-red-600 text-center leading-8 text-white">
              2
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div> */}
{
  parents?.pagination === null&&
  <Pagination pageCount={parents?.pagination.pageCount} onPress={onPress} />
}


      </div>
    </div>
  );
};

export default Parent;
