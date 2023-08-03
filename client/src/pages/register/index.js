import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.number()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Register = () => (
  <div>
    <h1 className="head">Registration Form</h1>

    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        address: "",
        phone:""
      }}
      validationSchema={SignupSchema}
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
                <h1 className="modal-title">Let's Get Started</h1>
                <p className="modal-desc">
                  Sign Up and get access to all the features of Carshop.
                </p>
                <Form>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">Username</label>
                    <input type="name" autoComplete="off" name="name" id="name" placeholder="Enter your username"
                    />
                    {errors.name && touched.name ? (
                      <div className="form-error">{errors.name}</div>
                    ) : null}
                  </div>

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

                  <div className="input-block">
                    <label htmlFor="address" className="input-label">Address</label>
                    <input type="address" autoComplete="off" name="address" id="address" placeholder="Enter your address"
                    />
                    {errors.address && touched.address ? (
                      <div className="form-error">{errors.address}</div>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="phone" className="input-label">phone</label>
                    <input type="phone" autoComplete="off" name="phone" id="phone" placeholder="Enter your phone"
                    />
                    {errors.phone && touched.phone ? (
                      <div className="form-error">{errors.phone}</div>
                    ) : null}
                  </div>

                  <div className="modal-buttons">
                    <button className="input-button" type="submit">Registration</button>
                  </div>

                </Form>
                <p className="sign-up">Already have an account? <a href="/login">Sign In now</a></p>
              </div>

              <div className="modal-right">
                <img src="sign-up.png" alt="" />
              </div>

            </div>
          </div>
        </div>
      )}
    </Formik>
  </div>
);

export default Register;
