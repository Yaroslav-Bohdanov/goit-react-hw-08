import React from "react";
import { Formik, Form, Field } from "formik";

const FormComponent = ({ onSubmit }) => {
  return (
    <Formik initialValues={{ name: "", email: "" }} onSubmit={onSubmit}>
      <Form>
        <Field name="name" placeholder="Name" />
        <Field name="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormComponent;
