import React from 'react';

const Error = ({ errorMessage }) => {
  return (
    <div className='text-xl text-center lg:text-2xl dark:text-white'>
      <img
        className='mx-auto my-12 md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-2/5'
        src='/images/error.svg'
        alt='computer'
      />
      <p className=''>An error has occurred</p>
      <p>{errorMessage}</p>
    </div>
  );
};

export default Error;
