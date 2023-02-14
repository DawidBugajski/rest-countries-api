import React from 'react';
import { FiMoon } from 'react-icons/fi';

const Header = () => {
  return (
    <div className='flex items-center justify-between h-24 pl-4 border-b-2 shadow-lg border-LM_VeryLightGray sm:px-8 sm:text-lg lg:text-2xl 2xl:px-11'>
      <h1 className='font-extrabold '>Where in the world?</h1>
      <div className='flex items-center justify-center pr-4 font-semibold'>
        <FiMoon className='mr-2 scale-110' />
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
