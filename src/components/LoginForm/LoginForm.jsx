import React from "react";
import { Formik, Form, Field } from "formik";

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
      <Form>
        <Field name="email" placeholder="Email" />
        <Field name="password" placeholder="Password" type="password" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
