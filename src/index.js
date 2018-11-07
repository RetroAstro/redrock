import React from 'react'
import { render } from 'react-dom'
import Container from './components/container'

const App = () => (
    <Container />
)

render(
    <App />,
  document.getElementById('root')
)