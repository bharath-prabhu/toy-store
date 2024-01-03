// AnimePage.js
import React from 'react';
import './home.css'; // Make sure to import your CSS file
import log1 from './vedio2.mp4';
import Footer from './Footer'; // Import the Footer component
import { Link } from 'react-router-dom';
const AnimePage = () => {
  return (
    <html>
      <head>
        <title>ANIME</title>
        <link rel="stylesheet" href="ANIME.css" />
        <style>
          {`
            .transparent-footer {
              background: transparent;
              position: fixed;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              padding: 10px;
              color: white; // You can adjust the text color
            }
          `}
        </style>
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
                  <Link to ="/Login"><i>Visit Me</i></Link>                
              </center>
            </div>
          </nav>
        </div>

        {/* Add the Footer component here */}
        <Footer/>
      </body>
    </html>
  );
};

export default AnimePage;
