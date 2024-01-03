import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import log1 from './instagram.webp';
import log2 from './facebook.jpg';
import log3 from './icons.png';
import { Link } from 'react-router-dom';
//import { color } from '@mui/system';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2>About Us</h2>
          <Link to="/Privacy" style={{textDecoration:'none' ,color:'white'}} >
          Privacy policies</Link>
          <br></br>
          <br></br>
          <Link to="/Terms" style={{textDecoration:'none' ,color:'white'}} >
          Terms & Conditions</Link>
        </div>
        <div className="footer-column">
          <h2>Contact</h2>
          <p>Email: keno@gmail.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-column">
          <h2>Follow Us</h2>
          <p></p>
          <div className="social-icons">
            <img src={log1} alt='' style={{height:'50px',width:"50px"}} class='dp'></img>
            <img src={log2} alt='' style={{height:'50px',width:"50px"}} class='dp'></img>
            <img src={log3} alt='' style={{height:'50px',width:"50px"}} class='dp'></img>
            {/* Add your social media icons here */}
            {/* Example: <a href="#"><i className="fab fa-facebook"></i></a> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Gravitrax Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
