import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import toast from "react-hot-toast";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

export default function Contact() {
  const contactUser = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();

      if (response.status == 201) {
        toast.success("Message sent successful!");
      } else if (response.status == 409) {
        toast.error("Message already send!");
      } else {
        toast.error("Unable to send the message!");
      }
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
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={(values) => {
          // same shape as initial values
          contactUser(values);
        }}
      >
        {({ errors, touched }) => (
          <div className="container">
            <div className="modal">
              <div className="modal-container">
                <div className="modal-right">
                  <Image
                    src="/contact.jpg"
                    alt="contact image"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="modal-left">
                  <h1 className="contact-title">Contact Us</h1>
                  <Form>
                    <div className="input-block">
                      <label htmlFor="name" className="input-label">
                        Name
                      </label>
                      <Field
                        type="name"
                        autoComplete="off"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                      />
                      {errors.name && touched.name ? (
                        <div className="form-error">{errors.name}</div>
                      ) : null}
                    </div>

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
                      <label htmlFor="message" className="input-label">
                        Message
                      </label>
                      <Field
                        type="message"
                        autoComplete="off"
                        name="message"
                        id="message"
                        placeholder="Enter your message"
                      />
                      {errors.message && touched.message ? (
                        <div className="form-error">{errors.message}</div>
                      ) : null}
                    </div>

                    <div className="modal-buttons">
                      <button className="input-button" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
