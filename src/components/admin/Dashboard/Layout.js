import React, { useState } from "react";
import Index from "../../../container/Index";
import PagesIndex from "../../../container/PagesIndex";
import "../defaultLayout/defaultLayout.css";
const Layout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Index.Box className="dashboard-main">
        <Index.Box
          className={`dashboard-left-main ${
            open ? "active" : "user-sidebar-deactive"
          }`}
        >
          <PagesIndex.Sidebar open={open} setOpen={setOpen} />
        </Index.Box>
        <Index.Box className="dashboard-right-main">
          <PagesIndex.Header open={open} setOpen={setOpen} />
          <Index.Box className="dashboard-content-main">
            <PagesIndex.Outlet />
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </div>
  );
};

export default Layout;
