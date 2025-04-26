import React from "react";
import Contact from "./Contact";

const ContactList = ({ contacts, onDelete, onUpdate }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default ContactList;
