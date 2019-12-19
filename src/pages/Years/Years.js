import React from 'react';

import Button from '../../components/Button/Button';
import Column from '../../components/Column/Column';
import AvatarSection from '../../components/AvatarSection/AvatarSection';
import TitleSection from '../../components/TitleSection/TitleSection';

const Years = props => {
  const yearsData = [
    ['2019', '2018', '2017', '2016'],
    ['2015', '2014', '2013', '2012'],
    ['2011', '2010', '2009', "I'll walk"]
  ];
  return (
    <div className='Years-component'>

      <AvatarSection />

      <TitleSection title='What year is the car?' />

      {/* START - YEARS SECTION */}
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>

              {/* START - PRINT YEARS ROW  */}
              {yearsData.map((yearsGroup, index) => {
                return (
                  <div key={index} className='columns'>

                    {/* START - PRINT YEAR BUTTON  */}
                    {yearsGroup.map(year => {
                        return (
                          <Column key={year} size='is-one-quarter'>
                            <Button
                              label={year}
                              isFullwidth={true}
                              size='is-medium'
                              color='has-text-grey'
                              handleClick={() => props.history.push({ pathname: '/vehicles', state: { year } })}
                            />
                          </Column>
                        );
                    })}
                    {/* END - PRINT YEAR BUTTON  */}

                  </div>                  
                );
              })}
              {/* END - PRINT YEARS ROW  */}
              
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
