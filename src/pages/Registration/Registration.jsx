import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (values) => {
    dispatch(register(values))
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        toast.error("Помилка реєстрації. Спробуйте ще раз.");
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleRegister}
      >
        <Form>
          <label>Name</label>
          <Field type="text" name="name" />

          <label>Email</label>
          <Field type="email" name="email" />

          <label>Password</label>
          <Field type="password" name="password" />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;
