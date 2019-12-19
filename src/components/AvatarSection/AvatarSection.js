import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../components/Image/Image';

/**
 * AvatarSection - Avatar section of the pages
 *
 * @param {*} props
 */
const AvatarSection = props => {
  return (
    <section className='AvatarSection-component section'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <Image
              imageUrl='../../../assets/avatar-logo-center.png'
              alt='random person avatar'
              isRounded={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

AvatarSection.propTypes = {};

export default AvatarSection;
