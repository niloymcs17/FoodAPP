import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../Const/Items.const';
import { enableMapSet } from 'immer';
enableMapSet();

interface CartItem extends Item {
  quantity: number;
}

interface CartState {
  items: Map<string, CartItem>; // Map with string keys
}

const initialState: CartState = {
  items: new Map(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCartItem: (state, action: PayloadAction<{ item: Item; quantity: number }>) => {
      const { id } = action.payload.item;
      const existingItem = state.items.get(id);
      
      if (action.payload.quantity > 0) {
        if (existingItem) {
          // Update the quantity of the existing item
          existingItem.quantity = action.payload.quantity;
        } else {
          // Add a new item to the cart with the specified quantity
          state.items.set(id, {
            ...action.payload.item,
            quantity: action.payload.quantity,
          });
        }
      } else {
        // Remove the item from the cart if quantity is zero or less
        if (existingItem) {
          state.items.delete(id);
        }
      }
    },
    clearCart: (state) => {
      state.items.clear();
    },
  },
});

export const { updateCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
