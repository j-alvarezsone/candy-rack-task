import React from 'react';
import { CustomButton } from '../CustomButton';
import { CustomIcon } from '../CustomIcon';

export const ModalContents = ({ children, title, handleClose, handleSubmit, totalPrice }) => {
  return (
    <>
      <div className='justify-center lg:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  w-screen'>
        <div className='relative w-auto my-6 mx-auto md:w-3/4 xl:w-2/4'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none '>
            {/*header*/}
            <div className='flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
              <h3 className='text-base md:text-2xl font-semibold text-center mx-auto '>{title}</h3>
              <CustomButton
                className='p-1 bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                handleClick={() => handleClose()}
                type={'button'}
              >
                <span className='flex items-center bg-transparent text-black h-6 w-6 text-2xl  outline-none focus:outline-none'>
                  ×
                </span>
              </CustomButton>
            </div>
            <div className='flex items-center justify-between p-5 border-b border-solid border-blueGray-200 bg-green-50'>
              <div className='flex items-center'>
                <div className='flex items-center justify-center ml-4 bg-white w-12 h-12 rounded-full'>
                  <CustomIcon className={'fa fa-shopping-cart fa-lg '} />
                </div>
                <h4 className='ml-4'>Your cart</h4>
              </div>
              <span className='text-lg mr-4 font-bold'>{totalPrice} US$</span>
            </div>
            {/*body*/}
            <div className='relative p-6 flex-auto '>{children}</div>
            {/*footer*/}
            <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
              <CustomButton
                className='flex items-center justify-center bg-green-500 text-white font-bold text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 leading-7'
                type={'button'}
                label={'Continue to checkout '}
                handleClick={() => handleSubmit()}
                secondIcon={<CustomIcon className={'fa fa-angle-right fa-lg ml-2'} />}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
};
