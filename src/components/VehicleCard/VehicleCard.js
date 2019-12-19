import React from 'react'
import PropTypes from 'prop-types';

import Image from '../../components/Image/Image';
import './VehicleCard.scss';

/**
 * VehicleCard - Component receives car details and render a card with data received
 * 
 * @param {string} imageUrl 
 * @param {string} model 
 * @param {string} series 
 * @param {string} variant 
 * @param {string} year 
 * @param {string} newPrice 
 * @param {string} fromPrice 
 */
const VehicleCard = props => {
  return (
    <div className='VehicleCard-component box'>
    <div className='columns'>
      <div className='column'>
        <Image imageUrl='../../../assets/toyota-avent.png' />
      </div>
      <div className='car-info-block column is-8'>
        <h1 className='title is-size-4 has-text-grey has-text-centered'>{`${props.year} ${props.model} ${props.series}`}</h1>
        <h2 className='subtitle has-text-grey has-text-centered is-size-6'>
          {props.variant}
        </h2>

        <div className='level'>
          <div className='level-left'>
            <div className='level-item'>
              <p className='car-new-price'>
                <span className='has-text-grey is-size-6 has-text-weight-semibold'>
                  NEW{' '}
                  <span className='has-text-weight-bold is-size-3'>
                    {(props.newPrice / 1000)
                      .toFixed(3)
                      .replace('.', ',')}
                  </span>{' '}
                  RRP*
                </span>
              </p>
            </div>
          </div>

          <div className='level-right'>
            <div className='level-item'>
              <p className='car-from-price'>
                <span className='has-text-success is-size-6 has-text-weight-semibold'>
                  FROM{' '}
                  <span className='has-text-weight-bold is-size-3'>
                    {props.fromPrice}
                  </span>{' '}
                  per month*
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

VehicleCard.propTypes = {
  imageUrl: PropTypes.string,
  model: PropTypes.string,
  series: PropTypes.string,
  variant: PropTypes.string,
  year: PropTypes.string,
  newPrice: PropTypes.number,
  fromPrice: PropTypes.number
}

export default VehicleCard