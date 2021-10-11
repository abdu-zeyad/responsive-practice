import React, { useState } from 'react';
import Head from 'next/head';

export default function Header() {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className='wrapper  relative font-sexy'>

      <div className='bg-green-100 h-5'></div>
      <div className='  m-5  h-32 sm:h-40 border-2 w-11/12 flex  justify-between items-center'>
        <div className='pb-5 pl-5 sm:invisible'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            onClick={() => setShowNav(!showNav)}
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>
        <div className='flex justify-end gap-10 w-3/5  invisible sm:visible '>
          <p className='  text-right hover:text-green-400   ' >الرئيسية </p>
          <p className=' text-right hover:text-green-400'>عن معا </p>
          <p className=' text-right hover:text-green-400'>الجمعيات الخيرية </p>
        </div>

        <img
          src='https://ma3an.000webhostapp.com/assets/images/ma3an1.svg'
          alt=''
          className='w-3/12  sm:w-2/12 '
        />
      </div>

      {showNav ? (
        <div></div>
      ) : (
        <div className='  w-3/5 p-5 z-50   sm:w-32  bg-green-50 mt-5  absolute top-0  
         -left-2/4 translate-x-3/4 duration-700
        '>
          <div className=' h-5   w-full   '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              onClick={() => setShowNav(!showNav)}
              className=' mx-auto   w-5  mb-4   '
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>

          <p className='  text-center hover:text-green-400'>الرئيسية </p>
          <p className=' text-center hover:text-green-400'>عن معا </p>
          <p className=' text-center hover:text-green-400'>الجمعيات الخيرية </p>
        </div>
      )}
    </div>
  );
}
