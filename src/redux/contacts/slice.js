import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";
import { logoutThunk } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
  isOpenFieldForEdit: false,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  reducers: {
    isEditField: (state, action) => {
      state.isOpenFieldForEdit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.items.push(action.payload);
      })

      .addCase(editContact.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        const { id, name, number } = action.payload;
        const todo = state.find((task) => task.id === id);
        if (todo) {
          todo.name = name;
          todo.number = number;
        }
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })

      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state) => {
          state.loading = false;
          state.error = true;
        }
      );
  },
});

export const { isEditField } = contactsSlice.actions;
export default contactsSlice.reducer;
