import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";

import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import s from "./main.module.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1 className={s.header}>Phone Book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <ToastContainer />
    </Container>
  );
}

export default App;
