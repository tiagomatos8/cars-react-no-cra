import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const classNamesObj = {
    isOutlined: props.isOutlined ? 'is-outlined' : '',
    isRounded: props.isRounded ? 'is-rounded' : '',
    color: props.color ? props.color : '',
    label: props.label ? props.label : 'Button'
  };

  return (
    <button
      className={`Button-component button ${classNamesObj.isOutlined} ${classNamesObj.isRounded} ${classNamesObj.color}`}
    >
      {props.icon ? (
        <>
          <span className='icon is-small'>
            <i className={props.icon}></i>
          </span>
          <span>{classNamesObj.label}</span>
        </>
      ) : (
        <>{classNamesObj.label}</>
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  isRounded: PropTypes.bool,
  isOutlined: PropTypes.bool,
  icon: PropTypes.string,
  color: PropTypes.string
};

export default Button;
