import React from 'react';
import { Modal } from '../ui/modal/Modal';
export const CandyRackScreen = () => {
  return (
    <div className='flex items-center justify-center md:h-screen  w-screen'>
      <div className='max-w-md mx-auto  md:max-w-2xl'>
        <div className='md:flex'>
          <img
            src='https://lw-cdn.com/images/E1BCF95244EF/k_8b4b882dd5a329616f6904b94d05b008;w_535;h_535;q_70/stojaci-lampa-covaleda-s-trojnozkou-cerna-zlata.webp'
            alt='lamp'
            className='h-full w-8/12 md:w-60 sm:w-44 mx-auto object-cover'
          />
          <div className='p-7'>
            <p className='text-gray-500 text-sm	md:text-lg sm:text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ex nobis impedit iusto debitis,
              nulla voluptas sed, ipsa quas consequuntur sapiente libero minus, est numquam placeat.
              Dignissimos sunt praesentium quos!
            </p>
          </div>
        </div>
        <Modal />
      </div>
    </div>
  );
};
