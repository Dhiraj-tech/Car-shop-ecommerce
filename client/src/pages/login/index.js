import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
  .email('Invalid email').required('Required'),
  
});

const Login = () => (
  <div>
    <h1 className='head'>Login Form</h1>
    
    <Formik
      initialValues={{
        username:'',
        email: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
       
      <div>
          <Form>
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
            <button className="button">Login</button>
            <div className="login_signup">Don't have an account ? <a href="/register" id="login">Register</a></div>
          </Form>
        </div>

      
      )}
    </Formik>
  </div>
);

export default Login