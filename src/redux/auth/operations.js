// operations.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Логін
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials) => {
    try {
      const response = await axios.post("/api/login", credentials);
      return response.data; // Повертає дані користувача після логіну
    } catch (error) {
      throw new Error(error.message); // Викидає помилку, якщо є
    }
  }
);

// Логаут
export const logoutThunk = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await axios.post("/api/logout");
    return response.data; // Логіка для logout
  } catch (error) {
    throw new Error(error.message); // Викидає помилку, якщо є
  }
});
