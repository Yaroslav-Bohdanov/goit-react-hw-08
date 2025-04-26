import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";

const ContactForm = ({ onAdd, onUpdate, contactToEdit }) => {
  const [initialValues, setInitialValues] = useState({ name: "", phone: "" });

  useEffect(() => {
    if (contactToEdit) {
      setInitialValues(contactToEdit);
    }
  }, [contactToEdit]);

  const handleSubmit = (values) => {
    if (contactToEdit) {
      onUpdate(values);
    } else {
      onAdd(values);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field name="name" placeholder="Name" />
        <Field name="phone" placeholder="Phone" />
        <button type="submit">
          {contactToEdit ? "Update" : "Add"} Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
