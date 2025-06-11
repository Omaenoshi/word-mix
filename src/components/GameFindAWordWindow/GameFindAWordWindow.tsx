import React, {useState, useEffect, JSX} from "react";
import styles from "./GameFindAWordWindow.module.css";
import {useAuthFetch} from "../../hooks/useAuthFetch";

interface WordDto {
  id: number;
  value: string;
}

interface GameDto {
  id: number;
  words: WordDto[];
  img: string;
}

interface CheckAnswerResponseDto {
  result: boolean;
}

interface GameProps {
  onGoToWin: () => void;
}

function GameFindAWordWindow({onGoToWin, }: GameProps): JSX.Element {
  const [game, setGame] = useState<GameDto | null>(null);
  const [selectedWordId, setSelectedWordId] = useState<number | null>(null);
  const [answerResult, setAnswerResult] = useState<boolean | null>(null);
  const [showResultWindow, setShowResultWindow] = useState(false);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("accessToken");
  const { authFetch } = useAuthFetch();

  useEffect(() => {
    async function fetchGame() {
      if (!token) return;

      // Проверяем наличие сохранённой игры
      const savedGame = localStorage.getItem("savedGame");
      if (savedGame) {
        try {
          const parsedGame = JSON.parse(savedGame);
          setGame(parsedGame);
          return;
        } catch (e) {
          console.warn("Ошибка при чтении сохранённой игры, загружаем новую...");
          localStorage.removeItem("savedGame");
        }
      }

      // Если сохранённой игры нет — запрашиваем с сервера
      const response = await authFetch("http://localhost:8001/game/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error("Ошибка загрузки игры", response.status);
        return;
      }

      const data: GameDto = await response.json();
      setGame(data);
      localStorage.setItem("savedGame", JSON.stringify(data));
    }

    fetchGame();
  }, [token]);

  const handleClose = () => {
    localStorage.removeItem("savedGame");
    onGoToWin();
  };

  const handleAnswerClick = async (wordId: number) => {
    if (!game || !token) return;

    setLoading(true);
    setSelectedWordId(wordId);
    setAnswerResult(null);

    try {
      const params = new URLSearchParams({
        gameId: game.id.toString(),
        answerId: wordId.toString(),
      });

      const response = await authFetch(`http://localhost:8001/game/check-answer?${params.toString()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);

      if (!response.ok) {
        console.error("Ошибка проверки ответа", response.status);
        setAnswerResult(null);
        setSelectedWordId(null);
        setLoading(false);
        return;
      }

      const data: CheckAnswerResponseDto = await response.json();

      setAnswerResult(data.result);

      if (data.result) {
        setTimeout(() => setShowResultWindow(true), 2000);
        handleClose()
      } else {
        setTimeout(() => {
          setSelectedWordId(null);
          setAnswerResult(null);
        }, 2000);
      }
    } catch (error) {
      console.error("Ошибка при проверке ответа:", error);
      setAnswerResult(null);
      setSelectedWordId(null);
    } finally {
      setLoading(false);
    }
  };

  if (!game) return <div>Загрузка игры...</div>;

  return (
      <div className={styles.container}>
        <div className={styles.gameTitle}>Найди слово</div>
        <div className={styles.contentWrapper}>
          <div className={styles.mainContent}>
            <div className={styles.imageColumn}>
              <img
                  src={game.img}
                  className={styles.gameImage}
                  alt="Game content"
              />
            </div>
            <div className={styles.buttonsColumn}>
              <div className={styles.buttonsContainer}>
                {game.words.map((word) => {
                  // Подсветка кнопок по результату
                  let buttonClass = styles.answerButtonInner;
                  if (selectedWordId === word.id) {
                    if (answerResult === true) {
                      buttonClass += ` ${styles.greenButton}`;
                    } else if (answerResult === false) {
                      buttonClass += ` ${styles.redButton}`;
                    }
                  }

                  return (
                      <div key={word.id} className={styles.answerButton}>
                        <button
                            className={buttonClass}
                            onClick={() => !loading && handleAnswerClick(word.id)}
                            disabled={loading}
                        >
                          {word.value}
                        </button>
                      </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default GameFindAWordWindow;
