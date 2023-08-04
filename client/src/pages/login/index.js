import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Login = () => (
  <div>
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (

        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">Sign in to continue to Carshop.</p>
                <Form>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">Email</label>
                    <input type="email" autoComplete="off" name="email" id="email" placeholder="Enter your email address"/>
                    {errors.email && touched.email ? <div className="form-error">{errors.email}</div> : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="password" className="input-label">Password</label>
                    <input type="password" autoComplete="off" name="password" id="password" placeholder="Enter your password"
                    />
                    {errors.password && touched.password ? (
                      <div className="form-error">{errors.password}</div>
                    ) : null}
                  </div>
                
                  <div className="modal-buttons">
                    <button className="input-button" type="submit">
                      Login
                    </button>
                  </div>
                </Form>
                <p className="sign-up">
                  Don't have an account? <a href="/register">Sign Up now</a>
                </p>
              </div>
              <div className="modal-right">
                <img src="sign-in.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  </div>
);

export default Login;
