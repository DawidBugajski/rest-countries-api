import React from 'react';

const Header = () => {
  return (
    <div className='flex items-center justify-between h-24 pl-4 border-b-2 shadow-lg border-LM_VeryLightGray'>
      <h1 className='font-extrabold'>Where in the world?</h1>
      <div className='flex justify-center pr-4'>
        <p>ikonka</p>
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
