import React from "react";
import style from "./Style/registrationForm.module.css";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
// Registration form component
const RegistrationForm = () => {
  const { values, errors, handleBlur, touched, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values , action) => {
      console.log("in the use formik ", values);
      action.resetForm();
    },
  });
  return (
    <div className={style.formContainer}>
      <div className={style.form}>
        <h2>Bhavya Institute</h2>
        <h3>Registration Form</h3>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="name">Full Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter your name.."
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                 {errors.name && touched.name ? <p className={style.formError}>{errors.name}</p> : " " } 
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">Email Id:</label>
                </td>
                <td>
                  <input
                    type="email"
                    placeholder="Enter email id.."
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                 {errors.email && touched.email ? <p className={style.formError}>{errors.email}</p> : " " } 
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password">Password:</label>
                </td>
                <td>
                  <input
                    type="password"
                    placeholder="Enter password.."
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                 {errors.password && touched.password ? <p className={style.formError}>{errors.password}</p> : " " } 
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="confirm_password">Confirm Password:</label>
                </td>
                <td>
                  <input
                    type="password"
                    placeholder="Enter password again.."
                    name="confirm_password"
                    id="confirm_password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                 {errors.confirm_password && touched.confirm_password ? <p className={style.formError}>{errors.confirm_password}</p> : " " } 
                </td>
              </tr>
            </tbody>
          </table>
          <button className={style.btn} type="submit">
            Submit
          </button>
        </form>
      </div>
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFja2dyb3VuZCUyMGltYWdlJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        alt="dashboard"
      />
    </div>
  );
};

export default RegistrationForm;
