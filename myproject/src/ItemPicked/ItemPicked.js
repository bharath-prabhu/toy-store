// src/components/TransparentForm.js
import React from 'react';
import './ItemPicked.css';
//import log5 from './Blacky.jpg';
import Move from './Move';
const TransparentForm = () => {
  return (
    <div className="form-container">
      <div className="background-image"></div>
      <form className="glass-form">
        <div className='left'>
            <br></br>
            <br></br>
            <br></br>
        <Move/>
        </div>
       <div className='right'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <center><h1>Gravitrax</h1></center>
        <p> Kid❤️❤️.</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <button className="add-to-cart-button">Buy Now</button>
        <center><h1>Or</h1></center>
        <button className="add-to-cart-button">Add to cart .<img src='https://cdn-icons-png.flaticon.com/128/10125/10125343.png' alt='' style={{height:'20px'}}></img></button>
       </div>
       
      </form>
    </div>
  );
};

export default TransparentForm;
