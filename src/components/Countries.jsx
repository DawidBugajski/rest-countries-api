import React, { useContext, useEffect, useState } from 'react';
import CountryCard from 'components/CountryCard';
import { CountryContext } from 'components/CountryProvider';

const Countries = () => {
  const { countryData, searchTerm, selectedRegion } =
    useContext(CountryContext);
  const [searchFilteredCountries, setSearchFilteredCountries] =
    useState(countryData);

  // filter by search input and dropdown
  useEffect(() => {
    setSearchFilteredCountries(
      countryData.filter(
        ({ countryName, region }) =>
          countryName.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedRegion === 'Filter by region' || region === selectedRegion)
      )
    );
  }, [selectedRegion, searchTerm, countryData]);

  return (
    <div className='flex flex-wrap justify-center'>
      <CountryCard searchFilteredCountries={searchFilteredCountries} />
    </div>
  );
};

export default Countries;

// if nothing matches then maybe generate some information?
