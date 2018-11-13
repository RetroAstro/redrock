import React from 'react'
import PropTypes from 'prop-types'

const List = props => {
  const data = props.data
  const listItems = data.map((item, index) => (
    <li key={index} className="sec flex-col-between">
      <div className="sec-top">{item.title}</div>
      <div className="sec-bottom">
        {item.content.map((item, index) => (
          <div className="sec-bottom-box flex-center" key={index}>
            <a href={item.link}>{item.name}</a>
          </div>
        ))}
      </div>
    </li>
  ))
  return <ul className="flex-col-between">{listItems}</ul>
}

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(
        PropTypes.exact({
          name: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired
        })
      ).isRequired
    })
  ).isRequired
}

export default List
