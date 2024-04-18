import React from "react";
import Index from "../../../Index";
import PagesIndex from "../../../PagesIndex";

const ProjectAdd = () => {
  const navigate = PagesIndex.useNavigate();
  const state = PagesIndex.useLocation();

  const editData = state?.state?.row;
  console.log(editData, "editData");
  const status = ["Open", "InProgress", "Complete", "Pending"];

  const initialValues = {
    projectName: editData?.projectName ? editData?.projectName : "",
    clientName: editData?.clientName ? editData?.clientName : "",
    projectManager: editData?.projectManager ? editData?.projectManager : "",
    technicalProjectManager: editData?.technicalProjectManager
      ? editData?.technicalProjectManager
      : "",
    salesManager: editData?.salesManager ? editData?.salesManager : "",
    requirements: editData?.requirements ? editData?.requirements : "",
    startDate: editData?.startDate ? editData?.startDate : "",
    projectDescription: editData?.projectDescription
      ? editData?.projectDescription
      : "",
    status: editData?.status ? editData?.status : "",
    dueDate: editData?.dueDate ? editData?.dueDate : "",
    assignDate: editData?.assignDate ? editData?.assignDate : "",
  };

  const handleFormSubmit = async (values) => {
    try {
      let data = {
        projectName: values.projectName,
        clientName: values.clientName,
        projectManager: values.projectManager,
        technicalProjectManager: values.technicalProjectManager,
        salesManager: values.salesManager,
        requirements: values.requirements,
        startDate: values.startDate,
        projectDescription: values.projectDescription,
        status: values.status,
        dueDate: values.dueDate,
        assignDate: values.assignDate,
        id: editData?._id,
      };
      if (editData) {
        const response = await PagesIndex.doPost(
          PagesIndex.Api.User.UPDATE_PROJECT,
          data
        );

        if (response?.data?.status === 200) {
          navigate("/dashboard/project-list");
        }
      } else {
        const response = await PagesIndex.doPost(
          PagesIndex.Api.User.CREATE_PROJECT,
          values
        );

        if (response?.data?.status === 201) {
          navigate("/dashboard/project-list");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Index.Box className="dashboard-content">
      <Index.Box className="Add-main-box">
        <Index.Box className="add-header-title">
          <Index.Typography
            className="admin-page-title user-list-page-title"
            component="h2"
            variant="h2"
          >
            {editData ? "Update" : "Add"} Project
          </Index.Typography>
        </Index.Box>

        <PagesIndex.Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validationSchema={PagesIndex.validationSchemaProjectAdd}
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
              {console.log(values, "values")}
              <Index.Grid
                className="add-main-box-fileds"
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Index.Grid item xs={12} md={3} sm={12}>
                  <Index.Box className="input-box">
                    <Index.FormHelperText className="form-lable">
                      Project Name
                    </Index.FormHelperText>
                    <Index.Box className="form-group">
                      <Index.TextField
                        fullWidth
                        id="projectName"
                        className="form-control"
                        name="projectName"
                        value={values.projectName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Index.Box>
                    {errors?.projectName && touched.projectName && (
                      <p className="error-text">{errors.projectName}</p>
                    )}
                  </Index.Box>
                </Index.Grid>
                <Index.Grid item xs={12} md={3} sm={12}>
                  <Index.Box className="input-box">
                    <Index.FormHelperText className="form-lable">
                      Client Name
                    </Index.FormHelperText>
                    <Index.Box className="form-group">
                      <Index.TextField
                        fullWidth
                        id="clientName"
                        className="form-control"
                        name="clientName"
                        value={values.clientName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Index.Box>
                    {errors?.clientName && touched.clientName && (
                      <p className="error-text">{errors.clientName}</p>
                    )}
                  </Index.Box>
                </Index.Grid>
                <Index.Grid item xs={12} md={3} sm={12}>
                  <Index.Box className="input-box">
                    <Index.FormHelperText className="form-lable">
                      Project Manager
                    </Index.FormHelperText>
                    <Index.Box className="form-group">
                      <Index.TextField
                        fullWidth
                        id="projectManager"
                        className="form-control"
                        name="projectManager"
                        value={values.projectManager}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Index.Box>
                    {errors?.projectManager && touched.projectManager && (
                      <p className="error-text">{errors.projectManager}</p>
                    )}
                  </Index.Box>
                </Index.Grid>
                <Index.Grid item xs={12} md={3} sm={12}>
                  <Index.Box className="input-box">
                    <Index.FormHelperText className="form-lable">
                      Technical Project Manager
                    </Index.FormHelperText>
                    <Index.Box className="form-group">
                      <Index.TextField
                        fullWidth
                        id="technicalProjectManager"
                        className="form-control"
                        name="technicalProjectManager"
                        value={values.technicalProjectManager}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Index.Box>
                    {errors?.technicalProjectManager &&
                      touched.technicalProjectManager && (
                        <p className="error-text">
                          {errors.technicalProjectManager}
                        </p>
                      )}
                  </Index.Box>
                </Index.Grid>
                <Index.Grid item xs={12} md={3} sm={12}>
                  <Index.Box className="input-box">
                    <Index.FormHelperText className="form-lable">
                      Sales Manager
                    </Index.FormHelperText>
                    <Index.Box className="form-group">
                      <Index.TextField
                        fullWidth
                        id="salesManager"
                        className="form-control"
                        name="salesManager"
                        value={values.salesManager}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Index.Box>
                    {errors?.salesManager && touched.salesManager && (
                      <p className="error-text">{errors.salesManager}</p>
                    )}
                  </Index.Box>
                </Index.Grid>

                <Index.Grid item xs={12} md={3} sm={12}>
                  <Index.Box className="input-box">
                    <Index.FormHelperText className="form-lable">
                      Project Description
                    </Index.FormHelperText>
                    <Index.Box className="form-group">
                      <Index.TextField
                        fullWidth
                        id="projectDescription"
                        className="form-control"
                        name="projectDescription"
                        value={values.projectDescription}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Index.Box>
                    {errors?.projectDescription &&
                      touched.projectDescription && (
                        <p className="error-text">
                          {errors.projectDescription}
                        </p>
                      )}
                  </Index.Box>
                </Index.Grid>
                <Index.Grid item xs={12} md={3} sm={12}>
                  <Index.Box className="input-box">
                    <Index.FormHelperText className="form-lable">
                      Requirements
                    </Index.FormHelperText>
                    <Index.Box className="form-group">
                      <Index.TextField
                        fullWidth
                        id="requirements"
                        className="form-control"
                        name="requirements"
                        value={values.requirements}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Index.Box>
                    {errors?.requirements && touched.requirements && (
                      <p className="error-text">{errors.requirements}</p>
                    )}
                  </Index.Box>
                </Index.Grid>
                <Index.Grid item xs={12} md={3} sm={12}>
                  <Index.Box className="input-box">
                    <Index.FormHelperText className="form-lable">
                      Status
                    </Index.FormHelperText>
                    <Index.Box className="form-group">
                      <Index.Select
                        fullWidth
                        name="status"
                        className="status-select"
                        value={values.status}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {status?.map((option) => (
                          <Index.MenuItem value={option} name={option}>
                            {option}
                          </Index.MenuItem>
                        ))}
                      </Index.Select>
                    </Index.Box>
                    {errors?.status && touched.status && (
                      <p className="error-text">{errors.status}</p>
                    )}
                  </Index.Box>
                </Index.Grid>
                <Index.Grid item xs={12} md={3} sm={12}>
                  <Index.Box className="input-box">
                    <Index.FormHelperText className="form-lable">
                      Awarded Date
                    </Index.FormHelperText>
                    <Index.Box className="form-group">
                      <Index.LocalizationProvider
                        className="form-control"
                        dateAdapter={Index.AdapterDayjs}
                        locale="en"
                        dayjs={PagesIndex.dayjs}
                      >
                        <Index.DemoContainer components={["DatePicker"]}>
                          <Index.DatePicker
                            className="form-control"
                            name="assignDate"
                            onChange={(value) => {
                              setFieldValue(
                                "assignDate",
                                PagesIndex.moment(value.$d).format("YYYY-MM-DD")
                              );
                            }}
                            value={PagesIndex.dayjs(values?.assignDate)}
                            format="YYYY-MM-DD"
                            renderInput={(startProps) => (
                              <Index.TextField
                                className="form-control"
                                {...startProps.inputProps}
                                fullWidth
                                id="assignDate"
                                label="Assigned Date"
                              />
                            )}
                          />
                        </Index.DemoContainer>
                      </Index.LocalizationProvider>
                    </Index.Box>
                    {errors?.assignDate && touched.assignDate && (
                      <p className="error-text">{errors.assignDate}</p>
                    )}
                  </Index.Box>
                </Index.Grid>
                <Index.Grid item xs={12} md={3} sm={12}>
                  <Index.Box className="input-box">
                    <Index.FormHelperText className="form-lable">
                      Project Start Date
                    </Index.FormHelperText>
                    <Index.Box className="form-group">
                      <Index.LocalizationProvider
                        dateAdapter={Index.AdapterDayjs}
                        locale="en"
                        dayjs={PagesIndex.dayjs}
                      >
                        <Index.DemoContainer components={["DatePicker"]}>
                          <Index.DatePicker
                            name="startDate"
                            className="form-control"
                            onChange={(value) => {
                              setFieldValue(
                                "startDate",
                                PagesIndex.moment(value.$d).format("YYYY-MM-DD")
                              );
                            }}
                            value={PagesIndex.dayjs(values?.startDate)}
                            format="YYYY-MM-DD"
                            renderInput={(startProps) => (
                              <Index.TextField
                                className="form-control"
                                {...startProps.inputProps}
                                fullWidth
                                id="startDate"
                                label="Start Date"
                              />
                            )}
                          />
                        </Index.DemoContainer>
                      </Index.LocalizationProvider>
                    </Index.Box>
                    {errors?.startDate && touched.startDate && (
                      <p className="error-text">{errors.startDate}</p>
                    )}
                  </Index.Box>
                </Index.Grid>
                <Index.Grid item xs={12} md={3} sm={12}>
                  <Index.Box className="input-box">
                    <Index.FormHelperText className="form-lable">
                      Project Due Date
                    </Index.FormHelperText>
                    <Index.Box className="form-group">
                      <Index.LocalizationProvider
                        dateAdapter={Index.AdapterDayjs}
                        locale="en"
                        dayjs={PagesIndex.dayjs}
                      >
                        <Index.DemoContainer components={["DatePicker"]}>
                          <Index.DatePicker
                            name="dueDate"
                            className="form-control"
                            onChange={(value) => {
                              setFieldValue(
                                "dueDate",
                                PagesIndex.moment(value.$d).format("YYYY-MM-DD")
                              );
                            }}
                            value={PagesIndex.dayjs(values?.dueDate)}
                            format="YYYY-MM-DD"
                            renderInput={(startProps) => (
                              <Index.TextField
                                className="form-control"
                                {...startProps.inputProps}
                                fullWidth
                                id="dueDate"
                                label="Due Date"
                              />
                            )}
                          />
                        </Index.DemoContainer>
                      </Index.LocalizationProvider>
                    </Index.Box>
                    {errors?.dueDate && touched.dueDate && (
                      <p className="error-text">{errors.dueDate}</p>
                    )}
                  </Index.Box>
                </Index.Grid>
              </Index.Grid>
              <Index.Box className="add-btn-main">
                <Index.Button className="btn-main" type="submit">
                  Save
                </Index.Button>
              </Index.Box>
            </PagesIndex.Form>
          )}
        </PagesIndex.Formik>
      </Index.Box>
    </Index.Box>
  );
};

export default ProjectAdd;
