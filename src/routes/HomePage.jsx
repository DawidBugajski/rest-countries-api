import React from 'react';
import SearchBar from 'components/SearchBar';
import RegionFilterDropdown from 'components/RegionFilterDropdown';
import Countries from 'components/Countries';

const HomePage = () => {
  return (
    <>
      <div className='my-8 mx-7 lg:flex lg:justify-between xl:mx-11 2xl:mx-12 sm:mx-1 lg:mx-7'>
        <SearchBar />
        <RegionFilterDropdown />
      </div>
      <Countries />
    </>
  );
};

export default HomePage;
