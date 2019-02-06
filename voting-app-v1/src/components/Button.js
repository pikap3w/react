import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
  <div className="language">
    <button className="button" onClick={() => alert('You voted for ' + props.text)}> {props.text} </button>
  </div>
  );
}

export default Button;
