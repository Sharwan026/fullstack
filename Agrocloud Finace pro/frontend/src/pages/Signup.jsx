import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "./auth";
import '../assets/css/signup.css'
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const form = {
      name,
      email,
      password,
    };

    signUp(form)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        console.log('====================================');
        console.log(res.data.token);
        console.log('====================================');
        navigate('/login');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="page-wrapper">
      <div className="signup-container">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <button className="signup-button" type="submit">Signup</button>
        </form>
        <Link to={'/login'}><div className="login-link">Already have an account? Login</div></Link>
      </div>
    </div>
  );
};

export default Signup;
