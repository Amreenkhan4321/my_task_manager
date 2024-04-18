import React from "react";
import PagesIndex from "../../PagesIndex";
import Index from "../../Index";

const AllTaskList = () => {
  const navigate = PagesIndex.useNavigate();
  return (
    <Index.Box className="dashboard-content">
      <Index.Box className="user-list-flex">
        <Index.Typography
          className="admin-page-title user-list-page-title"
          component="h2"
          variant="h2"
        >
          All Task List
        </Index.Typography>
        <Index.Box className="userlist-btn-flex">
          <Index.Box></Index.Box>

          <Index.Box className="flex-all user-list-inner-flex">
            <Index.Box className="add-btn-main-primary">
              <Index.Button
                className="add-btn-primary"
                onClick={() => navigate("/dashboard/task-add")}
              >
                Add Task
              </Index.Button>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
      <Index.Box className="input-box-select">
        <Index.FormHelperText className="form-lable">
          Status
        </Index.FormHelperText>
        <Index.Box className="form-group-select">
          <Index.Select
            fullWidth
            name="status"
            // label="hgh"
            id="hgh"
            className="status-select"
            // value={values.bloodGroupId}
            // onChange={handleChange}
            // onBlur={handleBlur}
          >
            {/* {status?.map((option) => ( */}
            <Index.MenuItem
            //   value={option} name={option}
            >
              {/* {option} */}
            </Index.MenuItem>
            {/* ))} */}
          </Index.Select>
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
                            Summary
                          </Index.TableCell>
                          <Index.TableCell
                            component="th"
                            variant="th"
                            className="table-th"
                          >
                            Status
                          </Index.TableCell>

                          <Index.TableCell
                            component="th"
                            variant="th"
                            className="table-th"
                            align="center"
                          >
                            Assigned Date
                          </Index.TableCell>
                          <Index.TableCell
                            component="th"
                            variant="th"
                            className="table-th"
                            align="center"
                          >
                            Time
                          </Index.TableCell>
                          <Index.TableCell
                            component="th"
                            variant="th"
                            className="table-th"
                            align="center"
                          >
                            Due Date
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
                        {/* {data?.length > 0 ? (
                          data?.map((row) => ( */}
                        <Index.TableRow
                          //   key={row._id}
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
                            {/* {row?.projectName} */}
                          </Index.TableCell>
                          <Index.TableCell
                            component="td"
                            variant="td"
                            scope="row"
                            className="table-td"
                            align="justify"
                          >
                            {/* {row?.requirements} */}
                          </Index.TableCell>
                          <Index.TableCell
                            component="td"
                            variant="td"
                            scope="row"
                            className="table-td"
                            align="center"
                          >
                            {/* {row?.startDate} */}
                          </Index.TableCell>
                          <Index.TableCell
                            component="td"
                            variant="td"
                            scope="row"
                            className="table-td"
                            align="center"
                          >
                            {/* {row?.projectManager} */}
                          </Index.TableCell>
                          <Index.TableCell
                            component="td"
                            variant="td"
                            scope="row"
                            className="table-td"
                            align="center"
                          >
                            {/* {row?.technicalProjectManager} */}
                          </Index.TableCell>

                          <Index.TableCell
                            component="td"
                            variant="td"
                            className="table-td"
                          >
                            <Index.Box className="userdata-btn-flex align-items">
                              <Index.Button
                              // onClick={() => handleEditOpen(item)}
                              >
                                <img src={PagesIndex.Svg.editicon}></img>
                              </Index.Button>
                              <Index.Button
                              // onClick={() => handleDeleteOpen(item._id)}
                              >
                                <img src={PagesIndex.Svg.deleteicon}></img>
                              </Index.Button>
                            </Index.Box>
                          </Index.TableCell>
                        </Index.TableRow>
                        {/* ))
                        ) : ( */}
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
                        {/* )} */}
                      </Index.TableBody>
                    </Index.Table>
                    <hr />
                    <Index.Box className="pagination-font-main" mt={2}>
                      {" "}
                    </Index.Box>
                  </Index.TableContainer>
                </Index.Box>
              </Index.Box>{" "}
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </Index.Box>
  );
};

export default AllTaskList;
