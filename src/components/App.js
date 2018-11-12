import React from 'react'
import Layer from './Layer/index'
import Slide from './Slide/index'
import Wrapper from './Wrapper'

const Basic = {
  height: '100vh',
  background: '#f1f1f1',
  position: 'relative',
  overflow: 'scroll'
}

const App = () => (
  <div style={Basic}>
    <Layer />
    <Slide />
    <Wrapper />
  </div>
)

export default App
