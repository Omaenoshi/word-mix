import React from "react";
import styles from "./GameFindAWordWindow.module.css";

function GameFindAWordWindow() {
  return (
    <div className={styles.container}>
      <div className={styles.gameTitle}>Найди слово</div>
      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <div className={styles.imageColumn}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0b7278ae66db4a7699fc9faf63ca7563/275ec8dda9706731de59ad5c793db66e94865765?placeholderIfAbsent=true"
              className={styles.gameImage}
              alt="Game content"
            />
          </div>
          <div className={styles.buttonsColumn}>
            <div className={styles.buttonsContainer}>
              <div className={styles.buttonRow}>
                <div className={styles.buttonRowInner}>
                  <div className={styles.answerButton}>
                    <button
                      className={`${styles.answerButtonInner} ${styles.purpleButton}`}
                    >
                      Лампа
                    </button>
                  </div>
                  <div className={styles.answerButton}>
                    <button
                      className={`${styles.answerButtonInner} ${styles.greenButton}`}
                    >
                      Стол
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.buttonRow}>
                <div className={styles.buttonRowInner}>
                  <div className={styles.answerButton}>
                    <button
                      className={`${styles.answerButtonInner} ${styles.redButton}`}
                    >
                      Мяч
                    </button>
                  </div>
                  <div className={styles.answerButton}>
                    <button
                      className={`${styles.answerButtonInner} ${styles.orangeButton}`}
                    >
                      Книга
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.buttonRow}>
                <div className={styles.buttonRowInner}>
                  <div className={styles.answerButton}>
                    <button
                      className={`${styles.answerButtonInner} ${styles.yellowButton}`}
                    >
                      Телефон
                    </button>
                  </div>
                  <div className={styles.answerButton}>
                    <button
                      className={`${styles.answerButtonInner} ${styles.lightPurpleButton}`}
                    >
                      Ракета
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameFindAWordWindow;
