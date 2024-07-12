import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useInsertData from "../../hooks/useInsertData";

export const adminLogin = createAsyncThunk(
  "admin/adminLogin",
  async (data, thunkAPI) => {
    try {
      const res = await useInsertData("/api/v1/admins/login", data);
      // const data = await res.json();
      return res;
    } catch (e) {
      return e.response;
    }
  }
);
const initialState = {
  loginUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(adminLogin.fulfilled, (state, action) => {
      state.loginUser = action.payload;
      console.log(state.loginUser);
    });
  },
});
export default authSlice.reducer;
