import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchContacts,
  deleteContact,
  addContact,
  updateContact,
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
import Modal from "../../components/Modal"; // імпортуємо модальне вікно для підтвердження видалення

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (contactId) => {
    setContactToDelete(contactId);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteContact(contactToDelete));
    toast.success("Контакт видалено");
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
    toast.success("Контакт додано!");
  };

  const handleUpdateContact = (contact) => {
    dispatch(updateContact(contact));
    toast.success("Контакт оновлено!");
  };

  return (
    <div>
      <ContactForm onAdd={handleAddContact} onUpdate={handleUpdateContact} />
      <h2>Контакти</h2>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <ContactList
        contacts={filteredContacts}
        onDelete={handleDelete}
        onUpdate={handleUpdateContact}
      />
      {isModalOpen && (
        <Modal onClose={cancelDelete} onConfirm={confirmDelete}>
          <p>Ви впевнені, що хочете видалити цей контакт?</p>
        </Modal>
      )}
    </div>
  );
};

export default Contacts;
