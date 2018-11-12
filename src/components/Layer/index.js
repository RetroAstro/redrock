import React from 'react'
import List from './List'
import { dataOne } from '../../service/mock'
import './layer.styl'

const Layer = () => (
  <div className="layer">
    <div className="bg-redrock bg-cover-all" />
    <div className="main">
      <List data={dataOne} />
    </div>
  </div>
)

export default Layer
