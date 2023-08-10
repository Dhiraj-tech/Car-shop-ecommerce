import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";

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
  confirm_password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.number()
    .min(10, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function Register() {

  const registerUser = async (values) => {
		try {
			const response = await fetch("http://localhost:8080/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});
			const result = await response.json();
			console.log("Post response:", result);
		} catch (error) {
			console.error("Error posting data:", error);
		}
	};

	return (
  <div>
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirm_password:"",
        address: "",
        phone:""
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        registerUser(values);
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
                    <Field type="name" autoComplete="off" name="name" id="name" placeholder="Enter your username"
                    />
                    {errors.name && touched.name ? (
                      <div className="form-error">{errors.name}</div>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="email" className="input-label">Email</label>
                    <Field type="email" autoComplete="off" name="email" id="email" placeholder="Enter your email address"/>
                    {errors.email && touched.email ? <div className="form-error">{errors.email}</div> : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="password" className="input-label">Password</label>
                    <Field type="password" autoComplete="off" name="password" id="password" placeholder="Enter your password"
                    />
                    {errors.password && touched.password ? (
                      <div className="form-error">{errors.password}</div>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="confirm_password" className="input-label">Confirm Password</label>
                    <Field type="password" autoComplete="off" name="confirm_password" id="confirm_password" placeholder="Enter your confirm password"
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <div className="form-error">{errors.confirm_password}</div>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="address" className="input-label">Address</label>
                    <Field type="address" autoComplete="off" name="address" id="address" placeholder="Enter your address"
                    />
                    {errors.address && touched.address ? (
                      <div className="form-error">{errors.address}</div>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="phone" className="input-label">phone</label>
                    <Field type="phone" autoComplete="off" name="phone" id="phone" placeholder="Enter your phone"
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
                <Image src="/sign-up.png" alt="sign-up image" height={500} width={500} />
              </div>

            </div>
          </div>
        </div>
      )}
    </Formik>
  </div>
  );
}
