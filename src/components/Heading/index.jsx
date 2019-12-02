import React, { Component } from 'react';
import logo from './../../images/logo-black.svg';
import './style.css';

class Heading extends Component {
  render () {
    return (
      <nav className="navbar">
        <img src={logo} alt="Herschel" />
      </nav>
    );
  }
}

export default Heading;
