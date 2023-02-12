import React, { useContext, useEffect, useState } from 'react';
import CountryCard from 'components/CountryCard';
import { CountryContext } from 'components/CountryProvider';

const Countries = () => {
  const { countryData, searchTerm } = useContext(CountryContext);
  const [filteredCountries, setFilteredCountries] = useState(countryData);

  useEffect(() => {
    setFilteredCountries(
      countryData.filter(({ countryName }) =>
        countryName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, countryData]);

  return (
    <div className='flex flex-wrap justify-center'>
      <CountryCard filteredCountries={filteredCountries} />
    </div>
  );
};

export default Countries;

// jeśli nic nie będzie pasowało to może wygeneruj jakąś informację?
