import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { registrationThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async ({ name, email, password }, actions) => {
    try {
      await dispatch(registrationThunk({ name, email, password })).unwrap();
      toast("Registered successfully");
    } catch {
      toast("Registration failed. Please try again.");
    }
    actions.resetForm();
  };

  return (
    <div>
      <h1>To use the full functionality, please register now</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Name</span>
            <Field name="name" />
          </label>
          <label>
            <span>Email</span>
            <Field name="email" />
          </label>
          <label>
            <span>Password</span>
            <Field name="password" type="password" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
