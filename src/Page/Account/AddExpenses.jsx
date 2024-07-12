import React, { useState } from "react";
import { addExpenses } from "../../store/expensesSlice";
import { useDispatch } from "react-redux";
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

const AddExpenses = () => {
  const dispatch = useDispatch();
 
 const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

const resetHsndle =() =>{
  setName('');
setEmail('');
setPhone('');
setAmount('');
setDate('');
setType('');
setStatus('');
}
  
  const addData = async () => {
    if (!name || !email ||!phone||!amount||!date||!type||!status) {
      toast.warn("Please fill all fields")}else{
        await dispatch(
          addExpenses({
           name,
           amount,
           status,
           phone,
           date,
           parentEmail:email,
           expensesType: type,
    
    
         
          })
        );
        toast.success(" Expenses added successfully ");

        resetHsndle();
      }
   
  };
  return (
    <div>
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
                Add Expenses
              </a>
            </li>
          </ol>
        </nav>
      </div>

      <div className="bg-white rounded-md p-5 mb-5 mx-2">
        <h1 className="font-semibold text-2xl">Add New Expenses</h1>
        <form className="flex flex-wrap gap-4 pt-5">
          <InputField
           val={name}
           set={setName}
          label="Name" placeholder="Name" />
          <InputField 
           val={type}
           set={setType}
          label="Expense Type " placeholder="Expense Type" />
          <InputField
           val={status}
           set={setStatus}
          label="Status" placeholder="Status" />
          <InputField
           val={amount}
           set={setAmount}
          label="Amount" placeholder="Amount" />
          <InputField
           val={phone}
           set={setPhone}
          label="Phone" placeholder="Phone" />
          <InputField 
           val={email}
           set={setEmail}
          label="E-Mail Address" placeholder="E-Mail Address" />
          <InputField 
           val={date}
           set={setDate}
          label="Due Date" placeholder="Due Date" />

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
    </div>
  );
};

export default AddExpenses;
