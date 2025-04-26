// UserMenu.js
import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css"; // Ваші стилі
import { selectUserName } from "../../redux/auth/selectors"; // Селектор для отримання даних користувача
import { logoutThunk } from "../../redux/auth/operations"; // Логіка логауту
import { Slide, toast } from "react-toastify"; // Для сповіщень

const UserMenu = () => {
  const user = useSelector(selectUserName); // Отримуємо користувача зі state
  const dispatch = useDispatch(); // Отримуємо dispatch для виклику асинхронних операцій

  const handleLogout = async () => {
    try {
      await dispatch(logoutThunk()).unwrap(); // Викликаємо асинхронну операцію logout
      toast("Goodbye, hope to see you again soon!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    } catch (error) {
      console.log(error);
      toast("Something went wrong, please try again", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }
  };

  return (
    <div className={s.authList}>
      <p className={s.userWelcome}>
        Welcome, <span>{user.name}</span> {/* Виводимо ім'я користувача */}
      </p>
      <button type="button" onClick={handleLogout} className={s.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
