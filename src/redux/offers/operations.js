import { types } from './types';
import { startLoadingAction } from './action';

export const fetchOffers = () => {
  return async (dispatch) => {
    try {
      dispatch(startLoadingAction());
      const res = await fetch('https://private-fbc09b-sampleapi281.apiary-mock.com/offers');
      const data = await res.json();

      dispatch({ type: types.FETCH_OFFERS, payload: data.offers });
    } catch (err) {
      dispatch({ type: types.FETCH_FAILED, payload: err.message });
    }
  };
};

export const fetchCurrency = () => {
  return async (dispatch) => {
    try {
      dispatch(startLoadingAction());
      const res = await fetch('https://private-fbc09b-sampleapi281.apiary-mock.com/offers');
      const data = await res.json();

      dispatch({ type: types.FETCH_CURRENCY, payload: data.currency });
    } catch (err) {
      dispatch({ type: types.FETCH_FAILED, payload: err.message });
    }
  };
};
