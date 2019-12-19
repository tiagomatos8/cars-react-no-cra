import React from 'react';
import PropTypes from 'prop-types';

import './Image.scss';

/**
 * Image - A container for responsive images
 * https://bulma.io/documentation/elements/image/
 * 
 * @param {string} imageUrl image url address
 * @param {string} size 7 dimensions to choose from https://bulma.io/documentation/elements/image/#fixed-square-images
 * @param {boolean} isRounded make rounded images
 * @param {string} alt image description for screen readers
 */
const Image = props => {
  return (
    <figure className={`Image-component image ${props.size}`}>
      <img
        className={props.isRounded && 'is-rounded'}
        src={props.imageUrl}
        alt={props.alt}
      />
    </figure>
  );
}


Image.propTypes = {
  imageUrl: PropTypes.string,
  size: PropTypes.string, // https://bulma.io/documentation/elements/image/#fixed-square-images
  isRounded: PropTypes.bool, 
  alt: PropTypes.string
}

export default Image;