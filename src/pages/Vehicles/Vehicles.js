import React, { useState } from 'react';

import AvatarSection from '../../components/AvatarSection/AvatarSection';
import TitleSection from '../../components/TitleSection/TitleSection';
import VehicleCard from '../../components/VehicleCard/VehicleCard';
import { vehiclesData } from '../../data/data';

const Vehicles = props => {

  const [vehicles, setVehicles] = useState(vehiclesData);

  return (
    <div className='Vehicles-component'>
      <AvatarSection />
      <TitleSection title="Let's find your car" />
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              {vehicles.map((car, index) => {
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
