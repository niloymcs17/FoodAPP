// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../Const/Items.const';
import { RootState } from './types'; // Import from types.ts

interface CartItem extends Item {
  quantity: number;
}

export interface CartState {
  items: { [id: string]: CartItem };
}

const initialState: CartState = {
  items: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCartItem: (state, action: PayloadAction<{ item: Item; quantity: number }>) => {
      const { id } = action.payload.item;
      const existingItem = state.items[id];
      
      if (action.payload.quantity > 0) {
        if (existingItem) {
          existingItem.quantity = action.payload.quantity;
        } else {
          state.items[id] = {
            ...action.payload.item,
            quantity: action.payload.quantity,
          };
        }
      } else {
        if (existingItem) {
          delete state.items[id];
        }
      }
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { updateCartItem, clearCart } = cartSlice.actions;

export const selectCartItemsCount = (state: RootState) => {
  const cartItems = Object.values(state.cart.items);
  return cartItems.length;
};

export default cartSlice.reducer;
