import React, { useContext } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { CountryContext } from 'components/CountryProvider';

const SearchBar = () => {
  const { countryData } = useContext(CountryContext);
  console.log(countryData);
  return (
    <div className='relative w-11/12 mx-auto my-6'>
      <AiOutlineSearch className='absolute transform scale-150 translate-y-1/2 top-1/4 left-6 text-LM_DarkGray' />
      <input
        className='pl-16 w-full shadow-md outline-none h-14 border-[1px] border-LM_VeryLightGray'
        type='text'
        placeholder='Search for a country...'
      />
    </div>
  );
};

export default SearchBar;

// Todo
// aktualizowanie state w inpucie na string taki co aktualnie jest wpisane
// filtrowanie tego i wyświetlanie informacji zgodnych z aktualnym filtrem
