import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL_ALL } from 'utils/constants';
import CountryCard from 'components/CountryCard';

const Countries = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['countries'],
    queryFn: () => axios.get(API_URL_ALL).then((res) => res.data),
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  console.log(data);

  const countryData = data.map((country) => {
    return {
      capital: country.capital,
      population: country.population,
      countryName: country.name.common,
      region: country.region,
      flagUrl: country.flags.png,
    };
  });

  return (
    <div className='flex flex-wrap justify-center'>
      <CountryCard countryData={countryData} />
    </div>
  );
};

export default Countries;
