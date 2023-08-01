import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
  .email('Invalid email').required('Required'),
  
});

const Register = () => (
  <div>
    <h1 className='head'>Registration Form</h1>
    
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        username:'',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
       
      <div>
          <Form>
            <div className="input_box">
            <Field  className='form-field' placeholder="Enter your firstName" name="firstName" />
           {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
            </div>
            <div className="input_box">
            <Field placeholder="Enter your lastName" name="lastName" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
            </div>
            <div className="input_box">
            <Field placeholder="Enter your username" name="username" />
           {errors.username && touched.username ? (
             <div>{errors.username}</div>
           ) : null}
            </div>
            <div className="input_box">
            <Field placeholder="Enter your email address" name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <button className="button">Signup</button>
            <div className="login_signup">Already have an account? <a href="/login" id="login">Login</a></div>
          </Form>
        </div>

      
      )}
    </Formik>
  </div>
);

export default Register