import { createSelector } from 'reselect';

const offersSelector = (state) => state.data;

export const getOffers = createSelector([offersSelector], (data) => data.offers);

export const getCurrency = createSelector([offersSelector], (data) => data.currency);

export const isLoading = createSelector([offersSelector], (data) => data.loading);
