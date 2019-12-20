import React, { useState } from 'react';

import Button from '../../components/Button/Button';
import Column from '../../components/Column/Column';
import AvatarSection from '../../components/AvatarSection/AvatarSection';
import TitleSection from '../../components/TitleSection/TitleSection';
import { yearsData } from '../../data/data';

const Years = props => {
  
  const [years, setYears] = useState(yearsData);

  const handleClick = year => {

    // Only go to next page if the year button clicked have a valid year/number
    if (!!parseInt(year)) {
      props.history.push({
        pathname: '/vehicles',
        state: { year }
      });
    }
  }

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
              {years.map((yearsGroup, index) => {
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
                              handleClick={() => handleClick(year)}
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
