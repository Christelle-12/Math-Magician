import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function Buttons() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const calculation = (e) => {
    const newState = calculate(state, e.target.textContent);
    setState(newState);
  };

  return (
    <div className="calculator">
      <div className="wrapper">
        <input
          className="zero"
          type="text"
          value={state.next || state.total || 0}
          readOnly
        />
        <div className="container">
          <button className="button-keys" type="button" onClick={calculation}>
            AC
          </button>
          <button className="button-keys" type="button" onClick={calculation}>
            &#177;
          </button>
          <button className="button-keys" type="button" onClick={calculation}>
            &#37;
          </button>
          <button className="operators" type="button" onClick={calculation}>
            ÷
          </button>
        </div>
        <div className="container">
          <button className="button-keys" type="button" onClick={calculation}>
            7
          </button>
          <button className="button-keys" type="button" onClick={calculation}>
            8
          </button>
          <button className="button-keys" type="button" onClick={calculation}>
            9
          </button>
          <button className="operators" type="button" onClick={calculation}>
            x
          </button>
        </div>
        <div className="container">
          <button className="button-keys" type="button" onClick={calculation}>
            4
          </button>
          <button className="button-keys" type="button" onClick={calculation}>
            5
          </button>
          <button className="button-keys" type="button" onClick={calculation}>
            6
          </button>
          <button className="operators" type="button" onClick={calculation}>
            -
          </button>
        </div>
        <div className="container">
          <button className="button-keys" type="button" onClick={calculation}>
            1
          </button>
          <button className="button-keys" type="button" onClick={calculation}>
            2
          </button>
          <button className="button-keys" type="button" onClick={calculation}>
            3
          </button>
          <button className="operators" type="button" onClick={calculation}>
            &#43;
          </button>
        </div>
        <div className="containers">
          <button className="button-keys" type="button" onClick={calculation}>
            0
          </button>
          <button className="button-keys" type="button" onClick={calculation}>
            .
          </button>
          <button className="operators" type="button" onClick={calculation}>
            &#61;
          </button>
        </div>
      </div>
    </div>
  );
}
