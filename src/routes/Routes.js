import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "../container/auth/login/Login";
import SignUp from "../container/auth/signUp/SignUp";
import Forgot from "../container/auth/forgot/Forgot";
import Layout from "../components/admin/Dashboard/Layout";
import PageNotFound from "../components/common/pagenotfound/PageNotFound";
import ProjectList from "../container/pages/admin/projects/ProjectList";
import ProjectAdd from "../container/pages/admin/projects/ProjectAdd";
import UserList from "../container/pages/admin/user/UserList";
import UserAdd from "../container/pages/admin/user/UserAdd";
import RoleList from "../container/pages/admin/role/RoleList";
import RoleListAdd from "../container/pages/admin/role/RoleListAdd";
import AllTaskList from "../container/pages/Task/AllTaskList";
import UserPrivateRoute from "./UserPrivateRoute";
import TaskAdd from "../container/pages/Task/TaskAdd";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="*" element={<PageNotFound />} />
        <Route element={<UserPrivateRoute />}>
          <Route path="/dashboard" element={<Layout />}>
            <Route path="user-list" element={<UserList />} />
            <Route path="user-add" element={<UserAdd />} />
            <Route path="project-list" element={<ProjectList />} />
            <Route path="project-add" element={<ProjectAdd />} />
            <Route path="role-list" element={<RoleList />} />
            <Route path="role-list-add" element={<RoleListAdd />} />
            <Route path="all-task-list" element={<AllTaskList />} />
            <Route path="task-add" element={<TaskAdd />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
