import React, { useContext } from 'react';
import CountryCard from 'components/CountryCard';
import { CountryContext } from 'components/CountryProvider';

const Countries = () => {
  const { countryData } = useContext(CountryContext);
  return (
    <div className='flex flex-wrap justify-center'>
      <CountryCard countryData={countryData} />
    </div>
  );
};

export default Countries;
