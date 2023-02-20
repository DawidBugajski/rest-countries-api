import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className='w-11/12 mx-auto text-lg text-center 2xl:text-xl dark:text-white'>
      <img
        className='w-10/12 mx-auto mt-12 lg:w-2/3 xl:w-1/2 2xl:w-2/5'
        src={`${process.env.PUBLIC_URL}/images/404.svg`}
        alt='404page'
      />
      <h1 className='my-4 text-3xl 2xl:text-5xl'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to='/'>
        <p className='font-semibold text-blue-900 hover:text-purple-600 dark:text-blue-500 dark:hover:text-purple-400'>
          Back to the main page
        </p>
      </Link>
    </div>
  );
};

export default Error404;
