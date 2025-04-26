import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice"; // Імпортуємо редуктор за допомогою default

const store = configureStore({
  reducer: {
    auth: authReducer, // Замість import { authReducer } ми імпортуємо його як authReducer
  },
});

export default store;
