import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Routes,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/quotes';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
