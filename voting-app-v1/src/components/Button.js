import React from 'react'
import './Button.css'

// const Button = props => {
//   return (
//     <div>
//       <h3>{props.text}</h3>
//       <button className='bg-gradient' onClick={() => alert('You voted for ' + props.text)}>
//         <span>
//           <i className='fa fa-plus' />
//         </span>
//       </button>
//     </div>
//   )
// }

class Button extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  updateCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render () {
    const { text } = this.props
    return (
      <div>
        <button className='bg-gradient'>
          <span>{this.state.count}</span>
        </button>
        <h3>{text}</h3>
        <button className='bg-gradient' onClick={this.updateCount}>
          <span>
            <i className='fa fa-plus' />
          </span>
        </button>
      </div>
    )
  }
}

export default Button
