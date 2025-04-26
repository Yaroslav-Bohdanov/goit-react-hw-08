// components/AppBar/AppBar.jsx
import React from "react";
import UserMenu from "../UserMenu/UserMenu"; // Додаємо правильний шлях

const AppBar = () => {
  return (
    <header>
      {/* інші елементи AppBar */}
      <UserMenu /> {/* тут використовується компонент UserMenu */}
    </header>
  );
};

export default AppBar;
