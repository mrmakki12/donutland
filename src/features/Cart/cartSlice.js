import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, price } = action.payload
            state[id] = {
                name: id,
                quantity: state[id] ? state[id].quantity + 1 : 1,
                price: price
            }
        },
        clearCart: (state) => {
            // clears state
            for(const data in state) {
                delete state[data];
            }
        }
    }
})
export const selectCart = (state) => state.cart;
export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;