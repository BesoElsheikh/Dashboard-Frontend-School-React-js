import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Students from "./Students/Students";
import { Routes, Route } from "react-router-dom";
import AddStudent from "./Students/AddStudent";
import StudentDetalis from "./Students/StudentDetalis";
import Auth from "./Auth/Auth";
import Admin from "./Admin/Admin";
import Parent from "./Parents/Parent";
import ParentDetalis from "./Parents/ParentDetalis";
import Teachers from "./Teachers/Teachers";
import AddTeacher from "./Teachers/addTeacher";
import TeacherDetalis from "./Teachers/TeacherDetalis";
import Subject from "./Subjects/Subjects";
import Settings from "./Settings/Settings";
import AccountExpenses from "./Account/AccountExpenses";
import AddAccount from "./Account/addAccount";
import Account from "./Account/Account";
import StudentPromotion from "./Students/StudentPromotion";
import AddExpenses from "./Account/AddExpenses";
import Fess from "./Account/Fess";
import UpdateStudent from "./Students/updateStudent";
import AdminProfile from "./Admin/AdminProfile";

const Main = () => {
  const user = localStorage.getItem("user");

  return (
    <div className="flex">
      {user ? (
        <>
          <Sidebar />
          <div className="w-full overflow-x-hidden">
            <Navbar />
            <Routes>
              <Route path="/" element={<Admin />} />
              <Route path="/admin-profile" element={<AdminProfile />} />
              <Route path="/student" element={<Students />} />
              <Route path="/addstudent" element={<AddStudent />} />
              <Route
                path="/studentdetalis/:id"
                element={<StudentDetalis />}
              />
              <Route path="/update/:id" element={<UpdateStudent />} />
              <Route path="/promotion/:id" element={<StudentPromotion />} />
              <Route path="/parent" element={<Parent />} />
              <Route path="/parentdetalis/:id" element={<ParentDetalis />} />
              <Route path="/teacher" element={<Teachers />} />
              <Route path="/addteacher" element={<AddTeacher />} />
              <Route path="/teacherdetalis/:id" element={<TeacherDetalis />} />
              <Route path="/account" element={<Account />} />
              <Route path="/addaccount" element={<AddAccount />} />
              <Route
                path="/account-expenses"
                element={<AccountExpenses />}
              />
              <Route path="/addexpenses" element={<AddExpenses />} />
              <Route path="/fess" element={<Fess />} />
              <Route path="/subject" element={<Subject />} />
              <Route path="/setting" element={<Settings />} />
            </Routes>
          </div>
        </>
      ) : (
        <Auth />
      )}
    </div>
  );
};

export default Main;