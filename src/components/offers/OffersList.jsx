import React from 'react';
import { CustomButton } from '../ui/CustomButton';
import { CustomIcon } from '../ui/CustomIcon';

export const OffersList = ({
  offers,
  currency,
  quantity,
  select,
  badgeClassName,
  originalPriceClassName,
  handleClick,
}) => {
  return (
    <>
      <div className='ml-4 md:ml-4' key={offers.id}>
        <div className='flex items-center justify-between'>
          <div className='flex items-center relative'>
            <span className={badgeClassName}>{quantity}</span>
            <img className='w-12 h-12 bg-gray-100 mr-4 md:mr-6 my-4' src={offers.image} alt='offers' />
            <div className='leading-3	'>
              <span className='text-xs font-bold leading-relaxed'>{offers.title}</span>
              <span className={originalPriceClassName}>
                {offers.original_price}
                {currency}
              </span>
              <span className='text-xs font-light leading-relaxed ml-2 '>
                {offers.discounted_price}
                {offers.discounted_price !== null ? currency : null}
              </span>
              <br />
              <span className='text-xs  leading-relaxed'>{offers.short_description}</span>
            </div>
          </div>
          <div className='ml-16 md:ml-0 text-right'>
            {select}
            <CustomButton
              className='bg-green-500 text-white font-bold text-sm px-0.5 py-0.5 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 leading-7 h-8 w-20'
              type={'button'}
              label={'Add'}
              firstIcon={<CustomIcon className='fas fa-plus mr-2' />}
              handleClick={() => handleClick()}
            />
          </div>
        </div>
      </div>
    </>
  );
};
