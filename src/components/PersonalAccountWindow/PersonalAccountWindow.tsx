import React from "react";
import styles from "./PersonalAccountWindow.module.css";

function PersonalAccountWindow() {
  return (
    <div className={styles.container}>
      <div className={styles.userImage}>
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 250 250'%3E%3Ccircle cx='125' cy='125' r='125' fill='%2366D9A6'/%3E%3Ccircle cx='100' cy='100' r='15' fill='white'/%3E%3Ccircle cx='150' cy='100' r='15' fill='white'/%3E%3Ccircle cx='100' cy='100' r='8' fill='%23333'/%3E%3Ccircle cx='150' cy='100' r='8' fill='%23333'/%3E%3Cpath d='M80 140 Q125 170 170 140' stroke='%23333' stroke-width='3' fill='none'/%3E%3Cpath d='M110 50 L140 50 L135 30 L125 25 L115 30 Z' fill='%23FFD700'/%3E%3Cpath d='M70 180 Q125 200 180 180 Q180 220 125 230 Q70 220 70 180' fill='%23FF6B6B'/%3E%3Ccircle cx='125' cy='195' r='8' fill='%23FFD700'/%3E%3C/svg%3E"
          alt=""
          className={styles.avatarImage}
        />
      </div>
      <div className={styles.greeting}>Привет, друг!</div>
      <div className={styles.levelText}>Уровень: 1</div>
      <div className={styles.historyFrame}>
        <div className={styles.historyBackground} />
        <div className={styles.historyContent}>
          <div className={styles.historyText}>
            Дата: 20.05.2025 Игра: Слогомания Счет: 100 Игра: Перепуталка Счет:
            Игра: Найди слово Счет: Общий счёт:
          </div>
        </div>
      </div>
      <div className={styles.playButton}>
        <div className={styles.playButtonText}>Играть</div>
      </div>
    </div>
  );
}

export default PersonalAccountWindow;
