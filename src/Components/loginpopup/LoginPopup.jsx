import React, { useContext, useState } from "react";
import "./loginpopup.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { storeContext } from "../context/StoreContext";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(storeContext); // ✅ using correct context values
  const [currState, setCurrState] = useState("Login");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      const resData = response.data;

      if (resData.success) {
        setToken(resData.token);
        localStorage.setItem("token", resData.token);
        setShowLogin(false);
      } else {
        alert(resData.message);
      }
    } catch (error) {
      console.error("API error:", error);
      alert("Server error: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={handleSubmit} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              type="text"
              placeholder="Your Name"
              required
            />
          )}
          <input
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I agree to the privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Don't have an account?{" "} 
            <span onClick={() => setCurrState("Sign Up")}>Sign Up</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
