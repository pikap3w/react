import React from 'react'
import Button from './Button'
import './App.css'

const App = props => {
  return (
    <div className='container'>
      <Button text='React' />
      <Button text='Vue' />
      <Button text='Angular' />
      <Button text='Ember' />
    </div>
  )
}
export default App
