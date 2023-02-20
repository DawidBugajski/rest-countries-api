import React, { createContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL_ALL } from 'utils/constants';
import SpinnerBorderCountries from 'components/SpinnerBorderCountries';
import Error from 'components/Error';

export const CountryContext = createContext();

const CountryProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Filter by region');
  const [darkMode, setDarkMode] = useState(() => {
    const localData = localStorage.getItem('darkMode');
    return localData ? JSON.parse(localData) : true;
  });

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [darkMode]);

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

  if (isLoading)
    return (
      <div className='flex items-center justify-center h-screen'>
        <SpinnerBorderCountries />
      </div>
    );

  if (error) return <Error errorMessage={error.message} />;

  return (
    <CountryContext.Provider
      value={{
        countryDataMain: data,
        searchTerm,
        setSearchTerm,
        selectedRegion,
        setSelectedRegion,
        darkMode,
        setDarkMode,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
