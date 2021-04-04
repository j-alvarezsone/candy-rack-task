import { types } from './types';

export const addItem = (item) => ({
  type: types.ADD_ITEM,
  payload: item
});
