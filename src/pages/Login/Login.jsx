import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (values) => {
    dispatch(login(values))
      .then(() => {
        navigate("/contacts");
      })
      .catch(() => {
        toast.error("Помилка входу. Спробуйте ще раз.");
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
      >
        <Form>
          <label>Email</label>
          <Field type="email" name="email" />

          <label>Password</label>
          <Field type="password" name="password" />

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
