import React, { useState } from "react";
import styles from "./SignupWindow.module.css";

interface SignupWindowProps {
  onGoToLogin: () => void;
}

function SignupWindow({ onGoToLogin}: SignupWindowProps) {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(response);

    if (!response.ok) {
      console.log('tet hernya');
      let errorData = null;
      try {
        errorData = await response.json();
      } catch {
        // Если не удалось распарсить JSON — ничего не делаем
      }

      // Если код ошибки 400 и в ответе есть message — выводим её
      if (response.status === 400 && errorData?.message) {
        throw new Error(errorData.message);
      }

      // Для других ошибок пытаемся получить сообщение
      const message = errorData?.message || response.statusText || "Ошибка запроса";
      throw new Error(message);
    }
  }

  const handleSignup = async () => {
    setError(null);
    setLoading(true);
    console.log("НАЧАЛО регистрации");

    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      setLoading(false);
      return;
    }

    try {
      await postData("http://localhost:8001/user/register", {
        email,
        username,
        password,
      });
      onGoToLogin(); // <-- здесь тоже можно лог
    } catch (e: any) {
      setError(e.message || "Ошибка при регистрации");
    } finally {
      setLoading(false);
    }
  };

  const handleBackToLogin = () => {
    onGoToLogin();
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupTitle}>Регистрация</div>

      <div className={styles.inputGroup}>
        <div className={styles.inputLabel}>Имя:</div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            value={username}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите ваше имя"
            className={styles.inputField}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.inputLabel}>Почта:</div>
        <div className={styles.inputWrapper}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите вашу почту"
            className={styles.inputField}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.inputLabel}>Пароль:</div>
        <div className={styles.inputWrapper}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            className={styles.inputField}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.inputLabel}>Подтвердите пароль:</div>
        <div className={styles.inputWrapper}>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Подтвердите пароль"
            className={styles.inputField}
          />
        </div>
      </div>

      {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}

      <div className={styles.buttonContainer}>
        <button className={styles.signupButton} onClick={handleSignup}>
          <div className={styles.buttonText}>Зарегистрироваться</div>
        </button>

        <button className={styles.loginButton} onClick={handleBackToLogin}>
          <div className={styles.buttonText}>Уже есть аккаунт? Вход</div>
        </button>
      </div>
    </div>
  );
}

export default SignupWindow;
