import React from 'react';

const CountryCard = ({ countryData }) => {
  return countryData.map((country) => (
    <div
      className='w-9/12 mb-10 border-2 border-gray-100 rounded-md h-96'
      key={country.countryName}
    >
      <img
        className='w-full rounded-t-md h-1/2  border-b-[1px] border-gray-200'
        alt={country.countryName}
        src={country.flagUrl}
      />
      <div className='pt-6 pl-6'>
        <h2 className='pb-4 text-xl font-extrabold'>{country.countryName}</h2>
        <p className='font-semibold'>
          Population: <span className='font-light'>{country.population}</span>
        </p>
        <p className='font-semibold'>
          Region: <span className='font-light'>{country.region}</span>
        </p>
        <p className='font-semibold'>
          Capital: <span className='font-light'>{country.capital}</span>
        </p>
      </div>
    </div>
  ));
};

export default CountryCard;
