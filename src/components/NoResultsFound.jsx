import React from 'react';

const NoResultsFound = () => {
  return (
    <div className='text-xl text-center md:text-2xl dark:text-white'>
      <img
        className='w-2/3 mx-auto my-12 sm:w-1/2 md:w-2/3 lg:w-2/3 2xl:w-1/2'
        src={`${process.env.PUBLIC_URL}/images/noresoult.svg`}
        alt='person watchs blackhole'
      />
      <p className=''>The data given does not match any country.</p>
    </div>
  );
};

export default NoResultsFound;
