import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './navigate.css';

export default class Navigate extends React.Component {
  render() {
    return (
      <Router>
        <ul className="Navigate">
          <li className="home"><Link to='./tooltapsort'><button>Home</button></Link></li>
          <li className="dashboard"><Link to='./dashboard'><button>My Account</button></Link></li>
        </ul>
      </Router>
    );
  }
}

