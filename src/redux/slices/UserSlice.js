import { createSlice } from "@reduxjs/toolkit";
import {
  LoginUser,
  getAllUser,
  getProjectList,
  getRoleList,
} from "../services/AddService";

const initialState = {
  isAuthenticated: false,
  userToken: "",
  userData: {},
  getRoleListData: [],
  getAllProjectList: [],
  getUserListData: [],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state, action) => {
      state.adminToken = "";
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      // console.log(action.payload.data.findAdmin);
      state.isAuthenticated = true;
      state.userToken = action?.payload?.data?.token;
      state.userData = action.payload?.data;
    });
    builder.addCase(getRoleList.fulfilled, (state, action) => {
      state.getRoleListData = action.payload;
    });
    builder.addCase(getProjectList.fulfilled, (state, action) => {
      state.getAllProjectList = action.payload?.data;
    });
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.getUserListData = action.payload?.data;
    });
  },
});

export const { userLogout } = UserSlice.actions;
export default UserSlice.reducer;
