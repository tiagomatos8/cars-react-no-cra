import React from 'react'
import PropTypes from 'prop-types';

/**
 * Column - A responsive column
 * https://bulma.io/documentation/columns/basics/
 * 
 * @param {string} size Define the size of each column individually https://bulma.io/documentation/columns/sizes/
 */
const Column = props => {
  return (
    <div className={`Column-component column ${props.size}`}>
      {props.children}
    </div>
  )
}

Column.propTypes = {
  size: PropTypes.string
}

export default Column