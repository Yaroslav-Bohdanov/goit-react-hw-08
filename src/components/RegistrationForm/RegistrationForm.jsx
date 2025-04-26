import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations"; // імпортуємо операцію для реєстрації
import { useNavigate } from "react-router-dom"; // імпортуємо useNavigate для навігації
import { toast } from "react-hot-toast"; // імпортуємо сповіщення

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // стан для email
  const [password, setPassword] = useState(""); // стан для паролю
  const [name, setName] = useState(""); // стан для імені

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resultAction = await dispatch(register({ email, password, name }));
      if (register.fulfilled.match(resultAction)) {
        // якщо реєстрація успішна
        toast.success("Реєстрація успішна!");
        navigate("/contacts"); // перенаправляємо на сторінку контактів
      } else {
        toast.error("Помилка реєстрації.");
      }
    } catch (error) {
      toast.error("Помилка реєстрації. Спробуйте ще раз."); // обробка помилок
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)} // оновлення стану для імені
        placeholder="Ім'я"
        required
      />
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
      <button type="submit">Реєстрація</button>
    </form>
  );
};

export default RegistrationForm;
