import React, { useState } from 'react';
import './login.css';
import logo1 from './facebook.jpg';
import logo2 from './icons.png';
import logo3 from './instagram.webp';
import log4 from './ok.gif';
import {Link} from 'react-router-dom';
const Login = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerEmailError, setRegisterEmailError] = useState('');
  const [registerPasswordError, setRegisterPasswordError] = useState('');

  const switchToLogin = () => {
    setActiveForm('login');
  };

  const switchToRegister = () => {
    setActiveForm('register');
  };
  

  const validateRegister = () => {
    // Email validation using a basic regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(registerEmail)) {
      setRegisterEmailError('Invalid email format');
      return false; // Prevent form submission
    }

    // Password must be at least 8 characters long
    if (registerPassword.length < 8) {
      setRegisterPasswordError('Password must be at least 8 characters long');
      return false; // Prevent form submission
    }

    // Clear error messages if validation passes
    setRegisterEmailError('');
    setRegisterPasswordError('');

    return true; // Allow form submission
  };

  return (
    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn" style={{ left: activeForm === 'register' ? '110px' : '0' }}></div>
          
          <button
            type="button"
            className={`toggle-btn ${activeForm === 'login' ? 'active' : ''}`}
            onClick={switchToLogin}
          >
            Log In
          </button>
          <button
            type="button"
            className={`toggle-btn ${activeForm === 'register' ? 'active' : ''}`}
            onClick={switchToRegister}
          >
            SignUp
          </button>
        </div>
        <div className="social-icons">
          <img src={logo1} alt="Facebook" />
          <img src={logo2} alt="Icons" />
          <img src={logo3} alt="Instagram" />
        </div>
        {activeForm === 'login' ? (
          <form className="input-group" onSubmit={() => validateRegister()}>
            <input type="text" className="input-field" placeholder="User Id" required />
            <input
              type="password"
              className="input-field"
              placeholder="Enter password"
              required
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <a href="file:///D:/my%20project/forget.html">
              <input type="checkbox" className="chech-box" />
              <span className='lo'><b style={{ textDecoration: 'none' }}>Forget Password</b></span>
            </a>
            <button type="submit" className="submit-btn" style={{ textDecoration: 'none' }}>
            <Link to="/Enter"> Log In</Link>
            </button>
            <br></br>
            <br></br>
            <center>
            <h3 className='joker'><b>Welcome to Gravitrax❤️</b></h3></center>
            <center>
            <img src={log4} alt='' style={{height:'50px'}}></img></center>
          </form>
        ) : (
          <form className="input-group" onSubmit={() => validateRegister()}>
            <input type="text" className="input-field" placeholder="User Id" required />
            <input
              type="email"
              className="input-field"
              placeholder="EMAIL ID"
              required
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            {registerEmailError && <div className="error-message">{registerEmailError}</div>}
            <input
              type="password"
              className="input-field"
              placeholder="New Password"
              required
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            {registerPasswordError && <div className="error-message">{registerPasswordError}</div>}
            <input type="password" className="input-field" placeholder="Confirm Password" required />
            <input type="checkbox" className="chech-box" />
            <span className='ok'>I agree to terms & conditions</span>
             <button type="submit" className="submit-btn">
            <Link to="/Enter"> sign up</Link>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
