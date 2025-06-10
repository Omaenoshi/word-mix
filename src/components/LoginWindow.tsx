import React, { useState } from "react";
import styles from "./LoginWindow.module.css";

interface LoginWindowProps {
  onGoToSignup: () => void;
  onGoToStart: () => void;
}

function LoginWindow({ onGoToSignup, onGoToStart }: LoginWindowProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Login logic would go here
    console.log("Login attempt:", { email, password });
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
          />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.loginButton} onClick={handleLogin}>
          <div className={styles.buttonText}>Вход</div>
        </button>

        <button className={styles.registerButton} onClick={handleRegister}>
          <div className={styles.buttonText}>Регистрация</div>
        </button>
      </div>
    </div>
  );
}

export default LoginWindow;
