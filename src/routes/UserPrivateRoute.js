import PagesIndex from "../container/PagesIndex";

const UserPrivateRoute = () => {
  const token = localStorage.getItem("token");
  const accessToken = (token) => {
    if (!token) {
      return false;
    } else {
      PagesIndex.DataService.defaults.headers.common["Authorization"] = token;
      return true;
    }
  };
  return accessToken(token) ? (
    <PagesIndex.Outlet />
  ) : (
    <PagesIndex.Navigate to="/" replace={true} />
  );
};

export default UserPrivateRoute;
