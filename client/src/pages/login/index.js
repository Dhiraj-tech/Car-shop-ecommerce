import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { setUserDetails } from "@/redux/reducerSlices/userSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogin = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (response.status === 200) {
        toast.success("Login successful!");
        dispatch(setUserDetails(result));
        router.push("/");
      } else {
        toast.error("Login failed!");
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          // same shape as initial values
          handleLogin(values);
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
                      <label htmlFor="email" className="input-label">
                        Email
                      </label>
                      <Field
                        type="email"
                        autoComplete="off"
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                      />
                      {errors.email && touched.email ? (
                        <div className="form-error">{errors.email}</div>
                      ) : null}
                    </div>

                    <div className="input-block">
                      <label htmlFor="password" className="input-label">
                        Password
                      </label>
                      <Field
                        type="password"
                        autoComplete="off"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
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
                    Don't have an account?{" "}
                    <Link href="/register">Sign Up now</Link>
                  </p>
                </div>
                <div className="modal-right">
                  <Image
                    src="/sign-in.png"
                    height={500}
                    width={500}
                    alt="login image"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}


