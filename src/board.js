import React, { Component } from 'react';
import './board.css';
import testimg from './testimg.jpg';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    const name = "Electric Hand Saw";
  };

  render() {
    return (
      <div className="Board">
        <div className="Board-text">Test
          <img className="image" src={testimg} alt="tool-thumbnail" />
          <div className="tool-name" value={this.props.name}>Tool Name:{this.props.name}</div>
        </div>
      </div>
    );
  }
}

