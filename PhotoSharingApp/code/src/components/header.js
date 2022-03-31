import React from 'react';
import Logo from '../images/logo-camera.png';
const Header =()=> {
    return (
      <header>
        <h2>InstaClone</h2>
        <a href="/upload">Add Post</a>
        <img id ="insta-logo" src ={Logo} alt = "insta-logo" />
        <a href ="/">Logout</a>
      </header>
    );
  }
  
  export default Header;