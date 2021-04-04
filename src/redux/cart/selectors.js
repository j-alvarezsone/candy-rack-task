import { createSelector } from 'reselect';

const cartSelector = (state) => state.cart;

export const getCarItems = createSelector([cartSelector], (state) => state.cartItems);

export const getCarItemsId = createSelector([getCarItems], (cartItems) =>
  cartItems.map((item) => item.id),
);

export const selectCartItemsCount = createSelector([getCarItems], (cartItems) =>
  cartItems.reduce((accQuantity, cartItem) => accQuantity + cartItem.quantity, 0),
);

export const selectOriginalPrice = createSelector([getCarItems], (cartItems) =>
  cartItems.reduce((accQuantity, cartItem) => {
    return cartItem.original_price > 5
      ? accQuantity + cartItem.quantity * cartItem.discounted_price
      : accQuantity + cartItem.quantity * cartItem.original_price;
  }, 39.99),
);
