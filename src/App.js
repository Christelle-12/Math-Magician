// App.js

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/quotes';

function App() {
  return (
    <Router>
      <ul className="nav-unlisted">
        <li>
          <NavLink to="/" activeClassName="current" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/calculator" activeClassName="current" exact>
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink to="/quotes" activeClassName="current" exact>
            Quotes
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
