import React, { useState } from "react";
import LoginWindow from "./components/LoginWindow";
import SignupWindow from "./components/SignupWindow";

function App() {
  const [currentView, setCurrentView] = useState<
    "login" | "signup"
  >("login");

  const handleGoToSignup = () => {
    setCurrentView("signup");
  };

  const handleGoToLogin = () => {
    setCurrentView("login");
  };

  return (
    <div className="App">
      {currentView === "login" && (
        <div>
          <LoginWindow />
        </div>
      )}

      {currentView === "signup" && (
        <div>
          <SignupWindow />
        </div>
      )}
    </div>
  );
}

export default App;
