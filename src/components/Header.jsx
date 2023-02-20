import React, { useContext } from 'react';
import { FiMoon } from 'react-icons/fi';
import { CountryContext } from 'components/CountryProvider';

const Header = () => {
  const { darkMode, setDarkMode } = useContext(CountryContext);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };
  return (
    <div className='flex items-center justify-between h-24 pl-4 border-b-2 shadow-lg border-LM_VeryLightGray sm:px-8 sm:text-lg lg:text-2xl 2xl:px-11 dark:bg-DM_DarkBlue dark:text-white dark:border-DM_DarkBlue dark:shadow-LM_VeryDarkBlue'>
      <h1 className='font-extrabold '>Where in the world?</h1>
      <div
        onClick={handleToggleDarkMode}
        className='flex items-center justify-center pr-4 font-semibold hover:underline hover:cursor-pointer'
      >
        <FiMoon className='mr-2 scale-11 dark:fill-white dark:stroke-none ' />
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;

//hover:fill-black dark:hover:stroke-black
