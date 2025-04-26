import React from "react";

const Contact = ({ contact, onDelete, onUpdate }) => {
  const handleDelete = () => onDelete(contact.id);
  const handleUpdate = () => onUpdate(contact.id);

  return (
    <div>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <button onClick={handleUpdate}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
