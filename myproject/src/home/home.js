import React from 'react';
import './home.css'; // Make sure to import your CSS file
import log1 from './vedio2.mp4'
const AnimePage = () => {
  return (
    <html>
      <head>
        <title>ANIME</title>
        <link rel="stylesheet" href="ANIME.css" />
      </head>
      <body>
        <div className="HERO">
          <video autoPlay loop muted playsInline>
            <source src={log1} type="video/mp4" />
          </video>

          <nav>
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">CONTACT US</a>
              </li>
            </ul>
            <div className="CONTENT">
              <center>
                <h2>GRAVITRAX</h2>
              </center>
              <center>
                <a href="./D:\react js\my project\myproject\src\login\login.js">
                  <i>Log In</i>
                </a>
              </center>
            </div>
          </nav>
        </div>
      </body>
    </html>
  );
};

export default AnimePage;
