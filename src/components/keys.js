import React from 'react';

export default function Buttons() {
  return (
    <div className="calculator">
      <div className="wrapper">
        <div className="zero">&#48;</div>
        <div className="container">
          <button className="button-keys" type="button">
            AC
          </button>
          <button className="button-keys" type="button">
            &#177;
          </button>
          <button className="button-keys" type="button">
            &#37;
          </button>
          <button className="operators" type="button">
            &#247;
          </button>
        </div>
        <div className="container">
          <button className="button-keys" type="button">
            7
          </button>
          <button className="button-keys" type="button">
            8
          </button>
          <button className="button-keys" type="button">
            9
          </button>
          <button className="operators" type="button">
            &#215;
          </button>
        </div>
        <div className="container">
          <button className="button-keys" type="button">
            4
          </button>
          <button className="button-keys" type="button">
            5
          </button>
          <button className="button-keys" type="button">
            6
          </button>
          <button className="operators" type="button">
            &#8722;
          </button>
        </div>
        <div className="container">
          <button className="button-keys" type="button">
            1
          </button>
          <button className="button-keys" type="button">
            2
          </button>
          <button className="button-keys" type="button">
            3
          </button>
          <button className="operators" type="button">
            &#43;
          </button>
        </div>
        <div className="containers">
          <button className="button-keys" type="button">
            0
          </button>
          <button className="button-keys" type="button">
            .
          </button>
          <button className="operators" type="button">
            &#61;
          </button>
        </div>
      </div>
    </div>
  );
}
