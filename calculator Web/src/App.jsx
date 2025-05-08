import React, { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Calculator from "./pages/Calculator";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false); 
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleShowSignup = () => {
    setShowSignup(true);
  };

  const handleShowLogin = () => {
    setShowSignup(false);
  };

  return (
    <>
      {!isLoggedIn ? (
        showSignup ? (
          <Signup onLoginClick={handleShowLogin} />
        ) : (
          <Login onLogin={handleLogin} onSignupClick={handleShowSignup} />
        )
      ) : (
        <Calculator onLogout={handleLogout} />
      )}
    </>
  );
}

export default App;
