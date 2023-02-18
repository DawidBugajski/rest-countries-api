import React from 'react';
import CountryPageCard from 'components/CountryPageCard';
import ButtonPrev from 'components/ButtonPrev';

const CountryPage = () => {
  return (
    <div className='justify-center w-10/12 mx-auto lg:w-11/12'>
      <ButtonPrev />
      <CountryPageCard />
    </div>
  );
};

export default CountryPage;
