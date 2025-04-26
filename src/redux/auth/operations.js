import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://connections-api.goit.global/";

export const authentificationInstance = axios.create({
  baseURL: API_URL,
});

const setAuthHeader = (token) => {
  authentificationInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  authentificationInstance.defaults.headers.common.Authorization = "";
};

export const registrationThunk = createAsyncThunk(
  "auth/register",
  async (userData) => {
    const response = await authentificationInstance.post(
      "/users/signup",
      userData
    );

    setAuthHeader(response.data.token);
    return response.data;
  }
);

export const loginThunk = createAsyncThunk("auth/login", async (userData) => {
  const response = await authentificationInstance.post(
    "/users/login",
    userData
  );
  setAuthHeader(response.data.token);
  return response.data;
});

export const logoutThunk = createAsyncThunk("auth/logout", async () => {
  await authentificationInstance.post("/users/logout");
  clearAuthHeader();
});

export const refreshUserThunk = createAsyncThunk(
  "auth/refresh",
  async (_, { getState }) => {
    const token = getState().auth.token;
    if (!token) throw new Error("No token");
    const response = await authentificationInstance.get("/users/current", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);
