import React from "react";
import Index from "../../Index";

const Forgot = () => {
  return (
    <Index.Box className="main-box">
      <Index.Box className="main-box-login">
        <Index.Box className="admin-login-inner set-login-box">
          <Index.Typography component="h2" variant="h2" className="login-text">
            Forgot Password
          </Index.Typography>
          <Index.Typography
            component="p"
            variant="p"
            className="admin-sign-para common-para"
          >
            Please enter your email here!
          </Index.Typography>
          <Index.Box className="input-box">
            <Index.FormHelperText className="form-lable">
              Email
            </Index.FormHelperText>
            <Index.Box className="form-group">
              <Index.TextField
                fullWidth
                id="fullWidth"
                className="form-control"
                name="email"
              />
              <p className="error-text">please enter name</p>
            </Index.Box>
          </Index.Box>

          <Index.Box className="btn-main-primary login-btn-main">
            <Index.Button className="btn-primary login-btn" type="submit">
              Submit
            </Index.Button>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </Index.Box>
  );
};

export default Forgot;
