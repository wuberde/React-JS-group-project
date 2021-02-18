import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import brezel from '../img/brezel.png';

const Header = ({ length }) => {
  return (
    <header>

      <div className="nav-bar">
        <div className="left">
          <Link to="/about">About</Link>

          <Link to="./help">Help</Link>
        </div>
        
      <div className="right">
      <Link to="/cart">&#x1f6d2; ( {length} )  </Link>
      </div>
       
      </div>


      <div className="logo-container">
      <div className="header">
        <img className="brezel" src={brezel} alt="brezel" />
        
        <span className="txtlogo"> Make your own</span>
        <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>
        <span className="txtlogo">Octoberfest 2020</span>
        <img className="brezel" src={brezel} alt="brezel" />
      </div>
      </div>


    </header>
  );
};

export default Header;