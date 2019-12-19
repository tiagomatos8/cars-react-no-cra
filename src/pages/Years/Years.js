import React, { PropTypes } from 'react';
import Image from '../../components/Image/Image';

import './Years.scss';

const Years = props => {
  return (
    <section className='Years-component section'>
      <div className='container'>
        <div>
          
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Image 
                imageUrl='../../../assets/avatar-logo-center.png' 
                alt='random person avatar' 
                isRounded={true} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Years.propTypes = {};

export default Years;
