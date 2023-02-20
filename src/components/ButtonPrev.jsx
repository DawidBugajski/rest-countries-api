import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { CountryContext } from './CountryProvider';

const ButtonPrev = () => {
  const { setSearchTerm } = useContext(CountryContext);
  const handleResetSearchTerm = () => setSearchTerm('');
  return (
    <div className=' mt-8 shadow-lg border-[1px] w-24 py-1 rounded-sm 2xl:w-32 2xl:text-xl 2xl:mb-20 hover:text-blue-900 dark:hover:text-blue-500  dark:text-white dark:bg-DM_DarkBlue dark:border-DM_DarkBlue dark:shadow-LM_VeryDarkBlue'>
      <Link
        onClick={handleResetSearchTerm}
        className='flex items-center justify-center '
        to={'/rest-countries-api'}
      >
        <BsArrowLeft className='mx-2' />
        Back
      </Link>
    </div>
  );
};

export default ButtonPrev;
