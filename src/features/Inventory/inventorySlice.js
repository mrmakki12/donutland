import { createSlice } from '@reduxjs/toolkit'
import { featuredDonuts } from "../../data";

const inventorySlice = createSlice({

    name: 'inventory',

    initialState: featuredDonuts,

    reducers: {}

})
export default inventorySlice.reducer;
export const selectInventory = (state) => state.inventory;