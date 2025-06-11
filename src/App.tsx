import React, { JSX } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import StartWindow from "./components/StartWindow/StartWindow";
import PersonalAccountWindow from "./components/PersonalAccountWindow/PersonalAccountWindow";
import GameFindAWordWindow from "./components/GameFindAWordWindow/GameFindAWordWindow";
import LoginWindow from "./components/LoginWindow";
import SignupWindow from "./components/SignupWindow";
import ResultWindow from "./components/ResultWindow/ResultWindow";

function RequireAuth({ children }: { children: JSX.Element }) {
    const token = localStorage.getItem("accessToken");
    if (!token) {
        return <Navigate to="/" replace />;
    }
    return children;
}

function App() {
    return (
        <Router>
            <Routes>
                {/* Стартовое окно на '/' */}
                <Route
                    path="/"
                    element={
                        <StartWindow
                            onLogin={() => window.location.href = "/login"}
                            onSignup={() => window.location.href = "/signup"}
                        />
                    }
                />

                {/* Страница логина */}
                <Route
                    path="/login"
                    element={
                        <LoginWindow
                            onGoToStart={(token) => {
                                localStorage.setItem("accessToken", token);
                                window.location.href = "/account"; // после логина на /account
                            }}
                            onGoToSignup={() => window.location.href = "/signup"}
                        />
                    }
                />

                {/* Страница регистрации */}
                <Route
                    path="/signup"
                    element={
                        <SignupWindow
                            onGoToLogin={() => window.location.href = "/login"}
                        />
                    }
                />

                {/* Закрытая страница аккаунта */}
                <Route
                    path="/account"
                    element={
                        <RequireAuth>
                            <PersonalAccountWindow />
                        </RequireAuth>
                    }
                />

                {/* Закрытая страница игры */}
                <Route
                    path="/game"
                    element={
                        <RequireAuth>
                            <GameFindAWordWindow onGoToWin={() => window.location.href = "/win"}/>
                        </RequireAuth>
                    }
                />

                <Route
                    path="/win"
                    element={
                        <RequireAuth>
                            <ResultWindow onClose={() => window.location.href = "/account"}/>
                        </RequireAuth>
                    }
                />

                {/* Все остальные пути редиректят на старт */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
