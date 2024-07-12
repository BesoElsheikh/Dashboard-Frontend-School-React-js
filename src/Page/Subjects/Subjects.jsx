import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSubject, deleteSubject, getSubject, getSubjectSearch } from "../../store/subjectSlice";
import { getTeacer } from "../../store/adminSlice";
import Pagination from "../../Components/Pagination";
import { toast } from "react-toastify";

const InputField = ({ label, placeholder,set, val  }) => {

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

const Subject = () => {
  const dispatch = useDispatch();


  const [name, setName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [day, setDay] = useState("");
  const [className, setClassName] = useState("");
  const [word,setWord]=useState(null)

// =======================resetHandle=================
const resetHandle =()=>{
  setName("");
setTeacher("");
setDay("");
setClassName("");
}
  useEffect(() => {
    const get = async() =>{
      if( word === null){
        await  dispatch(getSubject())

      }


    await dispatch(getTeacer());

 
    }
    get();
  },[dispatch])
  const subjects = useSelector((state) => state.subjects.subject);
  const teachers = useSelector((state) => state.admin.teachers);

  const addData = async () => {
    if(
      !name||
!teacher||
!day||
!className
    ){
      toast.warn("Please complete your data");
 

    }else{
      await dispatch(
        addSubject({
          name,
          teacher,
          day,
          classes:className
          
        })
      );
      toast.success(" Subject added successfully ");

      window.location.reload();
    }
  
  };
  const handleTeacher =(e) =>{
    setTeacher(e.target.value)
     

   }

   //when click pagination
 const onPress = async (page) => { 
  
  await dispatch(getSubject(page))
}


const handleSearch = async() =>{
  await dispatch(getSubjectSearch(word))

   }

     
const handleChange = async(e) =>{
  await dispatch(getSubjectSearch(e.target.value))

   }
   const handleDelete= async (id) =>{
    await dispatch(deleteSubject(id))
    window.location.reload();
    
       }
  return (
    <div className="overflow-x-hidden ">
      <div className="rounded-lg border border-gray-200 mx-2">
        <div className="">
          <h1 className="font-semibold text-2xl ml-3 my-5 "> Subject</h1>

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
                  All Subject
                </a>
              </li>
            </ol>
          </nav>
        </div>

        <div className="w-full bg-white mb-6 p-6 shadow-md rounded-md">
          <div className=" flex items-center justify-between flex-wrap"> 
          <div>
          <p className="font-semibold text-2xl mb-3"> All Subject Data</p>
          </div>
          <div>
          <input
              type="text"
              placeholder="Search by name"
               onChange={handleChange}
              className="w-30 md:w-auto rounded-lg bg-gray-200 p-3 text-sm shadow-md outline-none mb-2 md:mb-0"
            />
          </div>
          
          </div>
          
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  Subject Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  Teachers
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  Classes
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  Days
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-red-700">
                  Delete
                </th>
              </tr>
            </thead>

            <tbody className="divide-y text-center divide-gray-200">
              {Array.isArray(subjects?.data)?(
               subjects.data.map((item, index) =>(
                    <tr key={index}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {item.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.teacher?.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item.classes}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item.day}

                    </td>
                    <td className="whitespace-nowrap px-4 py-2 ">
        <button  onClick={() =>handleDelete(item._id)}   className="bg-red-500 px-5 py-1 rounded-md text-white">
              X
            </button>
        </td>
                  </tr>
                  ))
              ):(
                <p> No subjects available</p>
              )
              
            }
             
              
            </tbody>
          </table>
        </div>

       
        {!subjects?.pagination === null&&
                        <Pagination pageCount={subjects?.pagination.pageCount} onPress={onPress} />

        }

      </div>
      <div className="bg-white rounded-md p-5 mb-5 mt-5 mx-2">
        <h1 className="font-semibold text-2xl">Add New Subject</h1>
        <form className="flex flex-wrap gap-4 pt-5">
          <InputField 
            val={name}
            set={setName}
          label="Name" placeholder="Name" />
          {/* <InputField
            val={teacher}
            set={setTeacher}
          label="Teacher" placeholder="add teacher" /> */}
           <div className="flex flex-col mb-4 w-full md:w-1/2 lg:w-1/3 "> 
              <label className="mb-1 text-lg"> Select teacher </label>

              <select 
              onChange={handleTeacher}
        className="w-full rounded-lg bg-gray-200 p-3 text-sm shadow-md outline-none"
        >

              <option value="" disabled selected hidden>
                Select teacher
              </option>
              {Array.isArray(teachers?.data) && teachers.data.map((item, index) => (
  <option key={index} value={item._id}>{item.name}</option>
))}
              
            </select>
              </div>
          <InputField
            val={className}
            set={setClassName}
          label="Classes" placeholder=""add classes />
          <InputField
            val={day}
            set={setDay}
          label="Day" placeholder="add day" />
        </form>
        <div className="p-5 flex gap-6 bg-white btn_save">
          <button onClick={addData} className="px-7 py-2 bg-red-600 text-white rounded-md">
            Save
          </button>
          <button onClick={resetHandle} className="px-7 py-2 bg-blue-700 text-white rounded-md">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subject;


 