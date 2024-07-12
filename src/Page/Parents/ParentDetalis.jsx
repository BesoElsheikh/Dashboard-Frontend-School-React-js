import React, { useEffect } from "react";
import {getStudent} from '../../store/studentSlice'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const ParentDetalis = () => {

  const dispatch = useDispatch(); 
  const {id} = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getStudent(id));
      } catch (error) {
        console.error("Error fetching parent:", error);
        
      }
    };

    fetchData();
  }, [dispatch]);

  const parent = useSelector((state) => state.students.oneStudent);

  return (
    <div className="p-5 bg-white m-10 ">
      {/* <div className="top">
        <div className="p-5 flex flex-col md:flex-row items-center md:items-start md:gap-10 bg-white mb-5">
          <div className="w-28 h-28 rounded-full bg-gray-200 mb-5 md:mb-0"></div>

          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi est
            error quibusdam?
          </p>
        </div>
      </div> */}

 {parent?( 
  <div className="flow-root">
  <dl className="-my-3 divide-y divide-gray-100 text-sm">
    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">ID</dt>
      <dd className="text-gray-700 sm:col-span-2">{parent._id}</dd>
    </div>
 
    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Name</dt>
      <dd className="text-gray-700 sm:col-span-2">{parent.fatherName} </dd>
    </div>
    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Son Name</dt>
      <dd className="text-gray-700 sm:col-span-2">{parent.name} </dd>
    </div>
     
 
    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Phone</dt>
      <dd className="text-gray-700 sm:col-span-2">{parent.phone}</dd>
    </div>
 
    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Religion:</dt>
      <dd className="text-gray-700 sm:col-span-2">{parent.religion}</dd>
    </div>
 
    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Address</dt>
      <dd className="text-gray-700 sm:col-span-2">{parent.address}</dd>
    </div>
 
    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Occupation</dt>
      <dd className="text-gray-700 sm:col-span-2">{parent.fatherOccupation}</dd>
    </div>
 
    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">E-mail</dt>
      <dd className="text-gray-700 sm:col-span-2">{parent.fatherEmail}</dd>
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

export default ParentDetalis;
