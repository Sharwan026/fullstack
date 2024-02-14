import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "./auth";
import "../assets/css/Login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = {
      email,
      password,
    };

    signIn(form)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        console.log('====================================');
        console.log(res.data.token);
        console.log('====================================');
        navigate('/home');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="background-wrapper">
      <div className="login-container">
        <div className="login-content">
          <img src="https://i0.wp.com/yfcampus.com/wp-content/uploads/2023/03/boy.png?w=640&ssl=1" alt="Login Logo" className="login-logo" />
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="login-button" type="submit">Login</button>
          </form>
          <Link to={'/signup'}><p className="signup-link">Don't have an account? Sign up</p></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
