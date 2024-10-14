import React from 'react'
import Logo from "../Images/logo.png"
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
        <img src={Logo} alt='logo'/>
        <div className='nav-links'>
            <Link to={'/home'}>Home</Link>
            <Link to={'/profile'}>Profile</Link>
            <Link to={'/login'}>Sign In</Link>
            <Link to={'/signup'}>Sign Up</Link>
        </div>
    </div>
  )
}
