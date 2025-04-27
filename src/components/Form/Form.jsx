import style from "./Form.module.css";
const Form = ({ children }) => {
  return <div className={style.formContainer}>{children}</div>;
};

export default Form;
