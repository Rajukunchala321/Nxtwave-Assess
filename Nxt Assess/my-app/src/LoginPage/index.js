import React, { useState, useRef } from "react";
import "./index.css";
import axios from "axios";
import Cookies from "js-cookie";

export const LoginForm = () => {
  const nameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [jwtToken, setJwtToken] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const username = nameInputRef.current.value;
      const password = passwordInputRef.current.value;
      const userDetails = { username, password };
      const response = await axios.post(
        "https://apis.ccbp.in/login",
        JSON.stringify(userDetails)
      );

      setJwtToken(response.data.jwt_token);
      Cookies.set("jwtToken", jwtToken);
    } catch (error) {
      setError(error.response.data.error_msg);
     
    }
  };

  return (
    <section className="form-section">
      <div className="form-main-container">
        <div className="form-container">
          <div>
            <img
              src="../nxtassess.png"
              alt="website logo"
              className="website-logo"
            />
            <div className="form-heading">NXT Assess</div>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="input-container">
              <label className="input-label" htmlFor="username">
                USERNAME
              </label>
              <input
                ref={nameInputRef}
                type="text"
                id="username"
                className="input-field"
                placeholder="Username"
                autoComplete="current-Username"
              />
            </div>

            <div className="input-container">
              <label className="input-label" htmlFor="password">
                PASSWORD
              </label>
              <input
                ref={passwordInputRef}
                type={showPassword ? "text" : "password"}
                id="password"
                className="input-field"
                placeholder="password"
                autoComplete="current-password"
              />
              <div>
                <input
                  onChange={() => setShowPassword(!showPassword)}
                  type="checkbox"
                  id="checkbox"
                  className="checkbox"
                />
                <label htmlFor="checkbox" className="checkbox-label">
                  Show Password
                </label>
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
              {error && <p className="error">*{error}</p>}
             
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
