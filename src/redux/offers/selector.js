import { createSelector } from 'reselect';

const offersSelector = (state) => state.data;

export const getOffers = createSelector([offersSelector], (state) => state.offers);

export const getCurrency = createSelector([offersSelector], (state) => state.currency);

export const isLoading = createSelector([offersSelector], (state) => state.loading);
