// slice.js
import { createSlice } from "@reduxjs/toolkit";
import { addContactThunk } from "../contacts/operations"; // Імпортуємо асинхронну операцію

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // Ваші синхронні редуктори
  },
  extraReducers: (builder) => {
    builder
      .addCase(addContactThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload); // Додаємо новий контакт в state
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; // Зберігаємо помилку в state
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
