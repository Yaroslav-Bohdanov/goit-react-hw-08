import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations"; // оновлюємо токен
import { useAuth } from "./hooks/useAuth"; // свій хук для перевірки логіну

import Layout from "./components/Layout"; // загальний Layout з AppBar

import PrivateRoute from "./routes/PrivateRoute";
import RestrictedRoute from "./routes/RestrictedRoute";

const HomePage = lazy(() => import("./pages/Home/Home"));
const RegisterPage = lazy(() => import("./pages/Registration/Registration"));
const LoginPage = lazy(() => import("./pages/Login/Login"));
const ContactsPage = lazy(() => import("./pages/Contacts/Contacts"));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth(); // перевіряємо, чи оновлюємо юзера

  useEffect(() => {
    dispatch(refreshUser()); // при старті оновлюємо
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Loading...</div>; // або Loader компонент
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
