// selectors.ts
import { createSelector } from 'reselect';
import { RootState } from './store';

// Selector to get the cart items from the state
export const selectCartItems = createSelector(
  [(state: RootState) => state.cart.items],
  (items) => Object.values(items)
);

// Selector to get the cart total
export const selectCartTotal = createSelector(
  [(state: RootState) => state.cart.items],
  (items) => {
    return Object.values(items).reduce(
      (sum, item) => sum + Number(item.price) * item.quantity,
      0
    );
  }
);