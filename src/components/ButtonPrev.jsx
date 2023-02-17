import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const ButtonPrev = () => {
  return (
    <div className=' mt-8 shadow-lg border-[1px] w-24 py-1 rounded-sm'>
      <Link className='flex items-center justify-center ' to={'/'}>
        <BsArrowLeft className='mx-2' />
        Back
      </Link>
    </div>
  );
};

export default ButtonPrev;
