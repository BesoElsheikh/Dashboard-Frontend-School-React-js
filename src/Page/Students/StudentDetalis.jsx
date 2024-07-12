import React, { useEffect } from "react";
import {getStudent} from '../../store/studentSlice'
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
const StudentDetalis = () => {
  const dispatch = useDispatch(); 
  const {id} = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getStudent(id));
      } catch (error) {
        console.error("Error fetching student:", error);
        
      } 
    };

    fetchData();
  }, [dispatch]);

  const student = useSelector((state) => state.students.oneStudent);
console.log(student)
  return (
    <div className="p-5 bg-white m-5 ">
      {/* <div className="top">
        <div className="p-5 flex flex-col md:flex-row items-center md:items-start md:gap-10 bg-white mb-5">
          <div className="w-28 h-28 rounded-full bg-gray-200 mb-5 md:mb-0"></div>

          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi est
            error quibusdam?
          </p>
        </div>
      </div> */}

 {student?(
   
    <div className="flow-root">
 <dl className="-my-3 divide-y divide-gray-100 text-sm">
   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">ID</dt>
     <dd className="text-gray-700 sm:col-span-2">{student._id}</dd>
   </div>

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">Name</dt>
     <dd className="text-gray-700 sm:col-span-2">{student.name} </dd>
   </div>

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">Gender:</dt>
     <dd className="text-gray-700 sm:col-span-2">{student.gender}</dd>
   </div>

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">Phone</dt>
     <dd className="text-gray-700 sm:col-span-2">{student.phone}</dd>
   </div>

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">Religion:</dt>
     <dd className="text-gray-700 sm:col-span-2">{student.religion}</dd>
   </div>

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">Address</dt>
     <dd className="text-gray-700 sm:col-span-2">{student.address}</dd>
   </div>

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">Occupation</dt>
     <dd className="text-gray-700 sm:col-span-2">{student.fatherOccupation}</dd>
   </div>

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">E-mail</dt>
     <dd className="text-gray-700 sm:col-span-2">{student.email}</dd>
   </div>
 </dl>
 
 <div className="mt-4 flex gap-4 bg-white btn_link ">
<Link to={`/promotion/${student._id}`} className="px-4 py-2 bg-green-600 text-white rounded-md"> 

        <button
             
          >
            Promotion
          </button>
                  </Link>
                  <Link to={`/update/${student._id}`} className="px-4 py-2 bg-blue-700 text-white rounded-md">
                  <button >
            Update
          </button>
                  </Link>
         
        </div>
</div>
  
 
 ):(
  <p>Loading...........</p>
 )

 }

        
    </div>
  );
};

export default StudentDetalis;
