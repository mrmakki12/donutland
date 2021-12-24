import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/Cart/cartSlice';
import inventorySlice from '../features/Inventory/inventorySlice';


export const store = configureStore({
  reducer: {
    inventory: inventorySlice,
    cart: cartSlice,
  },
});
