import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchContacts,
  deleteContact,
  addContact,
} from "../../redux/contacts/operations";
import {
  getContacts,
  getLoading,
  getError,
} from "../../redux/contacts/selectors";
import { getFilter } from "../../redux/filters/selectors";
import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";
import Loader from "../../components/Loader";
import { toast } from "react-hot-toast";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
    toast.success("Контакт видалено");
  };

  return (
    <div>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
};

export default Contacts;
