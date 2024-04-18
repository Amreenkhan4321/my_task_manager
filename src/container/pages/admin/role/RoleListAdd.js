import React from "react";
import Index from "../../../Index";
import PagesIndex from "../../../PagesIndex";

const RoleListAdd = () => {
  const navigate = PagesIndex.useNavigate();
  const state = PagesIndex.useLocation();
  const dispatch = PagesIndex.useDispatch();

  // console.log(state?.state?.row, "state");
  const editData = state?.state?.row;
  const initialValues = {
    roleName: editData?.role_name ? editData?.role_name : "",
    rolePermission: editData?.role_permission ? editData?.role_permission : [],
  };

  const handleSubmitRoleMaster = async (values) => {
    // console.log(values, "first");

    if (editData) {
      let data = {
        role_name: values.roleName,
        role_permission: values.rolePermission,
        id: editData?._id,
      };
      dispatch(PagesIndex.updateRoleList(data)).then((res) => {
        if (res?.payload?.status === 201 || 200) {
          navigate("/dashboard/role-list");
          dispatch(PagesIndex.getRoleList());
        }
      });
      console.log(data, "first");
    } else {
      let data = {
        role_name: values.roleName,
        role_permission: values.rolePermission,
      };
      dispatch(PagesIndex.AddRole(data)).then((res) => {
        console.log(res, 800);
        if (res?.payload !== undefined && res?.payload?.status === 201) {
          navigate("/dashboard/role-list");
          dispatch(PagesIndex.getRoleList());
        }
      });
    }
  };

  const modules = [
    {
      tag: "Team Member",
      title: "Team Member",
      isView: "true",
      isAdd: "true",
      isEdit: "true",
      isDelete: "true",
    },
    {
      tag: "Project Manager",
      title: "Project Manager",
      isView: "true",
      isAdd: "true",
      isEdit: "true",
      isDelete: "true",
    },
  ];

  return (
    <>
      <Index.Box className="dashboard-content">
        <Index.Box className="add-user-title-main">
          {" "}
          <Index.Typography
            className="user-list-page-title"
            component="h2"
            variant="h2"
          >
            {editData ? "Update" : "Add"}Role
          </Index.Typography>
        </Index.Box>

        <Index.Box className="page-border">
          <Index.Typography
            className="common-para add-basic-text"
            component="p"
            variant="p"
          ></Index.Typography>
          <Index.Typography
            className="common-para add-section-text"
            component="p"
            variant="p"
          ></Index.Typography>

          <PagesIndex.Formik
            initialValues={initialValues}
            onSubmit={handleSubmitRoleMaster}
            validationSchema={PagesIndex.ValidationSchemaAddRole}
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              touched,
              handleSubmit,
              setFieldValue,
            }) => (
              <PagesIndex.Form onSubmit={handleSubmit}>
                {console.log(values, errors)}
                <Index.Box className="add-role-flex">
                  <Index.Box className="add-rolw-left">
                    <Index.Box className="input-box-select">
                      <Index.FormHelperText className="form-lable">
                        Role Name
                      </Index.FormHelperText>
                      <Index.Box className="form-group-select">
                        <Index.TextField
                          fullWidth
                          id="fullWidth"
                          className="role-select"
                          placeholder="Enter role name"
                          name="roleName"
                          onBlur={handleBlur}
                          value={values.roleName}
                          onChange={handleChange}
                        />
                      </Index.Box>{" "}
                      {errors?.roleName && touched.roleName && (
                        <p className="error-text">{errors.roleName}</p>
                      )}
                    </Index.Box>
                  </Index.Box>
                </Index.Box>
                <Index.Box className="add-user-data-main">
                  <Index.Box className="add-role-table-main page-table-main">
                    <Index.TableContainer
                      component={Index.Paper}
                      className="table-container"
                    >
                      <Index.Table className="table" aria-label="simple table">
                        <Index.TableHead className="table-head">
                          <Index.TableRow className="table-row">
                            <Index.TableCell
                              component="th"
                              variant="th"
                              className="table-th"
                              align="center"
                            >
                              Module
                            </Index.TableCell>

                            <Index.TableCell
                              component="th"
                              variant="th"
                              className="table-th"
                              align="center"
                            >
                              Add
                            </Index.TableCell>
                            <Index.TableCell
                              component="th"
                              variant="th"
                              className="table-th"
                              align="center"
                            >
                              Edit
                            </Index.TableCell>

                            <Index.TableCell
                              component="th"
                              variant="th"
                              className="table-th"
                              align="center"
                            >
                              Delete
                            </Index.TableCell>
                          </Index.TableRow>
                        </Index.TableHead>
                        <Index.TableBody className="table-body">
                          {modules.map((row) => (
                            <Index.TableRow
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                              className="refferal-datarow-table"
                              key={row?.tag}
                            >
                              <Index.TableCell
                                component="td"
                                variant="td"
                                scope="row"
                                className="table-td"
                                align="center"
                              >
                                {row?.title}
                              </Index.TableCell>

                              <Index.TableCell
                                component="td"
                                variant="td"
                                scope="row"
                                className="table-td"
                                align="center"
                              >
                                <Index.Box className="email-refferal">
                                  <Index.Checkbox
                                    name="rolePermission"
                                    disabled={row?.isView === "false"}
                                    checked={
                                      row?.isView === "true"
                                        ? values?.rolePermission?.includes(
                                            row?.tag + "_add"
                                          )
                                          ? true
                                          : false
                                        : false
                                    }
                                    onChange={(e) => {
                                      if (
                                        values?.rolePermission?.includes(
                                          row?.tag + "_add"
                                        )
                                      ) {
                                        const newData =
                                          values?.rolePermission?.filter(
                                            function (item) {
                                              return item !== row?.tag + "_add";
                                            }
                                          );
                                        setFieldValue(
                                          "rolePermission",
                                          newData
                                        );
                                      } else {
                                        const newData = [
                                          ...values?.rolePermission,
                                        ];
                                        newData.push(row?.tag + "_add");
                                        setFieldValue(
                                          "rolePermission",
                                          newData
                                        );
                                      }
                                    }}
                                  />
                                </Index.Box>
                              </Index.TableCell>
                              <Index.TableCell
                                component="td"
                                variant="td"
                                scope="row"
                                className="table-td"
                                align="center"
                              >
                                <Index.Box className="email-refferal">
                                  <Index.Checkbox
                                    name="rolePermission"
                                    disabled={row?.isView === "false"}
                                    checked={
                                      row?.isView === "true"
                                        ? values?.rolePermission?.includes(
                                            row?.tag + "_edit"
                                          )
                                          ? true
                                          : false
                                        : false
                                    }
                                    onChange={(e) => {
                                      if (
                                        values?.rolePermission?.includes(
                                          row?.tag + "_edit"
                                        )
                                      ) {
                                        const newData =
                                          values?.rolePermission?.filter(
                                            function (item) {
                                              return (
                                                item !== row?.tag + "_edit"
                                              );
                                            }
                                          );
                                        setFieldValue(
                                          "rolePermission",
                                          newData
                                        );
                                      } else {
                                        const newData = [
                                          ...values?.rolePermission,
                                        ];
                                        newData.push(row?.tag + "_edit");
                                        setFieldValue(
                                          "rolePermission",
                                          newData
                                        );
                                      }
                                    }}
                                  />
                                </Index.Box>
                              </Index.TableCell>
                              <Index.TableCell
                                component="td"
                                variant="td"
                                scope="row"
                                className="table-td"
                                align="center"
                              >
                                <Index.Box className="email-refferal">
                                  <Index.Checkbox
                                    name="rolePermission"
                                    disabled={row?.isView === "false"}
                                    checked={
                                      row?.isView === "true"
                                        ? values?.rolePermission?.includes(
                                            row?.tag + "_delete"
                                          )
                                          ? true
                                          : false
                                        : false
                                    }
                                    onChange={(e) => {
                                      if (
                                        values?.rolePermission?.includes(
                                          row?.tag + "_delete"
                                        )
                                      ) {
                                        const newData =
                                          values?.rolePermission?.filter(
                                            function (item) {
                                              return (
                                                item !== row?.tag + "_delete"
                                              );
                                            }
                                          );
                                        setFieldValue(
                                          "rolePermission",
                                          newData
                                        );
                                      } else {
                                        const newData = [
                                          ...values?.rolePermission,
                                        ];
                                        newData.push(row?.tag + "_delete");
                                        setFieldValue(
                                          "rolePermission",
                                          newData
                                        );
                                      }
                                    }}
                                  />
                                </Index.Box>
                              </Index.TableCell>
                            </Index.TableRow>
                          ))}
                          <Index.Box className="add-btn-main-primary-role">
                            <Index.Button
                              className="add-btn-primary-role"
                              type="submit"
                            >
                              Save
                            </Index.Button>
                          </Index.Box>
                        </Index.TableBody>
                      </Index.Table>
                    </Index.TableContainer>
                  </Index.Box>
                </Index.Box>
              </PagesIndex.Form>
            )}
          </PagesIndex.Formik>
        </Index.Box>
      </Index.Box>
    </>
  );
};

export default RoleListAdd;
