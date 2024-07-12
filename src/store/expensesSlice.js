import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {useGetDataToken} from '../hooks/useGetData'
import useInsertData from "../hooks/useInsertData";
import { useInsUpdateData } from "../hooks/useUpdateData";

 

 


export const getExpenses= createAsyncThunk('expenses/getExpenses', async(data,thunkAPI) =>{
  try{
const res = await useGetDataToken(`/api/v1/expenses?page=${data.page}&limit=${data.limit}`);
// const data = await res.json();
return res;
   }catch(error) {
console.log(error);
  }
}) 

export const getExpensesSearch= createAsyncThunk('expenses/getExpensesSearch', async(word,thunkAPI) =>{
  try{
const res = await useGetDataToken(`/api/v1/expenses?name=${word}`);
// const data = await res.json();
return res;
   }catch(error) {
console.log(error);
  }
})


export const addExpenses= createAsyncThunk('expenses/addExpenses', async(data,thunkAPI) =>{
  try{
const res = await useInsertData('/api/v1/expenses',data);
// const data = await res.json();
return res;
   }catch(error) {
console.log(error);
  }
})

export const updateExpenses= createAsyncThunk('expenses/updateExpenses', async(data,thunkAPI) =>{
  try{
const res = await useInsUpdateData(`/api/v1/expenses/${data.id}`,data.formData);
// const data = await res.json();
return res.data;
   }catch(error) {
console.log(error);
  }
})
 

const initialState = {
  expenses:null,
   
  
 };

const expensesSlice = createSlice({
  name: "expenses", 
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    
 
    builder.addCase(getExpenses.fulfilled, (state, action) => {
      state.expenses=action.payload;
      console.log(state.expenses)
    })

    builder.addCase(addExpenses.fulfilled, (state, action) => {
      state.expenses=action.payload;
      console.log(state.expenses)
    })
    builder.addCase(updateExpenses.fulfilled, (state, action) => {
      state.expenses=action.payload;
      console.log(state.expenses) 
    })
    builder.addCase(getExpensesSearch.fulfilled, (state, action) => {
      state.expenses=action.payload;
      console.log(state.expenses)
    })
  },
})
export default expensesSlice.reducer;
