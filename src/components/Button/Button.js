import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button - The classic button, in different colors, sizes, and states
 * https://bulma.io/documentation/elements/button/
 *
 * @param {string} label text of the button
 * @param {boolean} isRounded makes button rounded
 * @param {boolean} isOutlined makes button outlined
 * @param {string} icon icon inside the button, using fontAwesome
 * @param {string} color color of the button https://bulma.io/documentation/elements/button/#colors
 * @param {string} size size of the button https://bulma.io/documentation/elements/button/#sizes
 * @param {boolean} isFullwidth make button full width
 */
const Button = props => {
  const classNamesObj = {
    isOutlined: props.isOutlined ? 'is-outlined' : '',
    isRounded: props.isRounded ? 'is-rounded' : '',
    color: props.color ? props.color : '',
    label: props.label ? props.label : 'Button',
    size: props.size ? props.size : '',
    isFullwidth: props.isFullwidth ? 'is-fullwidth' : 'Button'
  };

  return (
    <button
      className={`
        Button-component 
        button 
        ${classNamesObj.isOutlined} 
        ${classNamesObj.isRounded} 
        ${classNamesObj.color} 
        ${classNamesObj.size} 
        ${classNamesObj.isFullwidth}
      `}
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
  color: PropTypes.string,
  size: PropTypes.string,
  isFullwidth: PropTypes.bool
};

export default Button;
