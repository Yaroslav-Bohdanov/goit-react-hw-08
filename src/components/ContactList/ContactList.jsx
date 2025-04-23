import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchContacts } from "../redux/contactsOps";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id))
      .then(() => {
        dispatch(fetchContacts());
      })
      .catch((error) => {
        console.error("Error deleting contact:", error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading contacts: {error}</p>;
  }

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} - {contact.phone}
          <button onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
