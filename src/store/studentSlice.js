import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import useInsertData from '../hooks/useInsertData'
import {useGetDataToken} from '../hooks/useGetData'
import { useInsUpdateData } from "../hooks/useUpdateData";


//  ==========================create student =================================

export const addStudent= createAsyncThunk('student/addStudent', async(data,thunkAPI) =>{
  try{
const res = await useInsertData('/api/v1/students/admins/register',data);
 return res;
   }catch(error) {
console.log(error);
  }
})



//  ==========================get student details=================================



export const getStudent= createAsyncThunk('student/getStudent', async(studentID,thunkAPI) =>{
  try{
const res = await useGetDataToken(`/api/v1/students/${studentID}/admin`);
// const data = await res.json();
return res.data;
   }catch(error) {
console.log(error);
  }
})



//  ==========================get student promotion=================================


 
export const updatePromotion= createAsyncThunk('student/updatePromotion', async(data,thunkAPI) =>{
  try{
const res = await useInsUpdateData(`/api/v1/students/${data.id}/update/admin`,data.formData);
// const data = await res.json();
 
return res.data;
   }catch(error) {
console.log(error);
  }
})
const initialState = {
  student:null,
  oneStudent:null,
   
 };
const studentSlice = createSlice({
  name: "students", 
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addStudent.fulfilled, (state, action) => {
      state.student=action.payload;
      console.log(action.payload)
     })

     builder.addCase(getStudent.fulfilled, (state, action) => {
      state.oneStudent=action.payload;
      console.log(action.oneStudent)
     })


     builder.addCase(updatePromotion.fulfilled, (state, action) => {
      state.student=action.payload;
      console.log(action.payload)
     })
     

  },
})
export default studentSlice.reducer;
