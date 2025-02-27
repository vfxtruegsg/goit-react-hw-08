export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectIsOpenFieldForEdit = (state) =>
  state.contacts.isOpenFieldForEdit;
export const selectEditContactId = (state) => state.contacts.editContactId;
