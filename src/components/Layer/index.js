import React from 'react'
import List from './List'
import data from '../../service/mock'
import './layer.styl'

const Layer = () => (
  <div className="layer">
    <div className="bg-redrock bg-cover-all" />
    <div className="main">
      <List data={data} />
    </div>
  </div>
)

export default Layer
