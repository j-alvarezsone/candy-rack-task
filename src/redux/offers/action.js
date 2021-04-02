import { types } from './types';

export const fetchOffersAction = (offers) => ({
  type: types.FETCH_OFFERS,
  payload: offers,
});

export const fetchCurrencyAction = (currency) => ({
  type: types.FETCH_CURRENCY,
  payload: currency,
});

export const startLoadingAction = () => ({
  type: types.IS_LOADING,
});
