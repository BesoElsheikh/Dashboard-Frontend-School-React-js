import React, { useEffect, useState } from "react";
import { getAdmins, updateAdmin } from "../../store/adminSlice";
import { useDispatch, useSelector } from "react-redux";
const Settings = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdmins());
  }, [dispatch]);

  const [adminName, setAdminName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("English");
  const data= localStorage.getItem("user")
  // const res = useSelector(state =>  state.auth.loginUser)
  console.log(data);
  const userData = JSON.parse(data); // Parse JSON string to object

useEffect(() =>{

  if(data){
    console.log(data);
    setAddress(userData.address);
    setAdminName(userData.name);
    setCity("Egypt");
    setPassword("inter new password");
    setEmail(userData.email);
    setMobile(userData.phone);
    setSchoolName(userData.schoolName)
  }

},[data])
// window.location.reload();
 const updateAdminData = async() =>{
await dispatch(updateAdmin({id:userData.id,formData:{
  namer:adminName,
  schoolName:schoolName,
email,
phone:mobile,
address,
password,
city,
language
}}))
 }

  return (
    <div className="w-full ">
      <div className="">
        <h1 className="font-semibold text-2xl ml-3 my-5 "> Settings</h1>

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
                Settings
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <div className="bg-white mx-4 rounded-md py-4 my-5 px-4">
        
        <div className="px-2 w-full">
          <form className="mt-6">
             <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                School Name
              </label>
              <input
                className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="School Name"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="bio"
              >
                Mobile  
              </label>
              <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
                type="text"
                className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="bio"
                placeholder="Mobile Number..."
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="bio"
              >
                City
              </label>
              <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
                type="text"
                className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="bio"
                placeholder="City..."
              />
            </div>
            {/* Inputs and labels next to each other with space between */}
               <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Address
                </label>
                <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                  className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Address"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
                  className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
               <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Language
                </label>
                <input
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                  className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Language"
                />
              </div>
             <div className="flex items-center mt-3 justify-between">
              <button
              onClick={updateAdminData}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
