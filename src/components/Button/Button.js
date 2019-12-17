import React from 'react'
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <button className={`Button-component button ${props.isRounded && 'is-rounded'} ${props.color && props.color}`}>
      {props.icon ? (
        <>
          <span className="icon is-small">
            <i className="fas fa-github"></i>
          </span>
          <span>{props.label}</span>
        </>
      ) : (
        <>
          {props.label}
        </>
      )}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  isRounded: PropTypes.bool,
  icon: PropTypes.string,
  color: PropTypes.string
}

export default Button;