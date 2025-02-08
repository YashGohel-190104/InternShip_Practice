import React from 'react';
import "../assets/Header.css"

export const Header = () => {
  return (
    <div>
       <ul className='nav'>
        <li className="list">Home</li>
        <li className="list">Product</li>
        <li className="list">About Us</li>
        <li className="list">Career</li>
        <li className="list">Contact</li>
       </ul>
    </div>
  )
}
