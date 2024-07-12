import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {   getStudent, updatePromotion } from "../../store/studentSlice";
import { getClass } from "../../store/classSlice";
 import { Link, useParams } from "react-router-dom";
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

const UpdateStudent = () => {
 
  const dispatch = useDispatch(); 

  const {id} = useParams();

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getClass());
        await dispatch(getStudent(id));

      } catch (error) {
        console.error("Error fetching student:", error);
        
      } 
    };

    fetchData();
  }, [dispatch]);

  const student = useSelector((state) => state.students.oneStudent);
  console.log(student)


  const classes = useSelector((state) => state.class.class)
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [address, setAddress] = useState("");
  const [fatherOccupation, setFatherOccupation] = useState("");
  const [className, setClassName] = useState("");
  const [religion, setReligion] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [admission, setAdmission] = useState("");
  const [fatherEmail, setFatherEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle,setToggle]= useState(true);
 useEffect(() =>{
  if(student){
    setName(student.name);
    setEmail(student.email);
    setPhone(student.phone);
    setFatherName(student.fatherName);
    setMotherName(student.motherName);
    setAddress(student.address);
    setFatherOccupation(student.fatherOccupation);
    // setClassName(student.classLevels[0]?.name);
    setReligion(student.religion);
    setDate(student.dateOfBirth);
    setGender(student.gender);
    setAdmission(student.admissionDate);
    setFatherEmail(student.fatherEmail);
    }
  console.log(student.classLevels[0]?.id)
  },[])
  const addData = async () => {
    
    await dispatch(
      updatePromotion({
id,formData:{
        name,
        email,
        phone,
        fatherName,
        motherName,
        address,
        fatherOccupation,
        classLevels:className,
        religion,
        dateOfBirth:date,
        gender,
        admissionDate:admission,
        fatherEmail: fatherEmail,
        password
       }
      })
    );
    toast.success("student update successfully");

  };
 const handleClass =(e) =>{
  setClassName(e.target.value)
  console.log(className)
 }
  return (
    <div className="w-full p-5 mb-4 addStudent">
      <h1 className="font-semibold text-2xl my-4">Student</h1>

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
              Student Update
            </a>
          </li>
        </ol>
      </nav>

      <div className="bg-white rounded-md p-5 mb-5">
        <h1 className="font-semibold text-2xl">Update Student</h1>
        <form className="flex flex-wrap gap-4 pt-5">
          <InputField
            val={name}
            set={setName}
            label="Name"
            placeholder="Name"
          />
 <InputField
            val={email}
            set={setEmail}
            label="Email"
            placeholder="Email"
          />
          <InputField
            val={password}
            set={setPassword}
            label="password"
            placeholder="password"
          />
          <InputField
            val={gender}
            set={setGender}
            label="Gender"
            placeholder="Please Select Gender"
          />
         
              <div className="flex flex-col mb-4 w-full md:w-1/2 lg:w-1/3 "> 
              <label className="mb-1 text-lg">Please Select Class </label>
  

  <select 
  onChange={handleClass}
className="w-full rounded-lg bg-gray-200 p-3 text-sm shadow-md outline-none"
>

 
     
  {classes && classes.map((item, index) => (
//     <option value="" disabled selected hidden>
//     select class
//  </option>
<option key={index} value={item._id}>{item.name}</option>
))}
    
 
  
</select>
  
             
              </div>
           
          

             

        
          <InputField
            val={date}
            set={setDate}
            label="Date Of Birth"
            placeholder="Date of Birth"
          />
          {/* <InputField label="Blood Group" placeholder="" /> */}
          <InputField
            val={religion}
            set={setReligion}
            label="Religion"
            placeholder="Please Select Religion"
          />
          <InputField
            val={admission}
            set={setAdmission}
            label="Admission Date"
            placeholder="Admission Date"
          />
          <InputField
            val={fatherName}
            set={setFatherName}
            label="Father's Name"
            placeholder="Father's Name"
          />
          <InputField
            val={motherName}
            set={setMotherName}
            label="Mother's Name"
            placeholder="Mother's Name"
          />
          <InputField
            val={fatherEmail}
            set={setFatherEmail}
            label="Father's Email"
            placeholder="Father's Email"
          />
          <InputField val={phone} set={setPhone} label="Phone" placeholder="" />
          <InputField
            val={fatherOccupation}
            set={setFatherOccupation}
            label="Father's Occupation"
            placeholder="Father's Occupation"
          />
          <InputField
            val={address}
            set={setAddress}
            label="Address"
            placeholder="Address"
          />
        </form>
        
           <Link to='/student'>
          <button
            onClick={addData}
            className="px-10 py-2 bg-green-600 mt-5 text-white rounded-md"
          >
            Update
          </button>
          </Link>
        </div>
 
       
    </div>
  );
};

export default UpdateStudent;
