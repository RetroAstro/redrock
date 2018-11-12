import React from 'react'
import Ul from './Ul'
import { dataTwo } from '../../service/mock'

let arrow, block, wrap, box

const handleIn = e => {
  box = document.querySelector('.wrapper')
  arrow = e.target
  block = arrow.parentNode
  wrap = block.querySelector('.block-wrap')
  box.classList.add('show')
  block.classList.add('up')
  arrow.classList.add('fade-Out')
  arrow.classList.remove('fade-In')
  wrap.classList.add('fade-In')
  wrap.classList.remove('fade-Out')
}

const handleOut = () => {
  box.classList.remove('show')
  block.classList.remove('up')
  arrow.classList.remove('fade-Out')
  arrow.classList.add('fade-In')
  wrap.classList.remove('fade-In')
  wrap.classList.add('fade-Out')
}

const Block = () => (
  <div className="block">
    <div className="arrow bg-cover-all" onClick={handleIn} />
    <div className="block-wrap">
      <div className="block-header">
        <div className="title">其他站点</div>
        <div className="close bg-cover-all" onClick={handleOut} />
      </div>
      <div className="block-main">
        <Ul data={dataTwo} />
      </div>
    </div>
  </div>
)

export default Block
