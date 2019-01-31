import React from 'react';

import Square from './Square'; // we can drop the .js file extension
import './App.css';
const App = (props) => {
  return (
  <div class="container">
    <Square text="white on blue" color="white" backgroundColor="blue" isImportant={true} />
    <Square text="blue on red" color="blue" backgroundColor="red" isImportant={false} />
    <Square text="green on pink" color="green" backgroundColor="pink" isImportant={false} />
  </div>
  );
};
export default App;
