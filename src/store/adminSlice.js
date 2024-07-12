import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {useGetDataToken,useGetData} from '../hooks/useGetData'
import { useInsUpdateData } from "../hooks/useUpdateData";
import useDeleteData from "../hooks/useDeleteData";
 
export const getAdmins= createAsyncThunk('admin/getadmin', async(_,thunkAPI) =>{
  try{
const res = await useGetDataToken('/api/v1/admins/profile');
// const data = await res.json();
return res.data;
   }catch(error) {
console.log(error);
  }
})

export const updateAdmin= createAsyncThunk('admin/updateAdmin', async(data,thunkAPI) =>{
  try{
const res = await useInsUpdateData(`/api/v1/admins/${data.id}`,data.formData);
// const data = await res.json();
return res.data;
   }catch(error) {
console.log(error);
  }
})
export const getTeacer= createAsyncThunk('admin/getTeacer', async(_,thunkAPI) =>{
  try{
const res = await useGetDataToken('/api/v1/teachers/admin');
// const data = await res.json();
return res;
   }catch(error) {
console.log(error);
  }
})
 

export const getTeacherSearch= createAsyncThunk('admin/getTeacherSearch', async(word,thunkAPI) =>{
  try{
const res = await useGetDataToken(`/api/v1/teachers/admin?name=${word}`);
// const data = await res.json();
return res; 
   }catch(error) {
console.log(error);
  }
})

export const deleteTeacher= createAsyncThunk('admin/deleteTeacher', async(id,thunkAPI) =>{
  try{
const res = await useDeleteData(`/api/v1/teachers/${id}/admin`);
// const data = await res.json();
return res;
   }catch(error) {
console.log(error);
  }
})
export const getStudents= createAsyncThunk('admin/getStudents', async(page,thunkAPI) =>{
  try{
const res = await useGetDataToken(`/api/v1/students/admin?page=${page}`);
// const data = await res.json();
return res;
   }catch(error) {
console.log(error);
  }
})

export const getStudentStatus= createAsyncThunk('student/getStudentStatus', async(status,thunkAPI) =>{
  try{
const res = await useGetDataToken(`/api/v1/students/admin?status=${status}`);
// const data = await res.json();
return res.data;
   }catch(error) {
console.log(error);
  }
})

export const getStudentSearch= createAsyncThunk('admin/getStudentSearch', async(word,thunkAPI) =>{
  try{
const res = await useGetDataToken(`/api/v1/students/admin?name=${word}`);
// const data = await res.json();
return res; 
   }catch(error) {
console.log(error);
  }
})

export const deleteStudent= createAsyncThunk('admin/deleteStudent', async(id,thunkAPI) =>{
  try{
const res = await useDeleteData(`/api/v1/students/${id}/admin`);
// const data = await res.json();
return res;
   }catch(error) {
console.log(error);
  }
})
export const getParents= createAsyncThunk('admin/getParents', async(_,thunkAPI) =>{
  try{
const res = await useGetDataToken('/api/v1/parents/admin');
// const data = await res.json();
return res.data;
   }catch(error) {
console.log(error);
  }
})
const initialState = {
  admins:null,
  teachers:null,
  students: null,
  parents:null,
  
 };

const adminSlice = createSlice({
  name: "admin", 
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAdmins.fulfilled, (state, action) => {
      state.admins=action.payload;
      console.log(state.admins)
    })
    builder.addCase(updateAdmin.fulfilled, (state, action) => {
      state.admins=action.payload;
      console.log(state.admins)
    })

    builder.addCase(getTeacer.fulfilled, (state, action) => {
      state.teachers=action.payload;
      console.log(state.teachers)
    })
    builder.addCase(deleteTeacher.fulfilled, (state, action) => {
      state.teachers=action.payload;
      console.log(state.teachers)
    })
    builder.addCase(getTeacherSearch.fulfilled, (state, action) => {
      state.teachers=action.payload;
      console.log(state.teachers)
    })

    builder.addCase(getStudents.fulfilled, (state, action) => {
      state.students=action.payload;
      console.log(state.students)
    })

    builder.addCase(getStudentSearch.fulfilled, (state, action) => {
      state.students=action.payload;
      console.log(state.students)
    })
  
    builder.addCase(getStudentStatus.fulfilled, (state, action) => {
      state.students=action.payload;
      console.log(action.payload)
     })

     builder.addCase(deleteStudent.fulfilled, (state, action) => {
      state.students=action.payload;
      console.log(action.payload)
     })
     builder.addCase(getParents.fulfilled, (state, action) => {
      state.parents=action.payload;
      console.log(state.parents)
    })
  },
})
export default adminSlice.reducer;
 