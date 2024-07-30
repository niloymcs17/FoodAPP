import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../Const/Items.const';

interface CartItem extends Item {
  quantity: number;
}

interface CartState {
  items: { [id: string]: CartItem }; // Use plain object instead of Map
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
          // Update the quantity of the existing item
          existingItem.quantity = action.payload.quantity;
        } else {
          // Add a new item to the cart with the specified quantity
          state.items[id] = {
            ...action.payload.item,
            quantity: action.payload.quantity,
          };
        }
      } else {
        // Remove the item from the cart if quantity is zero or less
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
export default cartSlice.reducer;
