import { useState } from "react";
import "../assets/css/signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform signup logic here (you would typically make a request to the server)
    if (username && email && password) {
      alert('Signup successful. Redirect to login page or perform other actions.');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
   /// Your JSX code for the signup form
<div className="page-wrapper">
  <div className="signup-container">
    <h2>Signup</h2>
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
    <button className="signup-button" onClick={handleSignup}>Signup</button>
    <Link to={'/login'}><div className="login-link">Already have an account? Login</div></Link>
  </div>
</div>

  
  );
};

export default Signup;
