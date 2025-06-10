import React from "react";
import styles from "./StartWindow.module.css";

interface StartWindowProps {
  onLogin: () => void;
  onSignup: () => void;
}

function StartWindow({ onLogin, onSignup }: StartWindowProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>ЧтецИгрец</div>
      <div className={styles.subtitle}>
        Обучающие игры для детей с дислексией
      </div>
      <div className={styles.loginButton} onClick={onLogin}>
        <div className={styles.buttonText}>Вход</div>
      </div>
      <div className={styles.registerButton} onClick={onSignup}>
        <div className={styles.buttonText}>Регистрация</div>
      </div>
    </div>
  );
}

export default StartWindow;
