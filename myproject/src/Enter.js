import React from 'react';
import { Link } from 'react-router-dom';
import './Enter.css';
import gol from './wel.gif';
const Login = () => {
  
  return (
    <div className="hr">
      <div className="f-box">
       <center>
        <img src={gol} alt='' style={{height:'90px', width:'300px'}}></img>
          <h2>Welcome to Gravitrax My Friend❤️❤️</h2><br></br><br></br>
          <p> Thanks for joining our family we will be connected.</p>
          <br></br>
          <br></br>
          <br></br>
          <div className='sub-btn'>
           <Link to='/Home' style={{textDecoration:'none'}}>Home</Link>
        
          </div>
          </center>
        
        
       
       </div>
    </div>

  )
};

export default Login;
