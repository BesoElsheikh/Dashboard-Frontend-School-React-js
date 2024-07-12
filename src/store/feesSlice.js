import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {useGetDataToken} from '../hooks/useGetData'
import useInsertData from "../hooks/useInsertData";
 
 

 


export const getFees= createAsyncThunk('fees/getFees', async(page,thunkAPI) =>{
  try{
const res = await useGetDataToken(`/api/v1/feesGroup?page=${page}`);
// const data = await res.json();
return res;
   }catch(error) { 
console.log(error);
  }
})




export const addFees= createAsyncThunk('fees/addFees', async(data,thunkAPI) =>{
  try{
const res = await useInsertData('/api/v1/feesGroup',data);
// const data = await res.json();
return res;
   }catch(error) {
console.log(error);
  }
})

 
export const getFeeSearch= createAsyncThunk('fees/getFeeSearch', async(word,thunkAPI) =>{
  try{
const res = await useGetDataToken(`/api/v1/feesGroup?name=${word}`);
// const data = await res.json();
return res;
   }catch(error) {
console.log(error);
  }
})
const initialState = {
  fees:null,
   
  
 };

const feesSlice = createSlice({
  name: "fees", 
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    
 
    builder.addCase(getFees.fulfilled, (state, action) => {
      state.fees=action.payload;
      console.log(state.fees)
    })

    builder.addCase(addFees.fulfilled, (state, action) => {
      state.fees=action.payload;
      console.log(state.fees)
    })
    builder.addCase(getFeeSearch.fulfilled, (state, action) => {
      state.fees=action.payload;
      console.log(state.fees)
    })
  },
})
export default feesSlice.reducer;
