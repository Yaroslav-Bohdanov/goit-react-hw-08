export const selectFilteredContacts = (state) => {
  const filter = state.filter.text.toLowerCase();
  return state.contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );
};
export const getFilter = (state) => {
  return state.filter.text;
};
