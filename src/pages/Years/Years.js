import React from 'react';
import Image from '../../components/Image/Image';

import './Years.scss';
import Button from '../../components/Button/Button';
import Column from '../../components/Column/Column';

const Years = props => {
  const yearsData = [
    ['2019', '2018', '2017', '2016'],
    ['2015', '2014', '2013', '2012'],
    ['2011', '2010', '2009', "I'll walk"]
  ];
  return (
    <div className='Years-component'>

      {/* START - AVATAR SECTION */}
      <section className='section'>
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
      {/* END - AVATAR SECTION */}

      {/* START - TITLE SECTION */}
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='heading'>
                <h1 className='title has-text-centered has-text-success'>
                  What year is the car?
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END - TITLE SECTION */}

      {/* START - YEARS SECTION */}
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              {yearsData.map((yearsGroup, index) => {
                return (
                  <div key={index} className='columns'>
                    {yearsGroup.map((year, index) => {
                      if (index <= 3) {
                        return (
                          <Column size='is-one-quarter'>
                            <Button
                              label={year}
                              isFullwidth={true}
                              size='is-medium'
                              color='has-text-grey'
                            />
                          </Column>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>                  
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* END - YEARS SECTION */}

    </div>
  );
};

Years.propTypes = {};

export default Years;
