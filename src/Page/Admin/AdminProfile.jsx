import React, { useEffect } from "react";
 
import { Link } from "react-router-dom";
const AdminProfile = () => {
  const data= localStorage.getItem("user")

  const userData = JSON.parse(data); // Parse JSON string to object

 console.log(data)
  return (
    <div className="p-10 bg-white m-10 ">
      {/* <div className="top">
        <div className="p-5 flex flex-col md:flex-row items-center md:items-start md:gap-10 bg-white mb-5">
          <div className="w-28 h-28 rounded-full bg-gray-200 mb-5 md:mb-0"></div>

          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi est
            error quibusdam?
          </p>
        </div>
      </div> */}

 {data?(
   
    <div className="flow-root">
 <dl className="-my-3 divide-y divide-gray-100 text-sm">
   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">ID</dt>
     <dd className="text-gray-700 sm:col-span-2">{userData._id}</dd>
   </div>

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">Name</dt>
     <dd className="text-gray-700 sm:col-span-2">{userData.name} </dd>
   </div>

   

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">Phone</dt>
     <dd className="text-gray-700 sm:col-span-2">{userData.phone}</dd>
   </div>

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">School Name:</dt>
     <dd className="text-gray-700 sm:col-span-2">{userData.schoolName}</dd>
   </div>

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">Address</dt>
     <dd className="text-gray-700 sm:col-span-2">{userData.address}</dd>
   </div>

   

   <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
     <dt className="font-medium text-gray-900">E-mail</dt>
     <dd className="text-gray-700 sm:col-span-2">{userData.email}</dd>
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

export default AdminProfile;
