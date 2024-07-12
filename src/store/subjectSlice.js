import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {useGetDataToken} from '../hooks/useGetData'
import useInsertData from "../hooks/useInsertData";
import useDeleteData from "../hooks/useDeleteData";
 
 

 


export const getSubject= createAsyncThunk('subject/getSubject', async(page,thunkAPI) =>{
  try{
const res = await useGetDataToken(`/api/v1/subjects?page=${page}`);
// const data = await res.json();
return res;
   }catch(error) {
console.log(error);
  }
})



export const deleteSubject= createAsyncThunk('subject/deleteSubject', async(id,thunkAPI) =>{
  try{
const res = await useDeleteData(`/api/v1/subjects/${id}`);
// const data = await res.json();
return res;
   }catch(error) {
console.log(error);
  }
})
export const getSubjectSearch= createAsyncThunk('subject/getSubjectSearch', async(word,thunkAPI) =>{
  try{
const res = await useGetDataToken(`/api/v1/subjects?name=${word}`);
// const data = await res.json();
return res;
   }catch(error) {
console.log(error);
  }
})

export const addSubject= createAsyncThunk('subject/addSubject', async(data,thunkAPI) =>{
  try{
const res = await useInsertData('/api/v1/subjects',data);
// const data = await res.json();
return res;
   }catch(error) {
console.log(error);
  }
})

 
const initialState = {
  subject: [],
   
  
 };

const subjectSlice = createSlice({
  name: "subjects", 
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    
 
    builder.addCase(getSubject.fulfilled, (state, action) => {
      state.subject=action.payload;
      console.log(state.subject)
    })

    builder.addCase(getSubjectSearch.fulfilled, (state, action) => {
      state.subject=action.payload;
      console.log(state.subject)
    })
    builder.addCase(addSubject.fulfilled, (state, action) => {
      state.subject=action.payload;
      console.log(state.subject)
    })
    builder.addCase(deleteSubject.fulfilled, (state, action) => {
      state.subject=action.payload;
      console.log(state.subject)
    })
  },
})
export default subjectSlice.reducer;
