import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {useGetDataToken} from '../hooks/useGetData'
 
 

 


export const getClass= createAsyncThunk('class/getClass', async(limit,thunkAPI) =>{
  try{
const res = await useGetDataToken('/api/v1/class-Level');
// const data = await res.json();
return res.data;
   }catch(error) {
console.log(error);
  }
})


 
const initialState = {
  class:null,
   
  
 };

const classSlice = createSlice({
  name: "class", 
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    
 
    builder.addCase(getClass.fulfilled, (state, action) => {
      state.class=action.payload;
      console.log(state.class)
    })
  },
})
export default classSlice.reducer;
