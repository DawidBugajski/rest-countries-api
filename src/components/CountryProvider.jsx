import React, { createContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL_ALL } from 'utils/constants';

export const CountryContext = createContext();

const CountryProvider = (props) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['countries'],
    queryFn: () => axios.get(API_URL_ALL).then((res) => res.data),
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  const countryData = data.map((country) => {
    return {
      capital: country.capital,
      population: country.population,
      countryName: country.name.common,
      region: country.region,
      flagUrl: country.flags.png,
    };
  });

  console.log(countryData);

  return (
    <CountryContext.Provider value={{ countryData }}>
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
