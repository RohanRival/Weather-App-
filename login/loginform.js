import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginform.css";
import Footer from "../Footer";

const LoginForm = () => {
  let navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("token"));

  const submit = () => {
    sessionStorage.setItem("token", "1");
    setIsLoggedIn(true);
    console.log("first");
    if (sessionStorage.getItem("token")) {
      navigate("/home");
    }
  };

  const handleSignOut = () => {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="Enter your Username" />
      <input type="password" placeholder="Enter your Password" />
      <div className="login-btn" onClick={submit}>
        Login
      </div>
      {isLoggedIn ? (
        <h2 className="popup">Login successful. Redirecting...</h2>
      ) : (
        ""
      )}
      {isLoggedIn && (
        <button className="sign-out-btn" onClick={handleSignOut}>
          Sign Out
        </button>
      )}
      <Footer/>
    </div>
  );
};

export default LoginForm;
