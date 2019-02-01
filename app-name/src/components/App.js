import React from 'react';
import Square from './Square';
import './App.css';

const App = (props) => {
  return (
  <div className="container">
    <Square text="white on blue" color="white" backgroundColor="blue" />
    <Square text="blue on red" color="blue" backgroundColor="red" />
    <Square text="green on pink" color="green" backgroundColor="pink" />
  </div>
  );
};
export default App;
