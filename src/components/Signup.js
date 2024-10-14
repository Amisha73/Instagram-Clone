import React from 'react'
import Logo from "../Images/logo1.jpeg";
import "../App.css"
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='signup-container'>
      <img src={Logo} alt='logo' className='instagram-logo'/>
      <p className='signup-message'>
        Sign up to see photos and videos from your friend
      </p>
      <button className='facebook-button'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' alt='facebook-logo'/>
        Log in with Facebook
      </button>
      <div className='divider-container'>
        <hr className='divider-line'/>
        <span className='divider-text'>OR</span>
        <hr className='divider-line'/>
      </div>
      <form>
        <input type='text' placeholder='Mobile number Or email' required/>
        <input type='text' placeholder='Full Name' required/>
        <input type='text' placeholder='Username' required/>
        <input type='password' placeholder='Password' required/>
        <button type='submit' className='signup-button'>Signup</button>
      </form>
      <p className='privacy-policy' >People who use our service may have uploaded your contact information to Instagram. Learn More</p>
      <p className='privacy-policy'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
      <div className='redirect-message'>
        Have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Signup