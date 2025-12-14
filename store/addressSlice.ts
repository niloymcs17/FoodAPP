import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Address {
  id: string;
  label: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  latitude?: number;
  longitude?: number;
  isDefault?: boolean;
}

interface AddressState {
  addresses: Address[];
  selectedAddressId: string | null;
}

const initialState: AddressState = {
  addresses: [],
  selectedAddressId: null,
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addAddress: (state, action: PayloadAction<Address>) => {
      // If this is the first address or marked as default, set it as default
      if (state.addresses.length === 0 || action.payload.isDefault) {
        state.addresses.forEach(addr => addr.isDefault = false);
        action.payload.isDefault = true;
        state.selectedAddressId = action.payload.id;
      }
      state.addresses.push(action.payload);
    },
    updateAddress: (state, action: PayloadAction<Address>) => {
      const index = state.addresses.findIndex(addr => addr.id === action.payload.id);
      if (index !== -1) {
        state.addresses[index] = action.payload;
      }
    },
    deleteAddress: (state, action: PayloadAction<string>) => {
      state.addresses = state.addresses.filter(addr => addr.id !== action.payload);
      if (state.selectedAddressId === action.payload) {
        state.selectedAddressId = state.addresses[0]?.id || null;
      }
    },
    setSelectedAddress: (state, action: PayloadAction<string | null>) => {
      state.selectedAddressId = action.payload;
    },
    setDefaultAddress: (state, action: PayloadAction<string>) => {
      state.addresses.forEach(addr => {
        addr.isDefault = addr.id === action.payload;
      });
      state.selectedAddressId = action.payload;
    },
  },
});

export const { addAddress, updateAddress, deleteAddress, setSelectedAddress, setDefaultAddress } = addressSlice.actions;
export const selectAddresses = (state: { address: AddressState }) => state.address.addresses;
export const selectSelectedAddress = (state: { address: AddressState }) => 
  state.address.addresses.find(addr => addr.id === state.address.selectedAddressId) || null;
export default addressSlice.reducer;

