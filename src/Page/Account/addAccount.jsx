import React from "react";
import { toast } from "react-toastify";

const InputField = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col mb-4 w-full md:w-1/2 lg:w-1/3 ">
      <label className="mb-1 text-lg">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg bg-gray-200 p-3 text-sm shadow-md outline-none"
      />
    </div>
  );
};

const AddAccount = () => {
  return (
    <div className="w-full p-5 mb-4 addStudent">
      <h1 className="font-semibold text-2xl my-4">Account</h1>

      <nav aria-label="Breadcrumb" className="flex mb-4">
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
              Add  Fees Group
            </a>
          </li>
        </ol>
      </nav>

      <div className="bg-white rounded-md p-5 mb-5">
        <h1 className="font-semibold text-2xl">Add New  Fees Group</h1>
        <form className="flex flex-wrap gap-4 pt-5">
          <InputField label="Name" placeholder="Name" />
          <InputField label="Gender" placeholder="Please Select Gender" />
          <InputField label="Class" placeholder="Please Select Class" />
          <InputField label="Date Of Birth" placeholder="Date of Birth" />
          <InputField label="Blood Group" placeholder="" />
          <InputField label="Religion" placeholder="Please Select Religion" />
          <InputField label="Admission Date" placeholder="" />
        </form>

      </div>
    </div>
  );
};

export default AddAccount;
