// Addtocart.js

import React, { useState, useEffect } from 'react';
import './Addtocart.css';
import { Link } from 'react-router-dom';
const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Dingo Dog Bones", price: 12.99, quantity: 2, total: 25.98 },
    { id: 2, title: "Nutro™ Adult Lamb and Rice Dog Food", price: 45.99, quantity: 1, total: 45.99 }
  ]);

  const taxRate = 0.05;
  const shippingRate = 15.00;
  const fadeTime = 300;

  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCartItems(updatedCart);
    recalculateCart();
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    recalculateCart();
  };

  const recalculateCart = () => {
    let subtotal = 0;

    cartItems.forEach(item => {
      subtotal += item.price * item.quantity;
    });

    const tax = subtotal * taxRate;
    const shipping = subtotal > 0 ? shippingRate : 0;
    const total = subtotal + tax + shipping;

    document.getElementById('cart-subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('cart-tax').textContent = tax.toFixed(2);
    document.getElementById('cart-shipping').textContent = shipping.toFixed(2);
    document.getElementById('cart-total').textContent = total.toFixed(2);

    const checkoutButton = document.querySelector('.checkout');
    checkoutButton.style.display = total === 0 ? 'none' : 'block';
  };

  useEffect(() => {
    recalculateCart();
  }, [cartItems]);

  return (
    <div className="shopping-cart">
      <div className="column-labels">
        <label className="product-image">Image</label>
        <label className="product-details">Product</label>
        <label className="product-price">Price</label>
        <label className="product-quantity">Quantity</label>
        <label className="product-removal">Remove</label>
        <label className="product-line-price">Total</label>
      </div>

      {cartItems.map(item => (
        <div className="product" key={item.id}>
          <div className="product-image">
            <img src={`https://m.media-amazon.com/images/I/61x9JGjs+gL._AC_UL480_FMwebp_QL65_.jpg`} alt={item.title} />
          </div>
          <div className="product-details">
            <div className="product-title">{item.title}</div>
            <p className="product-description">Product description goes here.</p>
          </div>
          <div className="product-price">{item.price.toFixed(2)}</div>
          <div className="product-quantity">
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => updateQuantity(item.id, e.target.value)}
            />
          </div>
          <div className="product-removal">
            <button className="remove-product" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
          <div className="product-line-price">{item.total.toFixed(2)}</div>
        </div>
      ))}

      <div className="totals">
        <div className="totals-item">
          <label>Subtotal</label>
          <div className="totals-value" id="cart-subtotal"></div>
        </div>
        <div className="totals-item">
          <label>Tax (5%)</label>
          <div className="totals-value" id="cart-tax"></div>
        </div>
        <div className="totals-item">
          <label>Shipping</label>
          <div className="totals-value" id="cart-shipping"></div>
        </div>
        <div className="totals-item totals-item-total">
          <label>Grand Total</label>
          <div className="totals-value" id="cart-total"></div>
        </div>
      </div>
      <Link to ="/Login">

      <button className="checkout" style={{cursor:'pointer'}}>Checkout</button></Link>
    </div>
  );
};

export default ShoppingCart;
