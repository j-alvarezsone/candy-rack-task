import { types } from './types';

const INITIAL_STATE = {
  currency: '',
  offers: [],
  loading: false,
  errorMsg: '',
};

export const OffersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.IS_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };

    case types.FETCH_FAILED:
      return {
        ...state,
        errorMsg: action.payload,
        loading: false,
      };

    case types.FETCH_OFFERS:
      return {
        ...state,
        offers: [...action.payload],
        loading: false,
        errorMsg: '',
      };

    case types.FETCH_CURRENCY:
      return {
        ...state,
        currency: action.payload,
        loading: false,
        errorMsg: '',
      };

    default:
      return state;
  }
};
