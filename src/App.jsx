import React from 'react';
import Countries from 'components/Countries';
import Header from 'components/Header';
import SearchBar from 'components/SearchBar';
import RegionFilterDropdown from 'components/RegionFilterDropdown';
import CountryProvider from 'components/CountryProvider';

const App = () => {
  return (
    <CountryProvider>
      <Header />
      <div className=' lg:flex lg:justify-between'>
        <SearchBar />
        <RegionFilterDropdown />
      </div>
      <Countries />
    </CountryProvider>
  );
};

export default App;
