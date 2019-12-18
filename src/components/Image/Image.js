import React from 'react';
import PropTypes from 'prop-types';

const Image = props => {
  return (
    <img
      src={props.imageUrl}
      width={props.width}
      height={props.height}
    />
  );
}

Image.propTypes = {
  imageUrl: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

export default Image;