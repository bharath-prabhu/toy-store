import React, { useState } from 'react';
import logo1 from './facebook.jpg'
import logo2 from './icons.png'
import logo3 from './instagram.webp'
import './login.css'; // Import your CSS file

const LoginForm = () => {
  const [isLogin, setLogin] = useState(true);

  const toggleForm = () => {
    setLogin(!isLogin);
  };

  return (
    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn" style={{ left: isLogin ? '0' : '110px' }}></div>
          <button type="button" className={`toggle-btn ${isLogin ? 'active' : ''}`} onClick={toggleForm}>
            Log In
          </button>
          <button type="button" className={`toggle-btn ${isLogin ? '' : 'active'}`} onClick={toggleForm}>
            Signup
          </button>
        </div>
        <div className="social-icons">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
        </div>
        {isLogin ? (
          <form className="input-group">
            <input type="text" className="input-field" placeholder="User Id" required />
            <input type="password" className="input-field" placeholder="Enter password" required />
            <a href="#">
              <input type="checkbox" className="chech-box" />
              <span>
                <b style={{ textDecoration: 'none' }}>Forget Password</b>
              </span>
            </a>
            <button type="submit" className="submit-btn" style={{ textDecoration: 'none' }}>
              <a href="#">Log In</a>
            </button>
          </form>
        ) : (
          <form className="input-group">
            <input type="text" className="input-field" placeholder="Email ID" required />
            <input type="password" className="input-field" placeholder="New Password" required />
            <input type="password" className="input-field" placeholder="conform Password" required />
            <input type="checkbox" className="chech-box" />
            <span>I agree to terms & condition</span>
            <a href="">
              <button type="submit" className="submit-btn" >
                
                Signup
              </button>
            </a>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
