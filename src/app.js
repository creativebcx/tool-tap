import React from 'react';
import logo from './logo.png';
import './app.css';
import Board from './board.js';
import Navigate from './navigate.js';
import SearchForm from './searchform.js';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navigate />
        </nav>
        <div className="Search-form">
          <SearchForm />
        </div>
        <div className="Board-app">
          <Board />
        </div>
      </div>
    );
  }
}