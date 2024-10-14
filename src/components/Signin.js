import React from "react";
import Logo from "../Images/logo1.jpeg";
import { Link } from "react-router-dom";
import "../App.css"

const Signin = () => {
  return (
    <div className="signup-container">
      <img src={Logo} alt="logo" className="instagram-logo" />

      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="signup-button">
          Log In
        </button>
      </form>

      <div className='divider-container'>
        <hr className='divider-line'/>
        <span className='divider-text'>OR</span>
        <hr className='divider-line'/>
      </div>

      <button className='facebook-button'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' alt='facebook-logo'/>
        Log in with Facebook
      </button>

      <Link to='/forgot-password' className="forgot-password">Forgot Password?</Link>

      <div className='redirect-message'>
        Don't have an account? <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default Signin;
