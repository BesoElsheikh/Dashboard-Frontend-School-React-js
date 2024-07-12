import React, { useEffect, useState } from "react";
import { deleteTeacher, getTeacer, getTeacherSearch} from '../../store/adminSlice'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../../Components/Pagination";
const Teachers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getTeacer());
      } catch (error) {
        console.error("Error fetching students:", error);
        
      }
    };

    fetchData();
  }, [dispatch]);

  const teachers = useSelector((state) => state.admin.teachers);
  const [word,setWord]=useState(null)

  const handleSearch = async() =>{
    // await dispatch(getStudentSearch(word))
  
     }
  
       
  const handleChange = async(e) =>{
    await dispatch(getTeacherSearch(e.target.value))
  
     }
     //when click pagination
const onPress = async (page) => { 
  
  await dispatch(getTeacer(page))
}
const handleDelete= async (id) =>{
  await dispatch(deleteTeacher(id))
  window.location.reload();
  
     }
  return (
    <div className="overflow-x-hidden ">
      <div className="rounded-lg border border-gray-200 mx-2">
        <div className="">
          <h1 className="font-semibold text-2xl ml-3 my-5 "> Teachers</h1>

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
                All Teacher
                </a>
              </li>
            </ol>
          </nav>
        </div>

        <div className="w-full bg-white mb-6 p-6 shadow-md rounded-md">
          <div className=" flex items-center justify-between flex-wrap"> 
          <div>
          <p className="font-semibold text-2xl mb-3"> All Teacher Data</p>
          </div>
          <div>
          <input
              type="text"
              placeholder="Search by name"
               onChange={handleChange}
              className="w-30   rounded-lg bg-gray-200 p-3 text-sm shadow-md outline-none mb-2 md:mb-0"
            />
          </div>
          
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
                  Class
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  Subject
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  Address
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                Religion
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  Phone
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  Delete
                </th>
              </tr>
            </thead>

            <tbody className="divide-y text-center divide-gray-200">
            {Array.isArray(teachers?.data) ? (
  teachers.data.map((teacher, index) => (
    <tr key={index + 1}>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {index + 1} 
      </td>
      <Link to={`/teacherdetalis/${teacher._id}`}>

      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {teacher.name}
      </td>
      </Link>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {teacher.gender}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
       {teacher.classLevels &&teacher.classLevels[0]?.name}

      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
      {teacher.subject &&teacher.subject.name}

       </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
      {teacher.address}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
      {teacher.religion
}

      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
      {teacher.phone}

      </td>
      <td className="whitespace-nowrap px-4 py-2 ">
      <button onClick={ () => handleDelete(teacher._id)}    className="bg-red-500 px-5 py-1 rounded-md text-white">
              X
            </button>
        </td>
    </tr>
  ))
) : (
  <p>Loading...</p>
)}
              
            </tbody>
          </table>
        </div>

      
{
  !teachers?.pagination ===null &&
  <Pagination pageCount={teachers?.pagination.pageCount} onPress={onPress} />

}

      </div>
    </div>
  );
};

export default Teachers;
