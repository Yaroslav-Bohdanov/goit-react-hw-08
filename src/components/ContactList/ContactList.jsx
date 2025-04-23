import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts, deleteContact } from "../../redux/contactsSlice";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={style.contactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              onDelete={handleDelete}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
