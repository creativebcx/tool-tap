import React, { Component } from 'react';
import './navigate.css';

export default class Navigate extends React.Component {
  render() {
    return (
      <ul className="Navigate">
        <li className="home">Home</li>
        <li className="login">Login</li>
      </ul>
    );
  }
}

