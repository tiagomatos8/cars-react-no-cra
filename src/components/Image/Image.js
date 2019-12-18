import React from 'react';
import PropTypes from 'prop-types';

import './Image.scss';

const Image = props => {
  return (
    <figure className={`Image-component image ${props.size}`}>
      <img
        className={props.isRounded && 'is-rounded'}
        src={props.imageUrl}
      />
    </figure>
  );
}

Image.propTypes = {
  imageUrl: PropTypes.string,
  size: PropTypes.string,
  isRounded: PropTypes.bool
}

export default Image;