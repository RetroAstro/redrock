import React from 'react'
import Layer from './Layer/index'
import Slide from './Slide/index'

const App = () => (
  <div style={{ height: '100vh' }} className="flex-col-between">
    <Layer />
    <Slide />
  </div>
)

export default App
