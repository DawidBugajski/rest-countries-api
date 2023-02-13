import React, { useContext } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { CountryContext } from 'components/CountryProvider';

const SearchBar = () => {
  const { setSearchTerm, serchTerm } = useContext(CountryContext);

  const handleChange = (e) => setSearchTerm(e.target.value);

  return (
    <div className='relative w-11/12 mx-auto mt-6 mb-10 lg:m-0 lg:w-auto'>
      <AiOutlineSearch className='absolute transform scale-150 translate-y-1/2 top-1/4 left-6 text-LM_DarkGray' />
      <input
        className='pl-16 w-full shadow-md outline-none h-14 border-[1px] border-LM_VeryLightGray'
        type='text'
        placeholder='Search for a country...'
        value={serchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
