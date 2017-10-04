import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './navigate.css';

export default class Navigate extends React.Component {
  render() {
    return (
      <Router>
        <ul className="Navigate">
          <li className="home"><Link to='./home'>Search</Link></li>
          <li className="login"><Link to='./login/:loginId'>Login</Link></li>
          <li className="dashboard"><Link to='./dashboard'>Dashboard</Link></li>
        </ul>
      </Router>
    );
  }
}

