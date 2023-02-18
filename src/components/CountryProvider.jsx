import React, { createContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL_ALL } from 'utils/constants';

export const CountryContext = createContext();

const CountryProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Filter by region');
  const { isLoading, error, data } = useQuery({
    queryKey: ['countries'],
    queryFn: () =>
      axios.get(API_URL_ALL).then((res) =>
        res.data
          .map((country) => ({
            capital: country.capital,
            population: country.population,
            countryName: country.name.common,
            region: country.region,
            flagUrl: country.flags.png,
          }))
          .sort((a, b) => b.population - a.population)
      ),
  });

  if (isLoading) return 'HEJ ŁADUJE SIE XD';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <CountryContext.Provider
      value={{
        countryDataMain: data,
        searchTerm,
        setSearchTerm,
        selectedRegion,
        setSelectedRegion,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
