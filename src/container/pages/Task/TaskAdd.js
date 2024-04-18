import React from "react";
import PagesIndex from "../../PagesIndex";
import Index from "../../Index";

const TaskAdd = () => {
  const { getAllProjectList, getUserListData } = PagesIndex.useSelector(
    (state) => state.user
  );
  const navigate = PagesIndex.useNavigate();
  const dispatch = PagesIndex.useDispatch();
  console.log(getUserListData, "getUserListData");

  const state = PagesIndex.useLocation();

  const editData = state?.state?.row;
  console.log(editData, "editData");
  const status = ["Open", "InProgress", "Complete", "Pending"];

  const initialValues = {
    title: "",
    description: "",
    assignee: "",
    taskDuration: "",
    assignDate: "",
    dueDate: "",
    status: "",
    projectId: "",
  };

  const handleFormSubmit = async (values) => {
    console.log(values, "values");
  };

  PagesIndex.useEffect(() => {
    dispatch(PagesIndex.getAllUser());
  }, []);

  return (
    <Index.Box className="dashboard-content">
      <Index.Box className="Add-main-box">
        <Index.Box className="add-header-title">
          <Index.Typography
            className="admin-page-title user-list-page-title"
            component="h2"
            variant="h2"
          >
            Task
          </Index.Typography>
        </Index.Box>
        <PagesIndex.Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          //   validationSchema={
          //     editData
          //       ? PagesIndex.validationSchemaUserUpdate
          //       : PagesIndex.validationSchemaUserAdd
          //   }
        >
          {({
            values,
            handleBlur,
            handleChange,
            errors,
            setFieldValue,
            touched,
            handleSubmit,
          }) => (
            <PagesIndex.Form onSubmit={handleSubmit}>
              <Index.Box className="add-user-data-main">
                <Index.Box sx={{ width: 1 }} className="grid-main">
                  <Index.Box
                    display="grid"
                    className="display-row-add-user"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gap={{ xs: 2, sm: 2, md: 2, lg: 2 }}
                  >
                    <Index.Box
                      gridColumn={{
                        xs: "span 12",
                        sm: "span 6",
                        md: "span 3",
                        lg: "span 3",
                      }}
                      className="grid-column"
                    >
                      <Index.Box className="input-box add-user-input">
                        <Index.FormHelperText className="form-lable">
                          Name
                        </Index.FormHelperText>
                        <Index.Box className="form-group">
                          <Index.TextField
                            fullWidth
                            id="fullWidth"
                            className="form-control"
                            placeholder=""
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Index.Box>
                        {/* {errors?.name && touched.name && (
                          <p className="error-text">{errors?.name}</p>
                        )} */}
                      </Index.Box>
                    </Index.Box>
                    <Index.Box
                      gridColumn={{
                        xs: "span 12",
                        sm: "span 6",
                        md: "span 3",
                        lg: "span 3",
                      }}
                      className="grid-column"
                    >
                      <Index.Box className="input-box add-user-input">
                        <Index.FormHelperText className="form-lable">
                          Email
                        </Index.FormHelperText>
                        <Index.Box className="form-group">
                          <Index.TextField
                            fullWidth
                            id="fullWidth"
                            className="form-control"
                            placeholder=""
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Index.Box>
                        {/* {errors?.email && touched.email && (
                          <p className="error-text">{errors?.email}</p>
                        )} */}
                      </Index.Box>
                    </Index.Box>

                    <Index.Box
                      gridColumn={{
                        xs: "span 12",
                        sm: "span 6",
                        md: "span 3",
                        lg: "span 3",
                      }}
                      className="grid-column"
                    >
                      <Index.Box className="input-box add-user-input">
                        <Index.FormHelperText className="form-lable">
                          Phone Number
                        </Index.FormHelperText>
                        <Index.Box className="form-group">
                          <Index.TextField
                            fullWidth
                            id="fullWidth"
                            type="number"
                            className="form-control"
                            placeholder=""
                            name="phoneNumber"
                            value={values.phoneNumber}
                            onChange={(e) => {
                              setFieldValue(
                                "phoneNumber",
                                e.target.value.slice(0, 10)
                              );
                            }}
                          />
                        </Index.Box>
                        {/* {errors?.phoneNumber && touched.phoneNumber && (
                          <p className="error-text">{errors?.phoneNumber}</p>
                        )} */}
                      </Index.Box>
                    </Index.Box>

                    <Index.Box
                      gridColumn={{
                        xs: "span 12",
                        sm: "span 6",
                        md: "span 3",
                        lg: "span 3",
                      }}
                      className="grid-column"
                    >
                      <Index.Box className="input-box add-user-input">
                        <Index.FormHelperText className="form-lable">
                          Role List
                        </Index.FormHelperText>
                        <Index.Box className="form-group">
                          <Index.Select
                            fullWidth
                            value={values.roleName}
                            name="roleName"
                            className="select"
                            onChange={(e) => {
                              setFieldValue("roleName", e.target.value);
                            }}
                          >
                            <Index.MenuItem value="">None</Index.MenuItem>
                            {/* {getRoleListData */}
                            {/* ? getRoleListData?.map((data) => ( */}
                            <Index.MenuItem
                            // value={data?._id}
                            >
                              {/* {data?.role_name} */}
                            </Index.MenuItem>
                            {/* )) */}
                            {/* : ""} */}
                          </Index.Select>
                        </Index.Box>
                        {/* {errors?.roleName && touched.roleName && (
                          <p className="error-text">{errors?.roleName}</p>
                        )} */}
                      </Index.Box>
                    </Index.Box>

                    <Index.Box
                      gridColumn={{
                        xs: "span 12",
                        sm: "span 6",
                        md: "span 3",
                        lg: "span 3",
                      }}
                      className="grid-column"
                    ></Index.Box>
                  </Index.Box>
                </Index.Box>
                <Index.Box className="user-btn-flex">
                  <Index.Box className="add-btn-main">
                    <Index.Button className="btn-main" type="submit">
                      Save
                    </Index.Button>
                  </Index.Box>
                </Index.Box>
              </Index.Box>
            </PagesIndex.Form>
          )}
        </PagesIndex.Formik>
      </Index.Box>
    </Index.Box>
  );
};

export default TaskAdd;
