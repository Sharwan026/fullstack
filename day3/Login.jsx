import { useState } from "react";
import "../assets/css/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here (you would typically make a request to the server)
    if (username && password) {
      alert('Logged in successfully. Redirect to home page or perform other actions.');
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className="background-wrapper">
    
<div className="login-container">
  <div className="login-content">
    <img src="https://i0.wp.com/yfcampus.com/wp-content/uploads/2023/03/boy.png?w=640&ssl=1" alt="Login Logo" className="login-logo" />
    <div className="form-group">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
    <button className="login-button" onClick={handleLogin}>Login</button>
    <Link to={'/signup'}><p className="signup-link">Don't have an account? Sign up</p></Link>
  </div>
</div>
</div>

  );
};

export default Login;