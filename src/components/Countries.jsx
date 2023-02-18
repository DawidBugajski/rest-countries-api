import React, { useContext, useEffect, useState } from 'react';
import CountryCard from 'components/CountryCard';
import { CountryContext } from 'components/CountryProvider';

const Countries = () => {
  const { countryDataMain, searchTerm, selectedRegion } =
    useContext(CountryContext);
  const [searchFilteredCountries, setSearchFilteredCountries] =
    useState(countryDataMain);

  // filter by search input and dropdown && sort largest population
  useEffect(() => {
    setSearchFilteredCountries(
      countryDataMain
        .filter(
          ({ countryName, region }) =>
            countryName.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedRegion === 'Filter by region' || region === selectedRegion)
        )
        .sort((a, b) => b.population - a.population)
    );
  }, [selectedRegion, searchTerm, countryDataMain]);

  return (
    <div className='flex flex-wrap justify-center'>
      <CountryCard searchFilteredCountries={searchFilteredCountries} />
    </div>
  );
};

export default Countries;
