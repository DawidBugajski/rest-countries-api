import React from 'react';
import Countries from 'components/Countries';
import Header from 'components/Header';
import SearchBar from 'components/SearchBar';
import Filter from 'components/Filter';

const App = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Filter />
      <Countries />
    </>
  );
};

export default App;
