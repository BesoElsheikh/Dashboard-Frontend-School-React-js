import React, { useEffect } from "react";
import {getTeacher} from '../../store/teacherSlice'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const TeacherDetalis = () => {
  const dispatch = useDispatch(); 
  const {id} = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getTeacher(id));
      } catch (error) {
        console.error("Error fetching teacdher:", error);
        
      }
    };

    fetchData();
  }, [dispatch]);

  const teacher = useSelector((state) => state.teachers.oneTeacher);

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

 {teacher?(
   
   <div className="flow-root">
 <dl className="-my-3 divide-y divide-gray-100 text-sm">
   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">ID</dt>
     <dd className="text-gray-700 sm:col-span-2">{teacher._id}</dd>
   </div>

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">Name</dt>
     <dd className="text-gray-700 sm:col-span-2">{teacher.name} </dd>
   </div>

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">Gender:</dt>
     <dd className="text-gray-700 sm:col-span-2">{teacher.gender}</dd>
   </div>

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">Phone</dt>
     <dd className="text-gray-700 sm:col-span-2">{teacher.phone}</dd>
   </div>

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">Religion:</dt>
     <dd className="text-gray-700 sm:col-span-2">{teacher.religion}</dd>
   </div>

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">Address</dt>
     <dd className="text-gray-700 sm:col-span-2">{teacher.address}</dd>
   </div>
 
   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">Class Levels:</dt>
     <dd className="text-gray-700 sm:col-span-2">{teacher.classLevels[0]?.name}</dd>
   </div>

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">Subject</dt>
     <dd className="text-gray-700 sm:col-span-2">{teacher.subject?.name}</dd>
   </div>

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">E-mail</dt>
     <dd className="text-gray-700 sm:col-span-2">{teacher.email}</dd>
   </div>
 </dl>
</div>
   
 
 ):(
  <p>Loading...........</p>
 )

 }

     
    </div>
  );
};

export default TeacherDetalis;
