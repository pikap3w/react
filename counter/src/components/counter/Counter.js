import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

      updateCount = () => {
        this.setState({count: this.state.count + 1})
    }
    
  render(){
    const { name } = this.props;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <button onClick= {this.updateCount}> Click Me </button>
        <p>You clicked me {this.state.count} times</p>
      </div>
    );
  }
}

export default Counter;