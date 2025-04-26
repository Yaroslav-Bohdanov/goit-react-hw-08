// operations.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Створення асинхронного запиту для додавання контакту
export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (newContact) => {
    try {
      // Відправка POST запиту для додавання контакту
      const response = await axios.post("/api/contacts", newContact);
      return response.data; // Повертає доданий контакт
    } catch (error) {
      throw new Error(error.message); // Якщо помилка, викидає її
    }
  }
);
