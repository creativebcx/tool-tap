import React, { Component } from 'react';
import './board.css';
import testimg from './testimg.jpg';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  };

  render() {
    return (
      <div className="Board">
        <img className="tool-image" src={testimg} alt="tool-thumbnail" />
        <div className="tool-name">Test Name</div>
        <div className="tool-quality">Test Fair</div>
        <div className="tool-price">Test $25/day</div>
        <div className="tool-description">Test Lorum Ipsum Verde Talle</div>
        <button className="tool-button">Contact Owner</button>
      </div>
    );
  }
}

