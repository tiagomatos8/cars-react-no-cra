import React, { PropTypes } from 'react';

import AvatarSection from '../../components/AvatarSection/AvatarSection';
import TitleSection from '../../components/TitleSection/TitleSection';
import Image from '../../components/Image/Image';
import VehicleCard from '../../components/VehicleCard/VehicleCard';

const Vehicles = props => {
  const carsMockData = [
    {
      model: 'Ascent',
      series: 'Sport',
      variant: 'Ascent Sport Sedan 4dr Spts Auto 6sp 2.5i',
      new_price: 30090,
      from: 614
    },
    {
      model: 'Ascent',
      series: 'Sport',
      variant: 'Ascent Sport Sedan 4dr Spts Auto 6sp 2.5i',
      new_price: 30590,
      from: 625
    }
  ];

  return (
    <div className='Vehicles-component'>
      <AvatarSection />
      <TitleSection title="Let's find your car" />
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              {carsMockData.map((car, index) => {
                return (
                    <VehicleCard 
                      key={index}
                      imageUrl='../../../assets/toyota-avent.png'
                      model={car.model}
                      series={car.series}
                      variant={car.variant}
                      year={props.location.state.year}
                      newPrice={car.new_price}
                      fromPrice={car.from}
                    />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Vehicles.propTypes = {};

export default Vehicles;
