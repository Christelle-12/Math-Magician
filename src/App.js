import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Routes,
} from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/quotes';

const NavUnlisted = styled.ul`
  display: flex;
  a {
    text-decoration: none;
    color: #000;
  }
  a:hover {
    color: green;
    cursor: pointer;
    border: 2px solid white
  }
  li {
    color: red;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
  }
  .current {
    li {
      border-bottom: 2px solid black;
    }
    
  }
`;

function App() {
  return (
    <Router>
      <NavUnlisted>
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
      </NavUnlisted>

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
