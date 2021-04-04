import React, { useState, useEffect } from 'react';
// Components
import { CustomButton } from '../CustomButton';
import { OffersList } from '../../offers/OffersList';
import { Select } from '../Select';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getCurrency, getOffers } from '../../../redux/offers/selectors';
import { fetchCurrencyAction, fetchOffersAction } from '../../../redux/offers/action';
import { fetchCurrency, fetchOffers } from '../../../redux/offers/operations';
import { selectOriginalPrice } from '../../../redux/cart/selectors';
import { addItem } from '../../../redux/cart/action';
import { ModalContents } from './ModalContents';

export const Modal = () => {
  const selectors = useSelector((state) => state);
  const dispatch = useDispatch();
  // Cart
  const price = selectOriginalPrice(selectors);
  const totalPrice = price.toLocaleString();
  // Offers
  const offers = getOffers(selectors);
  const currency = getCurrency(selectors);

  useEffect(() => {
    dispatch(fetchOffers(fetchOffersAction));
    dispatch(fetchCurrency(fetchCurrencyAction));
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);
  const [bulbToCart, setBulbToCart] = useState([]);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    alert('Hello world');
    setShowModal(false);
  };

  const addToCart = (bulb) => {
    setBulbToCart([...bulbToCart, bulb]);
    dispatch(addItem(bulb));
  };

  return (
    <>
      <div className='flex justify-center'>
        <CustomButton
          className={
            'bg-blue-400 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
          }
          label={'Add to cart'}
          type={'button'}
          handleClick={handleOpen}
        />
      </div>
      {showModal ? (
        <>
          <ModalContents
            title={"Wait, don't miss our deals, today only!"}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            totalPrice={totalPrice}
          >
            {offers.slice(0, 1).map((offer) => (
              <OffersList
                key={offer.id}
                offers={offer}
                currency={currency}
                badgeClassName={
                  'absolute top-0 -left-2 lg:-left-2  bg-gray-400 rounded-full h-6 w-6 text-center'
                }
                originalPriceClassName={'text-xs font-light leading-relaxed ml-2 line-through'}
                quantity={bulbToCart && bulbToCart.length}
                handleClick={() => addToCart(offer)}
                select={
                  <Select
                    selectClassName={
                      'border bg-white rounded px-2 py-1 outline-none mr-1 lg:mr-2 text-xs w-full sm:w-20 h-8 mb-1 lg:h-8 md:w-24'
                    }
                    optionClassName={'py-1'}
                  />
                }
              />
            ))}
            {offers.slice(1).map((offer, index) => (
              <OffersList
                key={offer.id}
                offers={offer}
                originalPriceClassName={'text-xs font-light leading-relaxed ml-2'}
                index={index}
                currency={currency}
                handleClick={() => dispatch(addItem(offer))}
              />
            ))}
          </ModalContents>
        </>
      ) : null}
    </>
  );
};
