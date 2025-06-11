import React, { useEffect, useState } from "react";
import styles from "./PersonalAccountWindow.module.css";
import { useNavigate } from "react-router-dom";

interface PlayerInfo {
    username: string;
    level: number;
    avatarUrl?: string | null;
    // другие поля по API, если есть
    history?: string; // пример — подставь реальные данные из API
}

function PersonalAccountWindow() {
    const [player, setPlayer] = useState<PlayerInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            setError("Требуется авторизация");
            setLoading(false);
            return;
        }

        async function fetchPlayer() {
            try {
                const response = await fetch("http://localhost:8001/players/", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                console.log(response);

                if (!response.ok) {
                    if (response.status === 401) {
                        setError("Неавторизован");
                    } else {
                        setError(`Ошибка сервера: ${response.status}`);
                    }
                    setLoading(false);
                    return;
                }

                const data = await response.json();
                setPlayer(data);
            } catch (e: any) {
                setError(e.message || "Ошибка при загрузке данных");
            } finally {
                setLoading(false);
            }
        }

        fetchPlayer();
    }, []);

    const handlePlayClick = () => {
        navigate("/game");  // Переход на страницу игры
    };

    if (loading) {
        return <div className={styles.container}>Загрузка...</div>;
    }

    if (error) {
        return <div className={styles.container} style={{ color: "red" }}>{error}</div>;
    }

    if (!player) {
        return <div className={styles.container}>Данные игрока не найдены</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.userImage}>
                <img
                    src={
                        player.avatarUrl ||
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 250 250'%3E%3Ccircle cx='125' cy='125' r='125' fill='%2366D9A6'/%3E%3Ccircle cx='100' cy='100' r='15' fill='white'/%3E%3Ccircle cx='150' cy='100' r='15' fill='white'/%3E%3Ccircle cx='100' cy='100' r='8' fill='%23333'/%3E%3Ccircle cx='150' cy='100' r='8' fill='%23333'/%3E%3Cpath d='M80 140 Q125 170 170 140' stroke='%23333' stroke-width='3' fill='none'/%3E%3Cpath d='M110 50 L140 50 L135 30 L125 25 L115 30 Z' fill='%23FFD700'/%3E%3Cpath d='M70 180 Q125 200 180 180 Q180 220 125 230 Q70 220 70 180' fill='%23FF6B6B'/%3E%3Ccircle cx='125' cy='195' r='8' fill='%23FFD700'/%3E%3C/svg%3E"
                    }
                    alt="Аватар игрока"
                    className={styles.avatarImage}
                />
            </div>
            <div className={styles.greeting}>Привет, {player.username}!</div>
            <div className={styles.levelText}>Уровень: {player.level}</div>
            <div className={styles.historyFrame}>
                <div className={styles.historyBackground} />
                <div className={styles.historyContent}>
                    <div className={styles.historyText}>
                        {/* Здесь можно отобразить историю из player.history или другой структуры */}
                        {player.history || "История пока недоступна"}
                    </div>
                </div>
            </div>
            <div className={styles.playButton} onClick={handlePlayClick}>
                <div className={styles.playButtonText}>Играть</div>
            </div>
        </div>
    );
}

export default PersonalAccountWindow;
