import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Login = ({ setLogin, setLoginUser }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };
  const navigate = useNavigate();
  const login = () => {
    axios.post("http://localhost:8000/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      // Removed unused setLoginUser
      //const navigate = useNavigate();
      setLogin(true);
      //const check = user && user._id;
      if (res.data.message === "User not registered") {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  };

  return (
    <>
      <div className="loginParentDiv">
        <div className="login">
          <h1>Login</h1>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your Email"
          ></input>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your Password"
          ></input>
          <div className="button" onClick={login}>
            Login
          </div>
          <div>or</div>
          <div className="button" onClick={() => navigate("/register")}>
            Register
          </div>
        </div>
      </div>
      {/* <NavBar isLoggedIn={isLoggedIn} /> */}
    </>
  );
};

export default Login;
