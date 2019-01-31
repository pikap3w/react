import React from 'react';
import './Square.css';

const Square = (props) => {
  return <div style={{color:props.color, backgroundColor:props.backgroundColor}}>{props.text}</div>;
}

export default Square;
