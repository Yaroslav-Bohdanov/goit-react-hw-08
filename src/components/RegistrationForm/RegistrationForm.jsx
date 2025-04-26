import React from "react";
import { Formik, Form, Field } from "formik";

const RegistrationForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name="name" placeholder="Name" />
        <Field name="email" placeholder="Email" />
        <Field name="password" placeholder="Password" type="password" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
