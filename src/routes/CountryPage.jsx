import React from 'react';
import CountryPageCard from 'components/CountryPageCard';
import ButtonPrev from 'components/ButtonPrev';

const CountryPage = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <ButtonPrev />
      <CountryPageCard />
    </div>
  );
};

export default CountryPage;
