import React from 'react';
import Countries from 'components/Countries';
import Header from 'components/Header';
import SearchBar from 'components/SearchBar';
import Filter from 'components/Filter';
import CountryProvider from 'components/CountryProvider';

const App = () => {
  return (
    <CountryProvider>
      <Header />
      <SearchBar />
      <Filter />
      <Countries />
    </CountryProvider>
  );
};

export default App;
