//(Includes other imports)
import Sidebar from "../components/admin/defaultLayout/Sidebar";
import { Header } from "../components/admin/defaultLayout/Header";
import {
  Link,
  useNavigate,
  useLocation,
  useParams,
  Navigate,
  Outlet,
  createSearchParams,
  NavLink,
} from "react-router-dom";
import Png from "../assets/images/Png";
import Svg from "../assets/images/Svg";
import { Formik, Form } from "formik";
import {
  LoginValidation,
  SignUpValidation,
  validationSchemaUserUpdate,
  validationSchemaUserAdd,
  ValidationSchemaAddRole,
  validationSchemaProjectAdd,
} from "../validation/Validation";
import { toast } from "react-toastify";

import DataService from "../config/DataService";
import { Api } from "../config/Api";
import { useSelector, useDispatch } from "react-redux";
import { doGet, doPost, doPostParams } from "../utils/apiservices/ApiService";
import dayjs from "dayjs";
import moment from "moment";
import {
  getRoleList,
  AddRole,
  updateRoleList,
  addUser,
  getAllUser,
  deleteUser,
  updateUser,
  getProjectList,
} from "../redux/services/AddService";
import DeleteModal from "../utils/common/DeleteModel";
import { useEffect, useState } from "react";
import CustomTablePagination from "../utils/common/CustomTablePagination";
export default {
  Link,
  Sidebar,
  Header,
  useNavigate,
  Outlet,
  Png,
  Formik,
  Form,
  LoginValidation,
  SignUpValidation,
  toast,
  useDispatch,
  DataService,
  Api,
  useSelector,
  useLocation,
  Navigate,
  useParams,
  createSearchParams,
  NavLink,
  doGet,
  doPost,
  Svg,
  getRoleList,
  AddRole,
  DeleteModal,
  updateRoleList,
  useEffect,
  useState,
  CustomTablePagination,
  ValidationSchemaAddRole,
  validationSchemaUserUpdate,
  validationSchemaUserAdd,
  addUser,
  getAllUser,
  doPostParams,
  deleteUser,
  updateUser,
  dayjs,
  moment,
  validationSchemaProjectAdd,
  getProjectList,
};
