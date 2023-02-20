import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ searchFilteredCountries }) => {
  return searchFilteredCountries.map(
    ({ countryName, flagUrl, population, region, capital }) => (
      <div
        className='w-9/12 mb-10 rounded-md shadow-md h-96 sm:w-5/12 sm:mx-6 md:w-[29%] md:mx-2 lg:w-[29%] lg:mx-5 xl:w-[21%] 2xl:w-[20%] 2xl:mx-9 min-[1800px]:w-[16%] dark:text-white  dark:bg-DM_DarkBlue'
        key={countryName}
      >
        <Link to={`/name/${countryName}`}>
          <img
            className='w-full rounded-t-md h-1/2 border-b-[1px] border-t-[1px] border-gray-200 cursor-pointer dark:border-DM_DarkBlue'
            alt={countryName}
            src={flagUrl}
          />
        </Link>
        <div className='pt-6 pl-6 '>
          <h2 className='pb-4 text-xl font-extrabold'>
            <Link
              to={`/name/${countryName}`}
              className='hover:text-blue-900 dark:hover:text-blue-500'
            >
              {countryName}
            </Link>
          </h2>
          <p className='font-semibold'>
            Population:{' '}
            <span className='font-light'>{population.toLocaleString()}</span>
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
