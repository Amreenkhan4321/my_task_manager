import React from "react";
import Index from "../../../container/Index";
import PagesIndex from "../../../container/PagesIndex";

const Sidebar = (props) => {
  const { open, setOpen } = props;
  return (
    <Index.Box className={`user-sidebar-main ${open ? "active" : ""}`}>
      <Index.Box className="user-sidebar-inner-main">
        <Index.Box className="user-sidebar-logo-main">
          <img
            className="user-sidebar-logo"
            src={PagesIndex.Png.sidebarIconMain}
          />
        </Index.Box>

        <Index.Box className="user-sidebar-list-main">
          <Index.List className="user-sidebar-list">
            <Index.ListItem className="user-sidebar-listitem">
              <PagesIndex.Link className="user-sidebar-link">
                Dashboard
              </PagesIndex.Link>
            </Index.ListItem>
            <Index.ListItem className="user-sidebar-listitem">
              <PagesIndex.NavLink
                to="/dashboard/user-list"
                className="user-sidebar-link"
                activeClassName="active-link"
              >
                <img
                  src={PagesIndex.Svg.sidebar2}
                  className="user-sidebar-icons"
                />
                User
              </PagesIndex.NavLink>
            </Index.ListItem>
            <Index.ListItem className="user-sidebar-listitem">
              <PagesIndex.NavLink
                to="/dashboard/project-list"
                className="user-sidebar-link"
              >
                <img
                  src={PagesIndex.Svg.sidebar4}
                  className="user-sidebar-icons"
                />
                Project
              </PagesIndex.NavLink>
            </Index.ListItem>
            <Index.ListItem className="user-sidebar-listitem">
              <PagesIndex.NavLink
                to="/dashboard/all-task-list"
                className="user-sidebar-link"
              >
                <img
                  src={PagesIndex.Svg.sidebar6}
                  className="user-sidebar-icons"
                />
                Task
              </PagesIndex.NavLink>
            </Index.ListItem>
            <Index.ListItem className="user-sidebar-listitem">
              <PagesIndex.NavLink
                to="/dashboard/role-list"
                className="user-sidebar-link"
              >
                <img
                  src={PagesIndex.Svg.sidebar2}
                  className="user-sidebar-icons"
                />
                Role
              </PagesIndex.NavLink>
            </Index.ListItem>
          </Index.List>
        </Index.Box>
      </Index.Box>
    </Index.Box>
  );
};

export default Sidebar;
