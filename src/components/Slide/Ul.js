import React from 'react'
import PropTypes from 'prop-types'

const Ul = props => {
  const data = props.data
  const listItems = data.map((item, index) => (
    <li key={index} className="flex-center">
      <a href={item.link}>{item.name}</a>
    </li>
  ))
  return <ul>{listItems}</ul>
}

Ul.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Ul
