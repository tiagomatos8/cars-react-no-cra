import React from 'react';
import PropTypes from 'prop-types';

/**
 * TitleSection - Title section of the pages
 *
 * @param {string} title title text
 */
const TitleSection = props => {
  return (
    <section className='TitleSection-component section'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <div className='heading'>
              <h1 className='title has-text-centered has-text-success is-size-5-mobile'>
                {props.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TitleSection.propTypes = {
  title: PropTypes.string
};

export default TitleSection;
