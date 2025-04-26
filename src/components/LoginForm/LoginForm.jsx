import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operations"; // імпортуємо операцію для логіна
import { useNavigate } from "react-router-dom"; // імпортуємо useNavigate для навігації
import { toast } from "react-hot-toast"; // імпортуємо сповіщення

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // стан для email
  const [password, setPassword] = useState(""); // стан для паролю

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resultAction = await dispatch(login({ email, password }));
      if (login.fulfilled.match(resultAction)) {
        // якщо логін успішний
        toast.success("Логін успішний!");
        navigate("/contacts"); // перенаправляємо на сторінку контактів
      } else {
        toast.error("Невірний логін або пароль."); // помилка при логіні
      }
    } catch (error) {
      toast.error("Помилка входу. Спробуйте ще раз."); // обробка помилок
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // оновлення стану для email
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // оновлення стану для паролю
        placeholder="Пароль"
        required
      />
      <button type="submit">Вхід</button>
    </form>
  );
};

export default LoginForm;
