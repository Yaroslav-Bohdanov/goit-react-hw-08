import React from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import s from "./Form.module.css";

const FormComponent = ({ onSubmit }) => {
  return (
    <div className={s.gridContainer}>
      <Formik initialValues={{ name: "", email: "" }} onSubmit={onSubmit}>
        <FormikForm>
          <Field name="name" placeholder="Name" />
          <Field name="email" placeholder="Email" />
          <button type="submit">Submit</button>
        </FormikForm>
      </Formik>
    </div>
  );
};

export default FormComponent;
