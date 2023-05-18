import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Linkfooter from "./LinkFooter";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="pswd">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="your password"
        onChange={handleChange}
        className="login-input"
        required
        minLength={6}
      />
      <button className="pswd-btn" onClick={handleTogglePassword} type="button">
        {showPassword ? (
          <i className="fa-solid fa-eye login-icon"></i>
        ) : (
          <i className="fa-sharp fa-solid fa-eye-slash login-icon" login-icon></i>
        )}
      </button>
    </div>
  );
};

function Signup() {
  return (
    <div>
      <Navbar />
      <div className="login">
        <div className="signup-bg"></div>
        <div className="login-wrapper-div">
          <div className="login-form-div">
            <p className="login-welcome">Welcome to TasteQuest!</p>
            <form>

            <p>
                <input
                  type="text"
                  placeholder="your name"
                  required
                  className="login-input"
                />
              </p>
              <p>
                <input
                  type="email"
                  placeholder="your email address"
                  required
                  className="login-input"
                />
              </p>
              <p>
                <PasswordInput />
              </p>

              <p>
                <button className="login-submit">Sign Up</button>
              </p>
            </form>

            <div>
              <p className="have-an-acct">
                Already have an account?
                {" "}
                <Link to="/login" className="signup-link">
                  Login
                </Link>
              </p>

            </div>
          </div>
        </div>
      </div>
      <Linkfooter/>
    </div>
  );
}

export default Signup;
