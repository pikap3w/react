import React from 'react'
import './Counter.css'

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
    // This binding is necessary to make `this` work in the callback?
    // this.updateCount = this.updateCount.bind(this)
  }

  updateCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render () {
    const { name } = this.props
    return (
      <div>
        <h1>Hello {name}!</h1>
        <button
          onClick={this.updateCount}
          style={{ backgroundColor: this.state.count >= 15 ? 'red' : 'blue' }}
        >
          Click Me
        </button>
        <p>You clicked me {this.state.count} times</p>
      </div>
    )
  }
}

export default Counter
