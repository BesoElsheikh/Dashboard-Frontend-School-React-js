import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import useInsertData from '../hooks/useInsertData'
import {useGetDataToken} from '../hooks/useGetData'


//  ==========================create teacher =================================

export const addTeacher= createAsyncThunk('teacher/addTeacher', async(data,thunkAPI) =>{
  try{
const res = await useInsertData('/api/v1/teachers/admins/register',data);
 return res;
   }catch(error) {
console.log(error);
  }
})






//  ==========================get teacher details=================================



export const getTeacher= createAsyncThunk('teacher/getTeacher', async(teacherID,thunkAPI) =>{
  try{
const res = await useGetDataToken(`/api/v1/teachers/${teacherID}/admin`);
// const data = await res.json();
return res.data;
   }catch(error) {
console.log(error);
  }
})




const initialState = {
  teacher:null,
  oneTeacher:null,
   
 };

 

const teacherSlice = createSlice({
  name: "teachers", 
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addTeacher.fulfilled, (state, action) => {
      state.teacher=action.payload;
      console.log(action.payload)
     })


     builder.addCase(getTeacher.fulfilled, (state, action) => {
      state.oneTeacher=action.payload;
      console.log(action.oneTeacher)
     })

    
  },
})
export default teacherSlice.reducer;
