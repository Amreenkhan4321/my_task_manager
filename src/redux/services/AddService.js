import { createAsyncThunk } from "@reduxjs/toolkit";
import PagesIndex from "../../container/PagesIndex";
import DataService from "../../config/DataService";
import { Api } from "../../config/Api";

//login user
export const LoginUser = createAsyncThunk("user/LoginAdmin", async (data) => {
  console.log(data, "data");
  try {
    const response = await PagesIndex.DataService.post(
      PagesIndex.Api.User.USER_LOGIN,
      data
    );
    console.log(response, 7);
    if (response.data.status == 200) {
      PagesIndex.toast.success(response.data.message);
    }
    return response.data;
  } catch (error) {
    PagesIndex.toast.error(error.response.data.message || error.message);
  }
});

//add role
export const AddRole = createAsyncThunk("user/AddRole", async (data) => {
  console.log("check");
  try {
    const response = await DataService.post(Api.Role.ADD_ROLE, data);
    if (response.data.status == 201) {
      PagesIndex.toast.success(response.data.message);
    }
    console.log(response, "  console.log(response);");

    return response;
  } catch (error) {
    if (error?.response?.status == 409 || error?.response?.status == 500) {
      PagesIndex.toast.error(error?.response?.data?.message || error?.message);
    }
  }
});

//get role list
export const getRoleList = createAsyncThunk("user/getRoleList", async () => {
  try {
    const res = await DataService.get(Api.Role.GET_ROLE_LIST);
    return res?.data?.data;
  } catch (error) {
    console.log(error?.response?.data?.message || error?.message);
  }
});

//update role

export const updateRoleList = createAsyncThunk(
  "user/updateRoleList",
  async (data) => {
    try {
      const response = await DataService.post(
        `${Api.Role.UPDATE_ROLE}/${data?.id}`,
        data
      );
      if (response?.data?.status == 201 || 200) {
        PagesIndex.toast.success(response?.data?.message);
      }
      return response;
    } catch (error) {
      console.log(error?.response?.data?.message || error?.message);
    }
  }
);

//add user
export const addUser = createAsyncThunk("user/addUser", async (data) => {
  try {
    const response = await PagesIndex.doPost(
      PagesIndex.Api.User.USER_ADD,
      data
    );
    return response?.data;
  } catch (error) {}
});

//get user
export const getAllUser = createAsyncThunk("user/getAllUser", async () => {
  try {
    const response = await PagesIndex.doGet(PagesIndex.Api.User.GET_USER_LIST);
    return response?.data;
  } catch (error) {}
});

//delete user
export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  try {
    const response = await PagesIndex.doPostParams(
      PagesIndex.Api.User.DELETE_USER,
      id
    );

    return response?.data;
  } catch (error) {}
});

//update user
export const updateUser = createAsyncThunk("user/updateUser", async (data) => {
  try {
    const response = await PagesIndex.doPost(
      PagesIndex.Api.User.UPDATE_USER,
      data
    );
    return response?.data;
  } catch (error) {}
});

//get project list
export const getProjectList = createAsyncThunk(
  "user/getProjectList",
  async () => {
    try {
      const response = await PagesIndex.doGet(
        PagesIndex.Api.User.GET_ALL_PROJECT
      );
      return response?.data;
    } catch (error) {}
  }
);
