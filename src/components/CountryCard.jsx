import React from 'react';

const CountryCard = ({ countryData }) => {
  return countryData.map((country) => (
    <div
      className='w-8/12 mb-10 bg-orange-300 rounded-lg h-72'
      key={country.countryName}
    >
      <img
        className='w-full rounded-tl-lg h-1/2'
        alt={country.countryName}
        src={country.flagUrl}
      />
    </div>
  ));
};

export default CountryCard;
