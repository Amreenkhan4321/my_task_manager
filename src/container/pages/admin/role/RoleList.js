import Index from "../../../Index";
import PagesIndex from "../../../PagesIndex";

const RoleList = () => {
  const navigate = PagesIndex.useNavigate();
  const dispatch = PagesIndex.useDispatch();

  //all state
  const [data, setData] = PagesIndex.useState([]);
  const [deleteOpen, setDeleteOpen] = PagesIndex.useState(false);
  const [rowId, setRowId] = PagesIndex.useState("");

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleEdit = (row) => {
    navigate("/dashboard/role-list-add", { state: { row } });
  };

  const handleDelete = (id) => {
    setRowId(id);
    setDeleteOpen(true);
  };

  const handleDeleteRecord = async () => {
    try {
      const response = await PagesIndex.DataService.post(
        `${PagesIndex.Api.Role.DELETE_ROLE}/${rowId}`
      );
      console.log(response, "response?.data?.status");
      if (response?.data?.status === 200) {
        PagesIndex.toast.success(response?.data?.message);
        getRoleListData();
        setDeleteOpen(false);
      }
    } catch (error) {
      console.log(error?.response?.data?.message || error?.message);
    }
  };

  const getRoleListData = () => {
    dispatch(PagesIndex.getRoleList()).then((res) => {
      setData(res?.payload);
    });
  };

  PagesIndex.useEffect(() => {
    getRoleListData();
  }, []);

  return (
    <>
      <Index.Box className="dashboard-content">
        <Index.Box className="user-list-flex">
          <Index.Typography
            className="admin-page-title user-list-page-title"
            component="h2"
            variant="h2"
          >
            Role List
          </Index.Typography>
          <Index.Box className="userlist-btn-flex">
            {/*   
            <Index.Box className="main-box-search">
              {" "}
              <Index.TextField
                autoComplete="off"
                label="Search"
                variant="standard"
                className="search-field"
                // onChange={(e) => requestSearch(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <Index.IconButton>
                      <Index.SearchIcon />
                    </Index.IconButton>
                  ),
                }}
              />
            </Index.Box>{" "} */}
            <Index.Box className="add-btn-main-primary">
              <Index.Button
                className="add-btn-primary"
                onClick={() => navigate("/dashboard/role-list-add")}
              >
                Add Role
              </Index.Button>
            </Index.Box>
          </Index.Box>
        </Index.Box>
        <Index.Box className="admin-dashboard-list-row">
          <Index.Box sx={{ width: 1 }} className="grid-main">
            <Index.Box
              display="grid"
              className="display-row"
              gridTemplateColumns="repeat(12, 1fr)"
              gap={{ xs: 2, sm: 2, md: 0, lg: 0 }}
            >
              <Index.Box
                gridColumn={{
                  xs: "span 12",
                  sm: "span 12",
                  md: "span 12",
                  lg: "span 12",
                }}
                className="grid-column"
              >
                <Index.Box className="admin-dash-box">
                  <Index.Box className="userlist-table-main page-table-main gamewisebet-table">
                    <Index.TableContainer
                      component={Index.Paper}
                      className="table-container"
                    >
                      <Index.Table
                        sx={{ minWidth: 650 }}
                        aria-label="simple table"
                        className="table"
                      >
                        <Index.TableHead className="table-head">
                          <Index.TableRow className="table-row">
                            <Index.TableCell
                              component="th"
                              variant="th"
                              className="table-th"
                            >
                              S.No.
                            </Index.TableCell>
                            <Index.TableCell
                              component="th"
                              variant="th"
                              className="table-th"
                            >
                              Role Name
                            </Index.TableCell>

                            <Index.TableCell
                              component="th"
                              variant="th"
                              className="table-th"
                              align="right"
                            >
                              Action
                            </Index.TableCell>
                          </Index.TableRow>
                        </Index.TableHead>
                        <Index.TableBody className="table-body">
                          {data?.length ? (
                            data?.map((row, index) => (
                              <Index.TableRow
                                key={row?._id}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <Index.TableCell
                                  component="td"
                                  variant="td"
                                  scope="row"
                                  className="table-td"
                                  align="justify"
                                >
                                  {index + 1}
                                </Index.TableCell>
                                <Index.TableCell
                                  component="td"
                                  variant="td"
                                  scope="row"
                                  className="table-td"
                                  align="justify"
                                >
                                  {row?.role_name}
                                </Index.TableCell>

                                <Index.TableCell
                                  component="td"
                                  variant="td"
                                  className="table-td"
                                >
                                  <Index.Box className="userdata-btn-flex align-items">
                                    <Index.Button
                                      onClick={() => handleEdit(row)}
                                    >
                                      <img src={PagesIndex.Svg.editicon}></img>
                                    </Index.Button>
                                    <Index.Button
                                      onClick={() => handleDelete(row?._id)}
                                    >
                                      <img
                                        src={PagesIndex.Svg.deleteicon}
                                      ></img>
                                    </Index.Button>
                                  </Index.Box>
                                </Index.TableCell>
                              </Index.TableRow>
                            ))
                          ) : (
                            <Index.TableRow
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <Index.TableCell
                                component="th"
                                variant="th"
                                className="table-th"
                              >
                                No Record Found
                              </Index.TableCell>
                            </Index.TableRow>
                          )}
                        </Index.TableBody>
                      </Index.Table>
                      <hr />
                      <Index.Box
                        className="pagination-font-main"
                        mt={2}
                      ></Index.Box>
                    </Index.TableContainer>
                  </Index.Box>
                </Index.Box>{" "}
                <Index.Box className="pagination-main">
                  {/* <PagesIndex.CustomTablePagination
                    count={data?.length}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                  /> */}
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>

        <PagesIndex.DeleteModal
          deleteOpen={deleteOpen}
          handleDeleteRecord={handleDeleteRecord}
          handleDeleteClose={handleDeleteClose}
        />
      </Index.Box>
    </>
  );
};

export default RoleList;
