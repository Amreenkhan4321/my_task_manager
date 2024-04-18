//(Add Schema for yup and formik )
import * as yup from "yup";
export const SignUpValidation = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .matches(/^[A-Za-z]+$/, "Name should contain only letters")
    .matches(/^\S*$/, "Space not allowed")
    .max(20, "Name cannot exceed 20 characters"),

  email: yup
    .string()
    .email("Please enter valid email")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,40}))$/,
      "Please enter valid email"
    )
    .required("Email is required"),

  password: yup
    .string()
    .trim()
    .required("Password is required")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .matches(/^\S*$/, "Space not allowed")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password cannot exceed 20 characters."),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), ""], "Passwords don't match")
    .matches(/^\S*$/, "Space not allowed"),
  mobileNumber: yup
    .string()
    .required("Number is required")
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Please enter valid number"),
});

export const LoginValidation = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,40}))$/,
      "Please enter valid email"
    )
    .required("Email is required"),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .matches(/^\S*$/, "Space not allowed")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password cannot exceed 20 characters."),
});

//add user
export const validationSchemaUserAdd = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter valid email")
    .matches(
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
      "Please enter valid email"
    ),
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .matches(/^[A-Za-z]+$/, "Name should contain only letters")
    .matches(/^\S*$/, "Space not allowed")
    .max(20, "Name cannot exceed 20 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Must contain 8 characters")
    .matches(/^(?=.*[a-z])/, "Must contain at least one lowercase letter")
    .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase letter")
    .matches(/^(?=.*\d)/, "Must contain at least one digit")
    .matches(
      /^(?=.*[@$!%*?&])/,
      "Must contain at least one special character (@, $, !, %, *, ?, or &)"
    )
    .test(
      "strong-password",
      "Password must meet all criteria",
      function (value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(value);
      }
    ),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  phoneNumber: yup
    .string()
    .required("Number is required")
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Please enter valid number"),

  roleName: yup.string().trim().required("Role name is required"),
});

export const validationSchemaUserUpdate = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .matches(/^[A-Za-z]+$/, "Name should contain only letters")
    .matches(/^\S*$/, "Space not allowed")
    .max(20, "Name cannot exceed 20 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter valid email")
    .matches(
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
      "Please enter valid email"
    ),
  phoneNumber: yup
    .string()
    .required("Number is required")
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Please enter valid number"),

  roleName: yup.string().trim().required("Role name is required"),
});

export const ValidationSchemaAddRole = yup.object().shape({
  roleName: yup
    .string()
    .trim()
    .required("Role name is required")
    .matches(/^[A-Za-z]/, "Name should contain only letters")

    .max(30, "Role name cannot exceed 30 characters"),
});

//project add validation
export const validationSchemaProjectAdd = yup.object().shape({
  projectName: yup
    .string()
    .required("Project name is required")
    .matches(/^[A-Za-z]/, "Name should contain only letters")
    .max(50, "Project name cannot exceed 50 characters"),
  clientName: yup
    .string()
    .required("Client name is required")
    .matches(/^[A-Za-z]/, "Name should contain only letters")
    .max(30, "Client name cannot exceed 30 characters"),
  projectManager: yup
    .string()
    .required("Project manager is required")
    .matches(/^[A-Za-z]/, "Name should contain only letters")
    .max(30, "Project manager cannot exceed 30 characters"),
  technicalProjectManager: yup
    .string()
    .required("Technical manager is required")
    .matches(/^[A-Za-z]/, "Name should contain only letters")
    .max(30, "Technical manager cannot exceed 30 characters"),
  salesManager: yup
    .string()
    .required("Sales manager is required")
    .matches(/^[A-Za-z]/, "Name should contain only letters")
    .max(30, "Sales manager cannot exceed 30 characters"),
  requirements: yup
    .string()
    .required("Requirements field is required")
    .max(50, "Requirements field cannot exceed 50 characters"),
  projectDescription: yup
    .string()
    .required("Project description is required")
    .max(250, "Project description cannot exceed 250 characters"),
  status: yup.string().required("Status is required"),
  assignDate: yup.string().required("Assign date is requried"),
  dueDate: yup.string().required("Due date is requried"),
  startDate: yup.string().required("Start date is requried"),
});
