import React, { PropTypes } from 'react';
import Image from '../../components/Image/Image';

const YearsPage = props => {
  return (
    <section className='section'>
      <div className='container'>
        <div>
          
          <div class="columns">
            <div class="column is-half is-offset-one-quarter is-centered">
              <Image imageUrl='https://i.pravatar.cc/100' size='is-128x128' isRounded={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

YearsPage.propTypes = {};

export default YearsPage;
