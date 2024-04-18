import Index from "../../../Index";
import PagesIndex from "../../../PagesIndex";

const UserAdd = () => {
  const { getRoleListData } = PagesIndex.useSelector((state) => state.user);

  const dispatch = PagesIndex.useDispatch();
  const { state } = PagesIndex.useLocation();
  const navigate = PagesIndex.useNavigate();

  //all state
  const [showPassword, setShowPassword] = PagesIndex.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    PagesIndex.useState(false);

  const editData = state?.row;

  PagesIndex.useEffect(() => {
    dispatch(PagesIndex.getRoleList());
  }, []);

  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((show) => !show);
  };
  const handleClickShowConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword((show) => !show);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const initialValues = {
    name: editData?.name ? editData?.name : "",
    email: editData?.email ? editData?.email : "",
    phoneNumber: editData?.mobile ? editData?.mobile : "",
    password: "",
    confirmPassword: "",
    roleName: editData?.role ? editData?.role?._id : "",
  };

  const handleSubmit = async (values) => {
    if (editData) {
      let data = {
        name: values.name,
        email: values.email,
        mobile: values.phoneNumber,
        role: values.roleName,
        id: editData?._id,
      };
      dispatch(PagesIndex.updateUser(data)).then((res) => {
        if (res?.payload?.status === 200) {
          navigate("/dashboard/user-list");
        }
      });
    } else {
      let data = {
        name: values.name,
        email: values.email,
        password: values.password,
        mobile: values.phoneNumber,
        role: values.roleName,
      };

      dispatch(PagesIndex.addUser(data)).then((res) => {
        if (res?.payload?.status === 201) {
          navigate("/dashboard/user-list");
        }
      });
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
            {editData ? "Update" : "Add"} User
          </Index.Typography>
        </Index.Box>
        <PagesIndex.Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={
            editData
              ? PagesIndex.validationSchemaUserUpdate
              : PagesIndex.validationSchemaUserAdd
          }
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
                        {errors?.name && touched.name && (
                          <p className="error-text">{errors?.name}</p>
                        )}
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
                        {errors?.email && touched.email && (
                          <p className="error-text">{errors?.email}</p>
                        )}
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
                        {errors?.phoneNumber && touched.phoneNumber && (
                          <p className="error-text">{errors?.phoneNumber}</p>
                        )}
                      </Index.Box>
                    </Index.Box>

                    {!editData ? (
                      <>
                        {" "}
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
                              Password
                            </Index.FormHelperText>
                            <Index.Box className="form-group">
                              <Index.TextField
                                fullWidth
                                size="small"
                                name="password"
                                className="form-control input-with-radius password-form-control"
                                type={showPassword ? "text" : "password"}
                                variant="outlined"
                                autoComplete="off"
                                inputProps={{
                                  className: "input_props",
                                }}
                                InputLabelProps={{ className: "add-formlabel" }}
                                FormHelperTextProps={{
                                  className: "input_label_props",
                                }}
                                onBlur={handleBlur}
                                value={values.password}
                                onChange={handleChange}
                                InputProps={{
                                  endAdornment: (
                                    <Index.InputAdornment position="end">
                                      <Index.IconButton
                                        className="passwrd-eye"
                                        aria-label="toggle password visibility"
                                        onClick={(e) =>
                                          handleClickShowPassword(e)
                                        }
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                      >
                                        {showPassword ? (
                                          <Index.Visibility />
                                        ) : (
                                          <Index.VisibilityOff />
                                        )}
                                      </Index.IconButton>
                                    </Index.InputAdornment>
                                  ),
                                }}
                              />
                            </Index.Box>
                            {errors?.password && touched.password && (
                              <p className="error-text">{errors?.password}</p>
                            )}
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
                              Confirm Password
                            </Index.FormHelperText>
                            <Index.Box className="form-group">
                              <Index.TextField
                                fullWidth
                                size="small"
                                name="confirmPassword"
                                className="form-control input-with-radius password-form-control"
                                type={showConfirmPassword ? "text" : "password"}
                                variant="outlined"
                                autoComplete="off"
                                inputProps={{
                                  className: "input_props",
                                }}
                                InputLabelProps={{ className: "add-formlabel" }}
                                FormHelperTextProps={{
                                  className: "input_label_props",
                                }}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                onChange={handleChange}
                                InputProps={{
                                  endAdornment: (
                                    <Index.InputAdornment position="end">
                                      <Index.IconButton
                                        className="passwrd-eye"
                                        aria-label="toggle password visibility"
                                        onClick={(e) =>
                                          handleClickShowConfirmPassword(e)
                                        }
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                      >
                                        {showConfirmPassword ? (
                                          <Index.Visibility />
                                        ) : (
                                          <Index.VisibilityOff />
                                        )}
                                      </Index.IconButton>
                                    </Index.InputAdornment>
                                  ),
                                }}
                              />
                            </Index.Box>
                            {errors?.confirmPassword &&
                              touched.confirmPassword && (
                                <p className="error-text">
                                  {errors?.confirmPassword}
                                </p>
                              )}
                          </Index.Box>
                        </Index.Box>
                      </>
                    ) : null}

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
                            {getRoleListData
                              ? getRoleListData?.map((data) => (
                                  <Index.MenuItem value={data?._id}>
                                    {data?.role_name}
                                  </Index.MenuItem>
                                ))
                              : ""}
                          </Index.Select>
                        </Index.Box>
                        {errors?.roleName && touched.roleName && (
                          <p className="error-text">{errors?.roleName}</p>
                        )}
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

export default UserAdd;
