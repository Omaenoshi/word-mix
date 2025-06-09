import React, { useState } from "react";
import styles from "./SignupWindow.module.css";

function SignupWindow() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }
    // Signup logic would go here
    console.log("Signup attempt:", { name, email, password });
  };

  const handleBackToLogin = () => {
    // Navigation logic would go here
    console.log("Navigate back to login");
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupTitle}>Регистрация</div>

      <div className={styles.inputGroup}>
        <div className={styles.inputLabel}>Имя:</div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            value={name}
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
        <div className={styles.inputLabel}>Пар��ль:</div>
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
