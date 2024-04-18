import React, { useEffect, useState } from "react";
import Index from "../../../container/Index";
import PagesIndex from "../../../container/PagesIndex";

export const Header = (props) => {
  const navigate = PagesIndex.useNavigate();
  const { userData, userToken } = PagesIndex.useSelector((state) => state.user);
  console.log("userData", userData?.findRolePermisssion);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openSidebar = (event) => {
    if (props.open) {
      document.body.classList.add("body-overflow");
    } else {
      document.body.classList.remove("body-overflow");
    }
  };

  useEffect(() => {
    openSidebar();
  }, [props?.open]);

  const Logout = () => {
    navigate("/");
    localStorage.removeItem("token");
  };
  return (
    <Index.Box
      className={`user-header-main ${
        props.open ? "active" : "user-header-deactive"
      }`}
    >
      <Index.Box className="user-header-left">
        <Index.Box className="user-header-logo-main">
          <Index.IconButton
            className="user-menu-btn"
            onClick={() => {
              props.setOpen(!props.open);
              openSidebar();
            }}
          >
            <Index.MenuIcon />
          </Index.IconButton>
        </Index.Box>
        <Index.Box className="user-header-right">
          <Index.Box className="user-header-drop-main">
            <Index.Button
              className="drop-header-btn"
              id="basic-btn"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Index.Box className="flex-drop-main">
                <img
                  className="user-header-profile-icon"
                  alt="dashboard bell icon"
                  src={PagesIndex.Png.headerprofile}
                ></img>
                <Index.Box className="title-user-drop">
                  <Index.Typography
                    variant="h5"
                    component="h5"
                    className="user-header-drop"
                  >
                    {userData?.findRolePermisssion?.role_name
                      ? userData?.findRolePermisssion?.role_name
                      : ""}
                  </Index.Typography>
                </Index.Box>
              </Index.Box>
            </Index.Button>
          </Index.Box>
          <Index.Menu
            className="drop-header-menu"
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Index.MenuItem
              onClick={() => {
                handleClose();
              }}
              className="drop-header-menuitem"
            >
              <img className="drop-header" />
              Profile
            </Index.MenuItem>

            <Index.MenuItem
              onClick={() => {
                handleClose();
                Logout();
              }}
              className="drop-header-menuitem"
            >
              <img className="drop-header" /> Sign Out
            </Index.MenuItem>
          </Index.Menu>
        </Index.Box>
      </Index.Box>
    </Index.Box>
  );
};
