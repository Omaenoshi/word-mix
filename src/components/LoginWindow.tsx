import React, { useState } from "react";
import styles from "./LoginWindow.module.css";
import { useNavigate } from "react-router-dom";

interface LoginWindowProps {
  onGoToSignup: () => void;
  onGoToStart: (token: string) => void; // предполагаем, что при успешном входе будем передавать токен наверх
}

function LoginWindow({ onGoToSignup, onGoToStart }: LoginWindowProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Функция для POST-запроса с JSON
  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
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

    return response.json();
  }


  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    console.log("handleLogin вызван");
    try {
      const result = await postData("https://routinely-meet-sleeper.cloudpub.ru/user/login", {
        email,
        password,
      });
      console.log(result);
      // Получаем токен из поля AccessToken
      const token = result.accessToken;
      if (token) {
        onGoToStart(token);
      } else {
        setError("Токен не получен");
      }
    } catch (e: any) {
      setError(e.message || "Ошибка при входе");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = () => {
    onGoToSignup();
  };


  return (
      <div className={styles.loginContainer}>
        <div className={styles.loginTitle}>Вход</div>

        <div className={styles.inputGroup}>
          <div className={styles.inputLabel}>Почта:</div>
          <div className={styles.inputWrapper}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите текст"
                className={styles.inputField}
                disabled={loading}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.inputLabel}>Пароль</div>
          <div className={styles.inputWrapper}>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите текст"
                className={styles.inputField}
                disabled={loading}
            />
          </div>
        </div>

        {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}

        <div className={styles.buttonContainer}>
          <button
              className={styles.loginButton}
              onClick={handleLogin}
              disabled={loading}
          >
            <div className={styles.buttonText}>{loading ? "Вход..." : "Вход"}</div>
          </button>

          <button
              className={styles.registerButton}
              onClick={handleRegister}
              disabled={loading}
          >
            <div className={styles.buttonText}>{loading ? "Регистрация..." : "Регистрация"}</div>
          </button>
        </div>
      </div>
  );
}

export default LoginWindow;
