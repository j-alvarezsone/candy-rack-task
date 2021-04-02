import React from 'react';
import classNames from 'classnames';
import { CustomButton } from '../ui/CustomButton';
import { Select } from '../ui/Select';
import { CustomIcon } from '../ui/CustomIcon';

export const OffersList = ({ offers, index, currency }) => {
  const addToCart = (item) => {
    console.log('====================================');
    console.log(item.original_price);
    console.log('====================================');
  };

  return (
    <>
      <div className='ml-4 md:ml-4' key={offers.id}>
        <div className='flex items-center justify-between'>
          <div className='flex items-center relative'>
            <span
              className={classNames(
                'absolute top-0 -left-2 lg:-left-2  bg-gray-400 rounded-full h-6 w-6 text-center',
                {
                  badge2: index === 1,
                  badge3: index === 2,
                },
              )}
            >
              {}
            </span>
            <img className='w-12 h-12 bg-gray-100 mr-4 md:mr-6 my-4' src={offers.image} alt='offers' />
            <div className='leading-3	'>
              <span className='text-xs font-bold leading-relaxed'>{offers.title}</span>
              <span
                className={classNames('text-xs font-light leading-relaxed ml-2 ', {
                  active: index === 0,
                })}
              >
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
            <Select
              selectClassName={classNames(
                'border bg-white rounded px-2 py-1 outline-none mr-1 lg:mr-2 text-xs w-full sm:w-20 h-8 mb-1 lg:h-8 md:w-24',
                {
                  option2Hide: index === 1,
                  option3Hide: index === 2,
                },
              )}
              optionClassName={'py-1'}
              option1={'Regular'}
              option2={'hey2'}
              option3={'hey3'}
            />
            <CustomButton
              className='bg-green-500 text-white font-bold text-sm px-0.5 py-0.5 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 leading-7 h-8 w-20'
              type={'button'}
              label={'Add'}
              firstIcon={<CustomIcon className='fas fa-plus mr-2' />}
              handleClick={() => addToCart(offers)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
