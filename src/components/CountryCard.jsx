import React from 'react';

const CountryCard = ({ filteredCountries }) => {
  return filteredCountries.map(
    ({ countryName, flagUrl, population, region, capital }) => (
      <div className='w-9/12 mb-10 rounded-md shadow-md h-96' key={countryName}>
        <img
          className='w-full rounded-t-md h-1/2 border-b-[1px] border-t-[1px] border-gray-200'
          alt={countryName}
          src={flagUrl}
        />
        <div className='pt-6 pl-6'>
          <h2 className='pb-4 text-xl font-extrabold'>{countryName}</h2>
          <p className='font-semibold'>
            Population: <span className='font-light'>{population}</span>
          </p>
          <p className='font-semibold'>
            Region: <span className='font-light'>{region}</span>
          </p>
          <p className='font-semibold'>
            Capital: <span className='font-light'>{capital}</span>
          </p>
        </div>
      </div>
    )
  );
};

export default CountryCard;
