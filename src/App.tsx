import React, { useState } from "react";
import LoginWindow from "./components/LoginWindow";
import SignupWindow from "./components/SignupWindow";
import StartWindow from "./components/StartWindow/StartWindow";

function App() {
  const [currentView, setCurrentView] = useState<"start" | "login" | "signup">(
    "start",
  );

  const handleGoToSignup = () => {
    setCurrentView("signup");
  };

  const handleGoToLogin = () => {
    setCurrentView("login");
  };

  const handleGoToStart = () => {
    setCurrentView("start");
  };

  return (
    <div className="App">
      {currentView === "start" && (
        <div>
          <StartWindow onLogin={handleGoToLogin} onSignup={handleGoToSignup} />
        </div>
      )}

      {currentView === "login" && (
        <div>
          <LoginWindow
            onGoToSignup={handleGoToSignup}
            onGoToStart={handleGoToStart}
          />
        </div>
      )}

      {currentView === "signup" && (
        <div>
          <SignupWindow
            onGoToLogin={handleGoToLogin}
            onGoToStart={handleGoToStart}
          />
        </div>
      )}
    </div>
  );
}

export default App;
